<script lang="ts">
  import { Checkbox, Hr, TextInput } from '$lib';

  let value = false;
  let setValue = (v: boolean) => {
    value = v;
  };
</script>

<h1>Text Inputs</h1>
<Hr />
<Checkbox name="chkbox" onClick={setValue} {value} />
<Hr />

<div class="my-6">
  <TextInput placeholder='Placeholder' />
</div>
