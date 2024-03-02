<script lang="ts">
  import { Autocomplete, formatTextBlocks } from '$lib';
  import type { SelectOption } from '$lib';
  import { autocompleteOptions } from './data';

  let autocompleteTextValue = '';
  let autocompleteValue: SelectOption | undefined;

  let autocompleteKeyupHandler = (e: KeyboardEvent) => {
    let val = (e.target as HTMLInputElement).value;
    autocompleteValue = autocompleteTextValue === val ? autocompleteValue : undefined;
    autocompleteTextValue = val;
  };

  let autocompleteOptionClick = (e: MouseEvent, option: SelectOption) => {
    autocompleteValue = option;
    autocompleteTextValue = option.text;
  };

  let clearField = () => {
    autocompleteValue = undefined;
    autocompleteTextValue = '';
  };

  let opts: SelectOption[] = [];

  $: opts = (() => {
    if (autocompleteValue) {
      return autocompleteOptions;
    } else {
      let options = autocompleteOptions.filter(
        (option: SelectOption) =>
          option?.text?.toUpperCase().includes(autocompleteTextValue.toUpperCase()) ||
          option?.value?.toUpperCase().includes(autocompleteTextValue.toUpperCase())
      );
      return options;
    }
  })();
</script>

<h1>Create Payment</h1>

<div class="mb-6">
  <Autocomplete
    label="Transfer To"
    textValue={autocompleteTextValue}
    selected={autocompleteValue}
    onKeyup={autocompleteKeyupHandler}
    options={opts}
    showValue={true}
    optionClick={autocompleteOptionClick}
    placeholder={'Please choose an account or enter IBAN'}
  >
    <svelte:fragment slot="prefix"><i class="ri-send-plane-2-line"></i></svelte:fragment>

    <svelte:fragment slot="suffix">
      <!-- Add button instead of just icon -->
      {#if autocompleteTextValue}
        <i
          class="ri-close-circle-fill"
          role="button"
          aria-pressed
          tabindex="0"
          on:mouseup={() => clearField()}
        />
      {/if}
    </svelte:fragment>
  </Autocomplete>
  {#if opts.length === 0}
    <div class="text-muted text-sm py-2">Add new account</div>
  {/if}
  {#if autocompleteValue?.value}
    <div class="text-muted text-sm py-2">{formatTextBlocks(autocompleteValue?.value, 4)}</div>
  {/if}
</div>
