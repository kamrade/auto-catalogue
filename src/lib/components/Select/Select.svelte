<script lang="ts">
  import { Button, Portal, Dropdown } from '$lib';
  import type { SelectOption } from '$lib';

  export let options: SelectOption[] = [];
  export let width = 0;
  export let maxHeight = 0;
  
  
  let ref: HTMLDivElement;
  let selected: SelectOption;
  
  let dropdownVisible: boolean;

  const handleOptionClick = (e: MouseEvent, option: SelectOption, index: number) => {
    selected = option;
    dropdownVisible = false;
  };
  const hideDropdown = (index: number) => (dropdownVisible = false);
</script>

<div
  class="Select"
  style={`margin: 1rem 0;display: inline-block;`}
  bind:this={ref}
>

  <Button props={{ theme: 'primary', onClick: () => (dropdownVisible = !dropdownVisible) }}>
    <i class="ri-arrow-down-s-line" slot="suffix" />
    <slot />
  </Button>

  {#if dropdownVisible}
    <Portal>
      <Dropdown {width} {maxHeight} selected={selected}
        parentEl={ref} {options}
        handleOptionClick={(e, option) => handleOptionClick(e, option, 0)}
        hideDropdown={() => hideDropdown(0)}
      />
    </Portal>
  {/if}

</div>
