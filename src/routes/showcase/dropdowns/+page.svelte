<script lang="ts">
  import { Button, Dropdown, Select, Hr } from '$lib';
  import { options, optionsLg } from '$lib/data/dropdown-data';
  import type { SelectOption } from '$lib';

  let selectValue: SelectOption = optionsLg[0];
  let onSelectChange = (option: SelectOption) => {
    selectValue = option;
  };

  let refs: HTMLDivElement[] = [];
  let selected: SelectOption[] = [];
  let value = '';
  let dropdownVisible: boolean[] = [];

  const handleOptionClick = (option: SelectOption, index: number) => {
    selected[index] = option;
    value = option.text + ' | ' + option.value;
    dropdownVisible[index] = false;
  };
  const hideDropdown = (index: number) => (dropdownVisible[index] = false);
</script>

<h1>Dropdowns</h1>

<div class="mb-6">
  <div style="margin-bottom: 4px;">Select Value: {selectValue?.text} | {selectValue?.value}</div>
  <Select
    value={selectValue}
    onChange={onSelectChange}
    options={optionsLg}
    width={300}
    maxHeight={200}>Test</Select
  >
</div>

<Hr />

<div class="selected-value">Value: {value}</div>

<div
  class="button-with-dropdown"
  style={`margin: 1rem 0;display: inline-block;`}
  bind:this={refs[0]}
>
  <Button props={{ theme: 'primary', onClick: () => (dropdownVisible[0] = !dropdownVisible[0]) }}>
    <i class="ri-arrow-down-s-line" slot="suffix" />
    Button with Dropdown</Button
  >
  <div>
    {#if dropdownVisible[0]}
      <Dropdown
        isVisible={dropdownVisible[0]}
        selected={selected[0]}
        parentEl={refs[0]}
        {options}
        selectOption={(option) => handleOptionClick(option, 0)}
        hideDropdown={() => hideDropdown(0)}
      />
    {/if}
  </div>
</div>

<div
  class="button-with-dropdown"
  style={`margin: 1rem 0;display: inline-block;`}
  bind:this={refs[1]}
>
  <Button props={{ theme: 'primary', onClick: () => (dropdownVisible[1] = !dropdownVisible[1]) }}>
    <i class="ri-arrow-down-s-line" slot="suffix" />
    Another Button with Dropdown</Button
  >
  <div>
    {#if dropdownVisible[1]}
      <Dropdown
        isVisible={dropdownVisible[1]}
        selected={selected[1]}
        parentEl={refs[1]}
        options={optionsLg}
        selectOption={(option) => handleOptionClick(option, 1)}
        hideDropdown={() => hideDropdown(1)}
        width={200}
        maxHeight={200}
      />
    {/if}
  </div>
</div>
