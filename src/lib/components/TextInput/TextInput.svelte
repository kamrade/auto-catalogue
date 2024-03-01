<script lang="ts">
  type inputType = 'text' | 'password';

  export let value = '';
  export let onKeyup: (value: string) => void;

  export let placeholder: string = '';
  export let type: inputType = 'text';
  export let disabled = false;
  export let readonly = false;
  export let label = '';

  let KeyupHandler = (e: Event) => onKeyup((e.target as HTMLInputElement).value);
</script>

<label
  class={`TextInput ${disabled ? 'TextInput-disabled' : ''} ${readonly ? 'TextInput-readonly' : ''}`}
>
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
    on:keyup={KeyupHandler}
  />
</label>

<style lang="scss">
  .TextInput {
    display: flex;
    position: relative;
    line-height: 0;
    gap: 0.5rem;

    &:focus-within {
      &.TextInput-readonly {
        &::after {
          background: #ccc;
        }
      }
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

    &.TextInput-readonly {
      opacity: 0.5;
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
