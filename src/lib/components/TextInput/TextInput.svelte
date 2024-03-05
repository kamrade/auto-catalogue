<script lang="ts">
  import type { ChangeEventHandler, FocusEventHandler } from 'svelte/elements';
  import type { KeyboardEventHandler } from 'svelte/elements';
  import type { KEvent } from '$lib';

  type inputType = 'text' | 'password';

  export let value = '';
  export let onKeydown: KeyboardEventHandler<HTMLInputElement> = () => {};
  export let onKeyup: KeyboardEventHandler<HTMLInputElement> = () => {};
  export let onFocus = (e: FocusEvent) => {};
  export let onBlur: FocusEventHandler<HTMLInputElement> = (e: FocusEvent) => {};
  export let onChange: ChangeEventHandler<HTMLInputElement> = (e: Event) => {};

  export let placeholder: string = '';
  export let type: inputType = 'text';
  export let disabled = false;
  export let readonly = false;
  export let label = '';
  export let name: string | undefined = undefined;
  export let id: string | undefined = undefined;

  let keydownHandler: KeyboardEventHandler<HTMLInputElement> = (e: KEvent) => onKeydown(e);
  let keyupHandler: KeyboardEventHandler<HTMLInputElement> = (e: KEvent) => onKeyup(e);

  const getClassNames = () => {
    let textInputClassName = 'TextInput ';
    textInputClassName += disabled ? 'TextInput-disabled ' : '';
    textInputClassName += readonly ? 'TextInput-readonly ' : '';
    return textInputClassName;
  };
</script>

<label class={getClassNames()}>
  {#if $$slots.prefix}
    <span class="TextInput-prefix"><slot name="prefix" /></span>
  {/if}
  {#if label}
    <span class="TextInput-label">{label}</span>
  {/if}
  <input
    {disabled}
    {readonly}
    {placeholder}
    class="TextInput-el"
    {type}
    {value}
    on:keydown={keydownHandler}
    on:keyup={keyupHandler}
    on:focus={onFocus}
    on:blur={onBlur}
    on:change={onChange}
    {name}
    {id}
  />
  {#if $$slots.suffix}
    <span class="TextInput-suffix"><slot name="suffix" /></span>
  {/if}
</label>

<style lang="scss">
  .TextInput {
    display: flex;
    align-items: center;
    position: relative;
    line-height: 0;
    gap: 0.5rem;

    &:focus-within {
      &::after {
        background: #333;
        transform: scaleY(2);
      }
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 1px;
      left: 0;
      right: 0;
      background: #ccc;
      transition: all 0.3s ease-in-out;
      transform-origin: 100% 100%;
    }

    &.TextInput-disabled {
      opacity: 0.5;
      &::after {
        background: transparent;
        border-bottom: 1px dashed #ccc;
      }
    }

    .TextInput-label {
      display: block;
      white-space: nowrap;
      font-size: 1rem;
      line-height: 1.5;
      padding: 0.5rem 0;
      color: var(--text-color-secondary);
    }

    .TextInput-suffix,
    .TextInput-prefix {
      display: block;
      font-size: 1rem;
      line-height: 1;
      padding: 0.5rem 0;
    }

    .TextInput-el {
      border: none;
      position: relative;
      width: 100%;
      padding: 0.5rem 0;
      font-size: 1rem;
      line-height: 1.5;

      &:disabled {
        background-color: transparent;
      }

      &::placeholder {
        color: var(--text-color-muted);
      }

      &:focus {
        outline: none;
        border: none;
      }
    }
  }
</style>
