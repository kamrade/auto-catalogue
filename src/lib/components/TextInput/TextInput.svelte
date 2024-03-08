<script lang="ts">
  import type { ChangeEventHandler, FocusEventHandler } from "svelte/elements";
  import type { KeyboardEventHandler } from "svelte/elements";
  import { type KEvent } from "$lib";
  import type { TextInputType, TextInputVariant, TextInputSize } from "./TextInput";

  export let variant: TextInputVariant = "underlined";
  export let size: TextInputSize = "md";
  export let value = "";
  export let onKeydown: KeyboardEventHandler<HTMLInputElement> = () => {};
  export let onKeyup: KeyboardEventHandler<HTMLInputElement> = () => {};
  export let onFocus = (e: FocusEvent) => {};
  export let onBlur: FocusEventHandler<HTMLInputElement> = (e: FocusEvent) => {};
  export let onChange: ChangeEventHandler<HTMLInputElement> = (e: Event) => {};

  export let placeholder: string = "";
  export let type: TextInputType = "text";
  export let disabled = false;
  export let readonly = false;
  export let label = "";
  export let name: string | undefined = undefined;
  export let id: string | undefined = undefined;

  let inputEl: HTMLInputElement;
  export const focus = () => {
    setTimeout(() => inputEl?.focus());
  };

  let keydownHandler: KeyboardEventHandler<HTMLInputElement> = (e: KEvent) => onKeydown(e);
  let keyupHandler: KeyboardEventHandler<HTMLInputElement> = (e: KEvent) => onKeyup(e);

  const getClassNames = () => {
    let textInputClassName = "TextInput ";
    textInputClassName += disabled ? "TextInput-disabled " : "";
    textInputClassName += readonly ? "TextInput-readonly " : "";
    textInputClassName += `TextInput-variant-${variant} `;
    textInputClassName += `TextInput-size-${size} `;
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
    bind:this={inputEl}
  />
  {#if $$slots.suffix}
    <span class="TextInput-suffix"><slot name="suffix" /></span>
  {/if}
</label>

<style lang="scss">
  @import "./TextInput.scss";
</style>
