<script lang="ts">
  import { Button, Checkbox, Hr } from '$lib';
  let isLoading = false;
  const toggleIsLoading = () => (isLoading = !isLoading);
</script>

<h1>Links</h1>
<div class="py-6">
  <Checkbox name="disable" value={isLoading} onClick={toggleIsLoading}>Disable</Checkbox>
</div>

<Button props={{ theme: 'primary', variant: 'contained', loading: isLoading }}>
  <i class="ri-arrow-left-up-line" slot="prefix" />
  Primary Contained Button with Prefix Icon
</Button>

<Button props={{ theme: 'primary', variant: 'outlined' }}>Primary Outlined Button</Button>

<Hr spacing={6} />
