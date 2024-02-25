<script lang="ts">
	export let value: boolean = false;
	export let onClick: (v: boolean) => void = (v: boolean) => (value = v);
</script>

<label class="Checkbox">
	{#if $$slots.prefix}
		<span class="CheckboxLabel"><slot name="prefix" /></span>
	{/if}
	<span class={`CheckboxIndicator CheckboxIndicator--${value ? 'on' : 'off'}`}></span>
	<input class="Checkbox--el" checked={value} type="checkbox" on:click={() => onClick(!value)} />
	{#if $$slots.default}
		<span class="CheckboxLabel"><slot /></span>
	{/if}
</label>

<style lang="scss">
	.Checkbox {
		position: relative;
		display: flex;
		gap: 0.5em;
		cursor: pointer;

		&:focus-within {
			.CheckboxIndicator {
				box-shadow: 0 0 0 3px var(--focus-color);
			}
		}

		&:hover {
			.CheckboxIndicator {
				transform: scale(1.1);
			}
		}

		.CheckboxIndicator {
			display: block;
			position: relative;
			width: 0.625em;
			height: 0.625em;
			min-width: 0.625em;
			min-height: 0.625em;
			margin: 0.375em 0;
			border: 1px solid var(--line-control-100);
			transform-origin: 50% 50%;
			transition: all var(--animations-speed) ease-in-out;

			&::after {
				content: '';
				position: absolute;
				top: -1px;
				right: -1px;
				bottom: -1px;
				left: -1px;
				transform-origin: 50% 50%;
				transform: scale(0);
				opacity: 0;
				background: var(--text-color-base);
				transition: all var(--animations-speed) ease-in-out;
			}

			&.CheckboxIndicator--on {
				&::after {
					transform: scale(1);
					opacity: 1;
				}
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
