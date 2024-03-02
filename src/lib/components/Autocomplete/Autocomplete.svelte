<script lang="ts">
  import { TextInput, Portal, Dropdown } from '$lib';
  import type { SelectOption, KEvent } from '$lib';
  import type { ChangeEventHandler, KeyboardEventHandler } from 'svelte/elements';

  export let label = '';
  export let textValue = '';
  export let selected: SelectOption | undefined;
  export let onKeydown: KeyboardEventHandler<HTMLInputElement> = () => {};
  export let onKeyup: KeyboardEventHandler<HTMLInputElement> = () => {};
  export let options: SelectOption[];
  export let showValue = false;
  export let optionClick: (e: MouseEvent, options: SelectOption) => unknown;
  export let placeholder = '';
  export let maxHeight = 240;

  let ref: HTMLDivElement;
  let dropdownVisible = false;

  let keyUpHandler: KeyboardEventHandler<HTMLInputElement> = (e: KEvent) => {
    let val = (e.target as HTMLInputElement).value;
    textValue = val;
    onKeyup && onKeyup(e);
  };

  let keyDownHandler: KeyboardEventHandler<HTMLInputElement> = (e: KEvent) => {
    if (e.code === 'Tab') {
      hideDropdown();
    }
    if (e.code === 'Escape') {
      toggleDropdown();
    }
    onKeydown && onKeydown(e);
  };

  let handleOptionClick = (e: MouseEvent, option: SelectOption) => {
    optionClick && optionClick(e, option);
    hideDropdown();
  };

  let hideDropdown = () => (dropdownVisible = false);
  let showDropdown = () => (dropdownVisible = true);
  let toggleDropdown = () => (dropdownVisible = !dropdownVisible);
</script>

<div class="Autocomplete" bind:this={ref}>
  <TextInput
    {label}
    {placeholder}
    value={textValue}
    onKeydown={keyDownHandler}
    onKeyup={keyUpHandler}
    onFocus={(e) => (dropdownVisible = true)}
    onBlur={(e) => ({})}
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
        />
      </Portal>
    {/if}
  </div>
</div>
