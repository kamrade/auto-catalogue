<script lang="ts">
  import { TextInput, Portal, Dropdown } from '$lib';
  import type { SelectOption, KEvent } from '$lib';
  import type { KeyboardEventHandler } from 'svelte/elements';

  export let label = '';
  export let textValue = '';
  export let selected: SelectOption | undefined;
  export let onKeydown: KeyboardEventHandler<HTMLInputElement> = () => {};
  export let onKeyup: KeyboardEventHandler<HTMLInputElement> = () => {};
  export let options: SelectOption[];
  export let showValue = false;
  export let optionClick: (e: MouseEvent, option: SelectOption) => unknown;
  export let selectOption: (option: SelectOption) => unknown = (_option: SelectOption) => null;
  export let placeholder = '';
  export let maxHeight = 240;
  export let readonly = false;

  let ref: HTMLDivElement;
  let dropdownVisible = false;

  const keyUpHandler: KeyboardEventHandler<HTMLInputElement> = (e: KEvent) => {
    if (e.code === 'ArrowDown' && !dropdownVisible) {
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
    if (e.code === 'Tab') {
      hideDropdown();
    }
    if (e.code === 'Escape') {
      toggleDropdown();
    }

    onKeydown && onKeydown(e);
  };

  const handleOptionClick = (e: MouseEvent, option: SelectOption) => {
    optionClick && optionClick(e, option);
    hideDropdown();
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
    <slot name="prefix" slot="prefix" />
    <slot name="suffix" slot="suffix" />
  </TextInput>
  <div>
    {#if dropdownVisible && options.length !== 0}
      <Portal>
        <Dropdown
          {showValue}
          {selected}
          parentEl={ref}
          {options}
          handleOptionClick={(e, option) => handleOptionClick(e, option)}
          hideDropdown={() => hideDropdown()}
          {maxHeight}
          {selectOption}
        />
      </Portal>
    {/if}
  </div>
</div>
