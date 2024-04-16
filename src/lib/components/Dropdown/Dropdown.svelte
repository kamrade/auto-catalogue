<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import { TextInput, Menu } from "$lib";
  import type { KEvent, SelectOption } from "$lib";

  export let parentEl: HTMLElement | null = null;
  export let options: SelectOption[] = [];
  export let onOptionClick: (e: MouseEvent, option: SelectOption) => void = () => null;
  export let selectOption: (option: SelectOption) => unknown = (_option: SelectOption) => null;
  export let hideDropdown: () => void;
  export let searchInputBlur: () => void = () => {};
  export let width = 0;
  export let maxHeight = 200;
  export let selected: SelectOption | null = null;
  export let showValue = false;
  export let hasSearch = false;
  export let fitToParent = false;
  export let isVisible = false;
  export let dropdownGap = 4;
  export let searchValue = "";
  export let inputEl: HTMLInputElement | null = null;

  let current = 0;
  let scrollerElement: HTMLElement | null = null;
  let currentDropdownOptions: HTMLElement[] = [];
  let searchString = "";
  let timeout: number;

  // REACTIVITY
  $: scrollerElement?.scrollTo(0, current * (currentDropdownOptions[current]?.clientHeight || 32));

  $: {
    if (current > options.length) {
      current = 0;
    }
  }

  $: {
    if (searchString !== "") {
      let found = options.find((option) => option.text.toUpperCase().includes(searchString.toUpperCase()));
      for (let i = 0; i < options.length; i++) {
        if (options[i].value === found?.value) {
          current = i;
          break;
        }
      }
    }
  }

  // HOOKS
  onMount(() => {
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === selected?.value) {
        current = i;
        break;
      }
    }
    if (browser) {
      if (!width && fitToParent) {
        width = parentEl?.getBoundingClientRect().width || 0;
      }
      document.addEventListener("keydown", keyDownHandler);
      textSearchFocus();
    }
  });

  const textSearchFocus = () => {
    inputEl && inputEl.focus();
  };

  onDestroy(() => {
    browser && document.removeEventListener("keydown", keyDownHandler);
  });

  // HANDLERS
  const searchInputKeyupHandler = (e: KEvent) => {
    searchValue = (e.target as HTMLInputElement).value;
  };

  const keyDownHandler = (e: KeyboardEvent) => {
    if (!hasSearch) {
      let val = e.key;
      const pattern = /^[a-z0-9!"#$%&'()*+,.\/:;<=>?@\[\] ^_`{|}~-]*$/g;
      if (pattern.test(val)) {
        searchString += val;
      }
      clearTimeout(timeout);
      timeout = setTimeout(() => (searchString = ""), 1000);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (current === options.length - 1) {
        current = 0;
      } else {
        current++;
      }
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (current === 0) {
        current = options.length - 1;
      } else {
        current--;
      }
    }
    if (e.key === "Enter") {
      e.stopPropagation();
      e.preventDefault();
      selectOption(options[current]);
      hideDropdown();
    }
  };

  const handleOptionClick = (e: MouseEvent, option: SelectOption) => {
    selectOption(option);
    onOptionClick && onOptionClick(e, option);
  };
</script>

<Menu menuGap={dropdownGap} {isVisible} hideMenu={hideDropdown} parentElement={parentEl} {maxHeight} {width}>
  <div class="Dropdown" style={`max-height: ${maxHeight}px`}>
    {#if hasSearch}
      <div style="padding: 2px;">
        <TextInput
          value={searchValue}
          onKeyup={searchInputKeyupHandler}
          placeholder="Find"
          variant="contained"
          size="sm"
          bind:inputEl
          onBlur={searchInputBlur}
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
            class={`Dropdown-option ${current === i ? "Dropdown-option-current" : ""}`}
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
  @import "./Dropdown.scss";
</style>
