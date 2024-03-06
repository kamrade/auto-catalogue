<script lang="ts">
  import { Button, Portal, Dropdown, log } from '$lib';
  import { brands } from './data';
  import type { SelectOption } from '$lib';

  let ref: HTMLDivElement;
  let selected: SelectOption;
  let dropdownVisible: boolean = false;

  let searchString = '';
  let options: SelectOption[] = brands;

  $: options = brands.filter(
    (brand) =>
      brand.text.toUpperCase().includes(searchString.toUpperCase()) ||
      brand.value.toUpperCase().includes(searchString.toUpperCase())
  );

  const handleOptionClick = (e: MouseEvent, option: SelectOption) => {
    selected = option;
    dropdownVisible = false;
    setTimeout(() => focus());
  };

  const hideDropdown = () => {
    dropdownVisible = false;
    searchString = '';
  };

  const selectOption = (option: SelectOption) => {
    selected = option;
    setTimeout(() => focus());
  };

  let focus: () => unknown;

  const buttonClickHandler = (e: MouseEvent) => {
    if (!dropdownVisible) {
      dropdownVisible = true;
    }
  };
</script>

<h1>Dropdown with Search</h1>

<div class="mb-3" style={`margin: 1rem 0;display: inline-block;`} bind:this={ref}>
  <Button bind:buttonFocus={focus} props={{ theme: 'secondary', onClick: buttonClickHandler }}>
    <i class="ri-arrow-down-s-line" slot="suffix" />
    Value: {selected?.text || ''}</Button
  >
  <div>
    {#if dropdownVisible}
      <Portal>
        <Dropdown
          bind:searchValue={searchString}
          hasSearch={true}
          width={400}
          {selected}
          parentEl={ref}
          {options}
          handleOptionClick={(e, option) => handleOptionClick(e, option)}
          maxHeight={200}
          {hideDropdown}
          {selectOption}
        />
      </Portal>
    {/if}
  </div>
</div>
