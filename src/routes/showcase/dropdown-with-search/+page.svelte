<script lang="ts">
  import { Button, Portal, Dropdown, log } from '$lib';
  import { brands } from './data';
  import type { SelectOption } from '$lib';

  let ref: HTMLDivElement;
  let selected: SelectOption;
  let dropdownVisible: boolean = false;
  let optionSelected = false; // it means that options was selected from keyboard

  const handleOptionClick = (e: MouseEvent, option: SelectOption) => {
    selected = option;
    dropdownVisible = false;
  };
  
  const hideDropdown = () => dropdownVisible = false;

  const selectOption = (option: SelectOption) => {
    selected = option;
    optionSelected = true;
    
  }

  const buttonClickHandler = (e: MouseEvent) => {
    if (!dropdownVisible && !optionSelected) {
      dropdownVisible = true;
    }
    optionSelected = false;
  }
</script>

<h1>Dropdown with Search</h1>

<div
  class="mb-3"
  style={`margin: 1rem 0;display: inline-block;`}
  bind:this={ref}
>
  <Button props={{ theme: 'primary', onClick: buttonClickHandler }}>
    
    <i class="ri-arrow-down-s-line" slot="suffix" />
    Value: {selected?.text || ''}</Button
  >
  <div>
    {#if dropdownVisible}
      <Portal>
        <Dropdown
          width={400}
          selected={selected}
          parentEl={ref}
          options={brands}
          handleOptionClick={(e, option) => handleOptionClick(e, option)}
          maxHeight={200}
          {hideDropdown}
          {selectOption}
        />
      </Portal>
    {/if}
  </div>
</div>