<script lang="ts">
  import { TextInput, Dropdown } from "$lib";
  import type { SelectOption, KEvent } from "$lib";
  import type { KeyboardEventHandler } from "svelte/elements";

  export let label = "";
  export let textValue = "";
  export let selected: SelectOption | null;
  export let onKeydown: KeyboardEventHandler<HTMLInputElement> = () => {};
  export let onKeyup: KeyboardEventHandler<HTMLInputElement> = () => {};
  export let options: SelectOption[];
  export let showValue = false;
  export let selectOption: (option: SelectOption) => unknown = (_option: SelectOption) => null;
  export let placeholder = "";
  export let maxHeight = 240;
  export let readonly = false;
  export let width = 0;

  let ref: HTMLDivElement;
  let dropdownVisible = false;

  const keyUpHandler: KeyboardEventHandler<HTMLInputElement> = (e: KEvent) => {
    if (e.code === "ArrowDown" && !dropdownVisible) {
      showDropdown();
    }
    let val = (e.target as HTMLInputElement).value;
    textValue = val;
    onKeyup && onKeyup(e);
  };

  const dropdownClickHandler = () => {
    if (!dropdownVisible) {
      showDropdown();
    }
  };

  const keyDownHandler: KeyboardEventHandler<HTMLInputElement> = (e: KEvent) => {
    if (e.code === "Tab") {
      hideDropdown();
    }
    if (e.code === "Escape") {
      toggleDropdown();
    }

    onKeydown && onKeydown(e);
  };

  const hideDropdown = () => (dropdownVisible = false);
  const showDropdown = () => (dropdownVisible = true);
  const toggleDropdown = () => (dropdownVisible = !dropdownVisible);
</script>

<div
  class="Autocomplete"
  bind:this={ref}
  role="button"
  tabindex="-1"
  on:mouseup={dropdownClickHandler}
>
  <TextInput
    {label}
    {placeholder}
    value={textValue}
    onKeydown={keyDownHandler}
    onKeyup={keyUpHandler}
    onFocus={(e) => (dropdownVisible = true)}
    onBlur={(e) => ({})}
    {readonly}
  >
    <slot
      name="prefix"
      slot="prefix"
    />
    <slot
      name="suffix"
      slot="suffix"
    />
  </TextInput>
  <div>
    {#if dropdownVisible && options.length !== 0}
      <Dropdown
        isVisible={dropdownVisible && options?.length !== 0}
        {showValue}
        {selected}
        parentEl={ref}
        {options}
        {hideDropdown}
        {maxHeight}
        {selectOption}
        {width}
      />
    {/if}
  </div>
</div>
