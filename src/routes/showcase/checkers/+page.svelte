<script lang="ts">
  import { Checkbox, Hr, addToast } from '$lib';

  let value = false;
  const onClick = (e: MouseEvent, v: boolean) => {
    (value = v);
    addToast({ text: 'Value = ' + (v ? 'true' : 'false') });
  }
</script>

<h1>Checkers</h1>

<div>

  <Checkbox id="checkbox_with_event" name="checkbox_with_event" {value} onClick={onClick}>
    This is a single Checkbox
  </Checkbox>

</div>

<div style="padding: 12px 0; max-width: 500px">
  <Checkbox disabled name="test_name_1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum tincidunt pulvinar.
    Donec finibus semper sapien a tempus. Sed varius, lorem vel ultrices fringilla, nibh nisi
    elementum mauris, id mollis purus lorem et nisl.
  </Checkbox>
</div>

<Hr />

<div style="padding: 12px 0">
  <Checkbox name="test_name_2"><svelte:fragment slot="prefix">Prefix</svelte:fragment></Checkbox>
</div>

<Hr />

<div style="padding: 12px 0">
  <label for="single_checkbox_1">This is a single Checkbox:</label>
  <div><Checkbox id="single_checkbox_1" name="single_checkbox_1" /></div>
</div>

<Hr />

<div style="padding: 12px 0">
  <Checkbox id="single_checkbox_2" name="single_checkbox_2" />
</div>
