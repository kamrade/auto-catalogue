<script lang="ts">
  import { TextInput } from '$lib';

  let textInputValue = '';
  let textInputKeydownHandler = (e: KeyboardEvent) => {
    let val = (e.target as HTMLInputElement).value;
    textInputValue = val;
  };
</script>

<h1>Text Inputs</h1>

<div class="mb-6">
  <TextInput
    disabled
    value={textInputValue}
    onKeydown={textInputKeydownHandler}
    placeholder="Disabled TextInput"
    label="Copy1"
  />
</div>

<div class="mb-6">
  <TextInput
    readonly
    value={textInputValue}
    onKeydown={textInputKeydownHandler}
    placeholder="Readonly TextInput"
    label="Copy2"
  />
</div>

<div class="mb-6">
  <TextInput
    value={textInputValue}
    onKeydown={textInputKeydownHandler}
    placeholder="Enter text here"
  >
    <svelte:fragment slot="prefix"><i class="ri-send-plane-2-line"></i></svelte:fragment>
  </TextInput>
</div>
