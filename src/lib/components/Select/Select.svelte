<script lang="ts">
  import { Dropdown, TextInput } from "$lib";
  import type { SelectOption, TextInputVariant } from "$lib";

  export let options: SelectOption[] = [];
  export let width = 0;
  export let maxHeight = 0;
  export let value: SelectOption | null;
  export let onChange: (option: SelectOption) => void;
  export let label = "";
  export let placeholder = "";
  export let fullWidthDropdown = false;
  export let variant: TextInputVariant = "underlined";

  let ref: HTMLDivElement;
  let isDropdownVisible = false;
  let isJustSelected = false;
  let isFocused = false;

  // LIFECYCLE

  // HANDLERS
  const handleMouseUp = () => {
    isJustSelected = false;
    if (!isDropdownVisible) {
      showDropdown();
    }
  };

  const handleTextInputFocus = () => {
    isFocused = true;
    showDropdown();
  };

  const handleTextInputBlur = () => {
    isFocused = false;
  };

  const handleOptionClick = (option: SelectOption) => {
    onChange && onChange(option);
    hideDropdown();
    isJustSelected = true;
    focusTextInputElement();
  };

  // HELPERS
  const showDropdown = () => {
    if (!isJustSelected) {
      isDropdownVisible = true;
    } else {
      isJustSelected = false;
    }
  };

  const hideDropdown = () => {
    isDropdownVisible = false;
  };


  export let inputEl: HTMLInputElement | null = null;

  const focusTextInputElement = () => {
    inputEl && inputEl.focus();
  };

  export const openDropdown = () => {
    showDropdown();
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="Select"
  bind:this={ref}
  on:mouseup={handleMouseUp}
>
  <TextInput
    {variant}
    value={value?.text || ""}
    onFocus={handleTextInputFocus}
    onBlur={handleTextInputBlur}
    {placeholder}
    readonly={true}
    {label}
    bind:inputEl
    isActive={isDropdownVisible}
  ></TextInput>

  {#if isDropdownVisible}
    <Dropdown
      fitToParent={fullWidthDropdown}
      {width}
      {maxHeight}
      selected={value}
      isVisible={isDropdownVisible}
      parentEl={ref}
      {options}
      selectOption={(option) => handleOptionClick(option)}
      hideDropdown={() => hideDropdown()}
    />
  {/if}
</div>

<style lang="scss">
  .Select {
    display: inline-block;
    width: 100%;
  }
</style>
