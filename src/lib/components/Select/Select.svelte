<script lang="ts">
  import { browser } from "$app/environment";
  import { onDestroy } from "svelte";
  import { Button, Dropdown, TextInput } from "$lib";
  import type { SelectOption, TextInputVariant } from "$lib";

  export let options: SelectOption[] = [];
  export let width = 0;
  export let maxHeight = 0;
  export let value: SelectOption | null;
  export let onChange: (option: SelectOption) => void;
  export let inputControl = true;
  export let label = "";
  export let placeholder = "";
  export let fullWidthDropdown = false;
  export let searchInDropdown = false;
  export let variant: TextInputVariant = "underlined";

  let focusTextInput: () => void;

  let searchString = "";
  let selectOptions = options;
  let ref: HTMLDivElement;
  let isDropdownVisible = false;
  let isFocused = false;
  let isJustSelected = false;

  // REACTIVITY
  $: {
    selectOptions =
      options?.filter(
        (option) =>
          option.text.toUpperCase().includes(searchString.toUpperCase()) ||
          option.value.toUpperCase().includes(searchString.toUpperCase())
      ) || [];
  }

  // LIFECYCLE
  onDestroy(() => {
    if (browser) {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", handleKeyDown);
    }
  });

  // HANDLERS
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Tab":
        if (isDropdownVisible) {
          hideDropdown();
          isJustSelected = true;
          focusTextInput && focusTextInput();
        }
        break;
      case "Enter":
        if (isFocused && !isDropdownVisible) {
          e.stopPropagation();
          showDropdown();
        }
        break;
      default:
        return;
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        isJustSelected = true;
        toggleDropdown();
        focusTextInput && focusTextInput();
        break;
      case "ArrowDown":
        if (!isDropdownVisible) {
          isJustSelected = true;
          toggleDropdown();
          focusTextInput && focusTextInput();
        }
        break;

      default:
        return;
    }
  };

  const handleMouseUp = () => {
    if (inputControl) {
      isJustSelected = false;
      if (!isDropdownVisible) {
        showDropdown();
      }
    }
  };

  const handleTextInputFocus = () => {
    isFocused = true;
    showDropdown();
    if (browser) {
      document.addEventListener("keyup", handleKeyUp);
      document.addEventListener("keydown", handleKeyDown);
    }
  };

  const handleTextInputBlur = () => {
    isFocused = false;
    if (browser && !isDropdownVisible) {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", handleKeyDown);
    }
  };

  const handleOptionClick = (option: SelectOption) => {
    onChange && onChange(option);
    hideDropdown();
    isJustSelected = true;
    focusTextInput && focusTextInput();
  };

  // HELPERS
  const showDropdown = () => {
    if (!isJustSelected) {
      searchString = "";
      isDropdownVisible = true;
    } else {
      isJustSelected = false;
    }
  };

  const hideDropdown = () => {
    isDropdownVisible = false;
    searchString = "";
  };

  const toggleDropdown = () => {
    isDropdownVisible = !isDropdownVisible;
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="Select"
  bind:this={ref}
  on:mouseup={handleMouseUp}
>
  {#if inputControl}
    <TextInput
      {variant}
      value={value?.text || ""}
      onFocus={handleTextInputFocus}
      onBlur={handleTextInputBlur}
      {placeholder}
      readonly={true}
      {label}
      bind:focus={focusTextInput}
    ></TextInput>
  {:else}
    <Button
      props={{
        theme: "secondary",
        onClick: toggleDropdown
      }}
    >
      <i
        class="ri-arrow-down-s-line"
        slot="suffix"
      />
      <span><slot /></span>
      {#if !value}
        <span style="color: gray">Select value</span>
      {:else}
        {value.text}
      {/if}
    </Button>
  {/if}

  {#if isDropdownVisible}
    <Dropdown
      hasSearch={searchInDropdown}
      bind:searchValue={searchString}
      fitToParent={fullWidthDropdown}
      {width}
      {maxHeight}
      selected={value}
      isVisible={isDropdownVisible}
      parentEl={ref}
      options={selectOptions}
      selectOption={(option) => handleOptionClick(option)}
      hideDropdown={() => hideDropdown()}
    />
  {/if}
</div>

<style lang="scss">
  .Select {
    margin: 1rem 0;
    display: inline-block;
    width: 100%;
  }
</style>
