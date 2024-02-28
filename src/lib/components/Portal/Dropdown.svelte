<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { SelectOption } from './Dropdown.js';
  import { clickOutsideObject } from '$lib/utils/click-outside-handler';

  export let parentEl: HTMLElement | null = null;
  export let options: SelectOption[] = [];
  export let handleOptionClick: (e: MouseEvent, option: SelectOption) => void = () => null;
  export let hideDropdown: () => void;
  export let width = 0;
  export let maxHeight = 0;
  export let selected: SelectOption | null = null;

  let dropdownElement: HTMLElement | null = null;

  const dropdownGap = 4;
  let innerWidth = 0;
  let innerHeight = 0;
  let scrollY = 0;
  let x: number;
  let y: number;
  let height: number;

  onMount(() => {
    calculatePosition(parentEl);
    document.addEventListener('mousedown', handleClickOutside);
    if (width === 0) {
      width = (parentEl?.getBoundingClientRect().width || 0) - 2;
    }
  });

  onDestroy(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });

  $: {
    if (innerWidth && innerHeight) {
      calculatePosition(parentEl);
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    clickOutsideObject(event, dropdownElement, () => hideDropdown());
  };

  const calculatePosition = (parentEl: HTMLElement | null) => {
    const boundingClientRect = parentEl?.getBoundingClientRect();
    x = boundingClientRect?.x || 0;
    y = boundingClientRect?.y || 0;
    height = boundingClientRect?.height || 0;
    y = y + height + dropdownGap + scrollY;
  };
</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY />

<div
  class="Dropdown"
  style={`left: ${x}px; top: ${y}px; width: ${width}px; max-height: ${maxHeight ? maxHeight + 'px' : 'auto'}`}
  bind:this={dropdownElement}
>
  {#if options?.length}
    <ul class="Dropdown-options-wrapper" role="menu">
      {#each options as option}
        <li
          role="menuitem"
          class="Dropdown-option"
          on:mouseup={(e) => handleOptionClick(e, option)}
        >
          {#if option?.icon}
            <i class={option.icon}></i>
          {/if}
          <span class="Dropdown-text">
            {option.text}
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

<style lang="scss">
  .Dropdown {
    position: absolute;
    z-index: var(--zindex-dropdown);
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: space-between;
    border: 1px solid var(--line-control-100);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.09);
    max-height: auto;
    overflow-y: scroll;

    ul {
      margin: 0;
      padding: 2px;
      background-color: var(--bg-control-100);
    }

    .Dropdown-option {
      padding: 0.25rem 0.5rem;
      background-color: var(--bg-control-100);
      transition: background 0.3s ease-in-out;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;

      &:hover {
        background-color: var(--bg-control-300);
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
