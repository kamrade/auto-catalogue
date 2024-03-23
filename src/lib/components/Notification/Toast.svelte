<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { IToast } from "./Toast";
  export let toast: IToast;
  const dispatch = createEventDispatcher();
</script>

<div class={`Toast Toast-${toast.type || "info"} ${toast.dismissible && "Toast-dismissible"}`}>
  <span class="Toast-text">
    <slot />
  </span>
  {#if toast.dismissible}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <i class="ri-close-line" on:click={() => dispatch("dismiss")} role="button" tabindex="-1" />
  {/if}
</div>

<style lang="scss">
  .Toast {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.375rem 0.75rem 0.375rem 0.75rem;
    background-color: var(--bg-control-200);
    color: var(--text-color-base);
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);
    margin-right: 0.125rem;
    margin: 0.125rem;
    border-radius: var(--border-radius-control);

    &.Toast-dismissible {
      padding: 0.25rem 0.5rem 0.25rem 0.75rem;
    }
    &.Toast-info {
      background-color: var(--bg-inverted-100);
      color: var(--text-color-inv);
    }
    &.Toast-warning {
      background-color: var(--bg-danger-100);
      color: var(--text-color-inv);
    }
  }
</style>
