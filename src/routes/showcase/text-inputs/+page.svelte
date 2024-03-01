<script lang="ts">
  import { TextInput, Portal, Dropdown  } from '$lib';
  import type { SelectOption } from '$lib';

  let textInputValue = '';
  let onChangeTextValue = (val: string) => (textInputValue = val);
  let dropdownVisible = false;
  let selected: SelectOption;
  let ref: HTMLDivElement;
  let hideDropdown = () => dropdownVisible = false;
  let handleOptionClick = (e: MouseEvent, option: SelectOption) => {
    selected = option;
  }
  let options: SelectOption[] = [{
    text: 'One',
    value: '1'
  }, {
    text: 'Two',
    value: '2'
  }]
</script>

<h1>Text Inputs</h1>

<div class="mb-6" bind:this={ref}>
  <TextInput label="Transfer from" placeholder="Please choose an account"
    value={textInputValue} onKeyup={onChangeTextValue}
    onFocus={(e) => dropdownVisible = true}
    onBlur={(e) => hideDropdown()}
  >
    <svelte:fragment slot='prefix'><i class="ri-mail-add-fill" /></svelte:fragment>
    <svelte:fragment slot='suffix'><i class="ri-checkbox-circle-fill" /></svelte:fragment>
  </TextInput>
  <div>
    {#if dropdownVisible}
      <Portal>
        <Dropdown
          selected={selected}
          parentEl={ref}
          {options}
          handleOptionClick={(e, option) => handleOptionClick(e, option)}
          hideDropdown={() => hideDropdown()}
        />
      </Portal>
    {/if}
  </div>
</div>
<div class="mt-6 mb-3">
  <span class="text-muted">Text Input Value: </span>{textInputValue}
</div>

<div class="mb-6">
  <TextInput disabled value={textInputValue} onKeyup={onChangeTextValue} placeholder="Placeholder"/>
</div>

<div class="mb-6">
  <TextInput readonly value={textInputValue} onKeyup={onChangeTextValue} placeholder="Placeholder" />
</div>
