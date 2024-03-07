<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import type { SelectOption } from './Dropdown.js';
  import { TextInput, Menu } from '$lib';
  import type { KEvent } from '$lib';

  export let parentEl: HTMLElement | null = null;
  export let options: SelectOption[] = [];
  export let onOptionClick: (e: MouseEvent, option: SelectOption) => void = () => null;
  export let selectOption: (option: SelectOption) => unknown = (_option: SelectOption) => null;
  export let hideDropdown: () => void;
  export let width = 0;
  export let maxHeight = 200;
  export let selected: SelectOption | null = null;
  export let showValue = false;
  export let hasSearch = false;

  export let isVisible = false;

  let current = 0;
  let scrollerElement: HTMLElement | null = null;
  let currentDropdownOptions: HTMLElement[] = [];

  export let dropdownGap = 4;
  export let searchValue = '';
  let textSearchFocus: () => unknown;

  // HANDLERS
  const searchInputKeyupHandler = (e: KEvent) => {
    searchValue = (e.target as HTMLInputElement).value;
  };

  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      if (current === options.length - 1) {
        current = 0;
      } else {
        current++;
      }
    }
    if (e.key === 'ArrowUp') {
      if (current === 0) {
        current = options.length - 1;
      } else {
        current--;
      }
    }
    if (e.key === 'Enter') {
      selectOption(options[current]);
      hideDropdown();
    }
  };

  const handleOptionClick = (e: MouseEvent, option: SelectOption) => {
    selectOption(option);
    onOptionClick && onOptionClick(e, option);
  };

  // HOOKS
  onMount(() => {
    if (browser) {
      if (!width) {
        width = (parentEl?.getBoundingClientRect().width || 0) - 2;
      }
      document.addEventListener('keydown', keyDownHandler);
    }
    textSearchFocus && textSearchFocus();
  });

  onDestroy(() => {
    browser && document.removeEventListener('keydown', keyDownHandler);
  });

  $: scrollerElement?.scrollTo(0, current * (currentDropdownOptions[current]?.clientHeight || 32));
</script>

<Menu
  menuGap={dropdownGap}
  {isVisible}
  hideMenu={hideDropdown}
  parentElement={parentEl}
  {maxHeight}
  {width}
>
  <div class="Dropdown" style={`max-height: ${maxHeight}px`}>
    {#if hasSearch}
      <div style="padding: 2px;">
        <TextInput
          value={searchValue}
          onKeyup={searchInputKeyupHandler}
          placeholder="Find"
          variant="contained"
          size="sm"
          bind:focusSearch={textSearchFocus}
        >
          <svelte:fragment slot="prefix"><i class="ri-search-line"></i></svelte:fragment>
        </TextInput>
      </div>
    {/if}

    {#if options?.length}
      <ul class="Dropdown-options-wrapper" role="menu" bind:this={scrollerElement}>
        {#each options as option, i (i)}
          <li
            role="menuitem"
            class={`Dropdown-option ${current === i ? 'Dropdown-option-current' : ''}`}
            bind:this={currentDropdownOptions[i]}
            on:mouseup={(e) => handleOptionClick(e, option)}
          >
            {#if option?.icon}
              <i class={option.icon}></i>
            {/if}
            <span class="Dropdown-text">
              {option.text}
              {#if showValue}
                <span class="text-muted">{option.value}</span>
              {/if}
            </span>
            {#if selected?.value === option.value}
              <i class="ri-check-line" />
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
    <slot name="options" />
  </div>
</Menu>

<style lang="scss">
  @import './Dropdown.scss';
</style>