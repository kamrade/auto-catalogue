<script lang="ts">
	export let value: boolean = false;
	export let setValue: (v: boolean) => void = (v: boolean) => (value = v);
</script>

<label class="Checkbox">
	<span class={`CheckboxIndicator CheckboxIndicator--${value ? 'on' : 'off'}`}></span>
	<input class="Checkbox--el" checked={value} type="checkbox" on:click={() => setValue(!value)} />
	<span class="CheckboxLabel">
		<slot />
	</span>
</label>

<style lang="scss">
	.Checkbox {
		position: relative;
		display: flex;
		gap: 0.5em;

		.CheckboxIndicator {
			display: block;
			width: 0.625em;
			height: 0.625em;
			margin: 0.375em 0;
			border: 1px solid #ccc;

			&.CheckboxIndicator--on {
				background: #000;
				border-color: transparent;
			}
		}

		.CheckboxLabel {
			display: block;
		}

		.Checkbox--el {
			position: absolute;
			top: 0;
			left: 0;
			width: 0;
			height: 0;
			opacity: 0;
		}
	}
</style>
