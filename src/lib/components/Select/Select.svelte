<script lang="ts">
  import { Button, Portal, Dropdown } from '$lib';
  import type { SelectOption } from '$lib';

  export let options: SelectOption[] = [];
  export let width = 0;
  export let maxHeight = 0;
  export let value: SelectOption;
  export let onChange: (option: SelectOption) => void;

  let ref: HTMLDivElement;

  let dropdownVisible: boolean;

  const handleOptionClick = (option: SelectOption) => {
    onChange && onChange(option);
    dropdownVisible = false;
  };
  const hideDropdown = () => (dropdownVisible = false);
</script>

<div class="Select" style={`margin: 1rem 0;display: inline-block;`} bind:this={ref}>
  <Button
    props={{ theme: 'secondary', onClick: () => (dropdownVisible = !dropdownVisible) }}
    on:focus={() => console.log('focus')}
  >
    <i class="ri-arrow-down-s-line" slot="suffix" />
    <span><slot /></span>
    {#if !value}
      <span style="color: gray">Select value</span>
    {:else}
      {value.text}
    {/if}
  </Button>

  {#if dropdownVisible}
    <Dropdown
      {width}
      {maxHeight}
      selected={value}
      isVisible={dropdownVisible}
      parentEl={ref}
      {options}
      selectOption={(option) => handleOptionClick(option)}
      hideDropdown={() => hideDropdown()}
    />
  {/if}
</div>
