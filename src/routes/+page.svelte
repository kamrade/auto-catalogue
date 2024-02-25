<script lang="ts">
	import { Button, Checkbox } from '$lib';

	let isLoading = false;
	const toggleIsLoading = () => (isLoading = !isLoading);
</script>

<h1>Welcome to SvelteKit</h1>

<div style="padding: 12px 0;">
	<Checkbox>Disable</Checkbox>
</div>

<Button props={{ theme: 'primary', variant: 'contained', loading: isLoading }}>
	<i class="ri-arrow-left-up-line" slot="prefix" />
	Primary Contained Button with Prefix Icon
</Button>

<Button props={{ theme: 'primary', variant: 'outlined', onClick: toggleIsLoading }}>
	Primary Outlined Button
</Button>

<div style="padding: 12px 0; max-width: 300px">
	<Checkbox>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum tincidunt pulvinar.
		Donec finibus semper sapien a tempus. Sed varius, lorem vel ultrices fringilla, nibh nisi
		elementum mauris, id mollis purus lorem et nisl. Etiam varius orci et sagittis tincidunt.
		Quisque blandit ipsum quis blandit volutpat. Pellentesque feugiat iaculis felis. Proin vitae
		libero non orci mattis efficitur. Suspendisse rutrum aliquet vulputate. Aliquam viverra a nibh
		et ultricies.
	</Checkbox>
</div>

<div style="padding: 12px 0">
	<Checkbox><svelte:fragment slot="prefix">Prefix</svelte:fragment></Checkbox>
</div>

<style lang="scss">
	@import '../styles/variables.scss';
</style>
