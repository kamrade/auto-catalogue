<script lang="ts">
  import { brands } from "./data";
  import { Autocomplete } from "$lib";
  import type { SelectOption } from "$lib";

  // TEXT INPUT
  let textInputValue = "";
  let textInputKeydownHandler = (e: KeyboardEvent) => {
    let val = (e.target as HTMLInputElement).value;
    textInputValue = val;
  };

  // AUTOCOMPLETE
  let autocompleteTextValue = "";
  let autocompleteValue: SelectOption | null;

  const autocompleteKeyupHandler = (e: KeyboardEvent) => {
    let val = (e.target as HTMLInputElement).value;
    autocompleteValue = autocompleteTextValue === val ? autocompleteValue : null;
    autocompleteTextValue = val;
  };

  const selectOption = (option: SelectOption) => {
    autocompleteValue = option;
    autocompleteTextValue = option.text;
  };

  const clearField = () => {
    autocompleteValue = null;
    autocompleteTextValue = "";
  };

  let opts: SelectOption[] = [];

  $: opts = (() => {
    if (autocompleteValue) {
      return brands;
    } else {
      let options = brands.filter(
        (option: SelectOption) =>
          option?.text?.toUpperCase().includes(autocompleteTextValue.toUpperCase()) ||
          option?.value?.toUpperCase().includes(autocompleteTextValue.toUpperCase())
      );
      return options;
    }
  })();
</script>

<h1>Filter</h1>

<div class="mb-6">
  <Autocomplete
    label="Choose brand"
    textValue={autocompleteTextValue}
    selected={autocompleteValue}
    onKeyup={autocompleteKeyupHandler}
    options={opts}
    {selectOption}
    placeholder={"Finnd your brand"}
  >
    <svelte:fragment slot="prefix"><i class="ri-send-plane-2-line"></i></svelte:fragment>

    <svelte:fragment slot="suffix">
      <!-- Add button instead of just icon -->
      {#if autocompleteTextValue}
        <i
          class="ri-close-circle-fill"
          role="button"
          aria-pressed
          tabindex="-1"
          on:mouseup={() => clearField()}
        />
      {/if}
    </svelte:fragment>
  </Autocomplete>
  {#if opts.length === 0}
    <div class="text-muted text-sm py-2">Add new account</div>
  {/if}
  {#if autocompleteValue?.value}
    <div class="text-muted text-sm py-2">{autocompleteValue?.value}</div>
  {/if}
</div>
