<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { SelectOption } from './Dropdown.js';
  import { TextInput, Menu } from '$lib';
  import type { KEvent } from '$lib';

  export let parentEl: HTMLElement | null = null;
  export let options: SelectOption[] = [];
  export let handleOptionClick: (e: MouseEvent, option: SelectOption) => void = () => null;
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
  let innerWidth = 0;
  let innerHeight = 0;
  let scrollY = 0;
  let x: number;
  let y: number;
  let height: number;
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

  const calculatePosition = (parentEl: HTMLElement | null) => {
    const boundingClientRect = parentEl?.getBoundingClientRect();
    x = boundingClientRect?.x || 0;
    y = boundingClientRect?.y || 0;
    height = boundingClientRect?.height || 0;
    y = y + height + dropdownGap + scrollY;
  };

  // HOOKS
  onMount(() => {
    calculatePosition(parentEl);
    if (width === 0) {
      width = (parentEl?.getBoundingClientRect().width || 0) - 2;
    }
    document.addEventListener('keydown', keyDownHandler);
    textSearchFocus && textSearchFocus();
  });

  onDestroy(() => {
    document.removeEventListener('keydown', keyDownHandler);
  });

  $: {
    if (innerWidth && innerHeight) {
      calculatePosition(parentEl);
    }
  }

  $: scrollerElement?.scrollTo(0, current * (currentDropdownOptions[current]?.clientHeight || 32));
</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY />

<Menu
  menuGap={dropdownGap}
  {isVisible}
  hideMenu={hideDropdown}
  parentElement={parentEl}
  {maxHeight}
>
  <div class="Dropdown">
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
  .Dropdown {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: space-between;

    ul {
      margin: 0;
      padding: 2px;
      overflow-y: scroll;
      background-color: var(--bg-control-100);
    }

    .Dropdown-option {
      padding: 0.25rem 0.5rem;
      background-color: var(--bg-control-100);
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;

      &:hover {
        background-color: var(--bg-control-300);
      }

      &.Dropdown-option-current {
        background-color: var(--bg-primary-100);
      }
    }

    .Dropdown-text {
      flex-grow: 2;
    }

    .Dropdown-option-icon {
      width: 20px;
      height: 20px;
    }
  }
</style>
