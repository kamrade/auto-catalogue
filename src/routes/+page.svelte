<script lang="ts">
	import { Button, Checkbox } from '$lib';

	let isLoading = false;
	const toggleIsLoading = () => (isLoading = !isLoading);
</script>

<h1>Welcome to SvelteKit</h1>

<Button props={{ theme: 'primary', variant: 'contained', loading: isLoading }}>
	<i class="ri-arrow-left-up-line" slot="prefix" />
	Primary Contained Button with Prefix Icon
</Button>

<Button props={{ theme: 'primary', variant: 'outlined', onClick: toggleIsLoading }}>
	Primary Outlined Button
</Button>

<div style="padding: 12px 0">
	<Checkbox>Test</Checkbox>
</div>

<style lang="scss">
	@import '../styles/variables.scss';
</style>
