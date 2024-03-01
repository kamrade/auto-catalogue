<script lang="ts">
  import { Hr, TextInput } from '$lib';

  let textInputValue = '';
  let onChangeTextValue = (val: string) => (textInputValue = val);
</script>

<h1>Text Inputs</h1>

<div class="mb-6">
  <TextInput
    label="This is label"
    value={textInputValue}
    onKeyup={onChangeTextValue}
    placeholder="Placeholder"
  />
</div>
<div class="mt-6 mb-3">
  <span class="text-muted">Text Input Value: </span>{textInputValue}
</div>

<div class="mb-6">
  <TextInput
    disabled
    value={textInputValue}
    onKeyup={onChangeTextValue}
    placeholder="Placeholder"
  />
</div>

<div class="mb-6">
  <TextInput
    readonly
    value={textInputValue}
    onKeyup={onChangeTextValue}
    placeholder="Placeholder"
  />
</div>
