<script lang="ts">
  import type { ICatButtonProps } from "./Button.js";
  import { mergeProps } from "./Button.js";
  import { defaultProps } from "./Button.defaults.js";
  import { DynamicButton } from "@kamrade/svelte-dynamic-button";
  export let props: ICatButtonProps = {};

  export let buttonFocus: () => unknown = () => {};

  let innerProps: ICatButtonProps;
  $: innerProps = mergeProps(defaultProps, props);
</script>

<DynamicButton
  bind:focus={buttonFocus}
  props={{ ...innerProps }}
  {...$$restProps}
>
  <slot
    name="prefix"
    slot="prefix"
  />
  <slot
    name="suffix"
    slot="suffix"
  />
  <slot />
</DynamicButton>

<style lang="scss">
  @import "./Button.scss";
</style>
