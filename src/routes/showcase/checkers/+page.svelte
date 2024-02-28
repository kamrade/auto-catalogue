<script lang="ts">
  import { Checkbox, Hr } from '$lib';

  let value = false;
  const changeValue = (v: boolean) => (value = v);
</script>

<h1>Checkers</h1>

<div style="padding: 12px 0; max-width: 500px">
  <Checkbox disabled name="test_name_1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum tincidunt pulvinar.
    Donec finibus semper sapien a tempus. Sed varius, lorem vel ultrices fringilla, nibh nisi
    elementum mauris, id mollis purus lorem et nisl. Etiam varius orci et sagittis tincidunt.
    Quisque blandit ipsum quis blandit volutpat. Pellentesque feugiat iaculis felis. Proin vitae
    libero non orci mattis efficitur. Suspendisse rutrum aliquet vulputate. Aliquam viverra a nibh
    et ultricies.
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
