<script lang="ts">
  import { TextInput } from "$lib";

  let textInputValue = "";
  let handleOnKeyUp = (e: KeyboardEvent) => {
    let val = (e.target as HTMLInputElement).value;
    textInputValue = val;
  };
</script>

<h1>Text Inputs</h1>

<h2>Disabled</h2>

<div class="mb-6">
  <TextInput
    disabled
    value={textInputValue}
    onKeyup={handleOnKeyUp}
    placeholder="Disabled TextInput"
    label="Copy1"
  />
</div>

<h2>Readonly</h2>

<div class="mb-6">
  <TextInput
    readonly
    value={textInputValue}
    onKeyup={handleOnKeyUp}
    placeholder="Readonly TextInput"
    label="Copy2"
  />
</div>

<h2>Underlined</h2>

<div class="mb-6">
  <TextInput
    value={textInputValue}
    onKeyup={handleOnKeyUp}
    placeholder="Enter text here"
  >
    <svelte:fragment slot="prefix"><i class="ri-send-plane-2-line"></i></svelte:fragment>
  </TextInput>
</div>

<div class="mb-6">
  <TextInput
    value={textInputValue}
    label="Some label"
    onKeyup={handleOnKeyUp}
    placeholder="Enter text here"
  >
    <svelte:fragment slot="prefix"><i class="ri-send-plane-2-line"></i></svelte:fragment>
  </TextInput>
</div>

<h2>Contained</h2>

<div class="mb-6">
  <TextInput
    value={textInputValue}
    onKeyup={handleOnKeyUp}
    placeholder="Enter text here"
    variant="contained"
  >
    <svelte:fragment slot="prefix"><i class="ri-search-line"></i></svelte:fragment>
    <svelte:fragment slot="suffix"><i class="ri-close-circle-line"></i></svelte:fragment>
  </TextInput>
</div>

<div class="mb-6">
  <TextInput
    value={textInputValue}
    onKeyup={handleOnKeyUp}
    placeholder="Find"
    variant="contained"
    size="sm"
  >
    <svelte:fragment slot="prefix"><i class="ri-search-line"></i></svelte:fragment>
  </TextInput>
</div>
