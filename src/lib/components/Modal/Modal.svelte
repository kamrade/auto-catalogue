<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Portal } from "$lib";

  export let isVisible = false;
  export let hideModal = () => {};

  // Options
  export let showCloseButton = false;
  export let hideOnEscape = false;
  export let blackout = false;
  export let closeOnBackdrop = true;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && hideOnEscape) {
      hideModal();
    }
  };

  onMount(() => document.addEventListener("keydown", handleKeyDown));
  onDestroy(() => document.removeEventListener("keydown", handleKeyDown));

  const backdropClick = (e: MouseEvent) =>
    closeOnBackdrop && (e.target as HTMLElement).classList.contains("Modal-content") && hideModal();
</script>

{#if isVisible}
  <Portal>
    <div class="Modal">
      <div class={`Modal-backdrop ${blackout ? "Modal-backdrop-blackout" : ""}`} />

      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="Modal-content" on:mouseup={backdropClick}>
        {#if showCloseButton}
          <div class="Modal-close-button-wrapper" role="button" tabindex="-1" on:mouseup={() => hideModal()}>
            <div class="Modal-close-button">
              <i class="ri-close-line"></i>
            </div>
          </div>
        {/if}

        <slot />
      </div>
    </div>
  </Portal>
{/if}

<style lang="scss">
  .Modal-backdrop {
    position: fixed;
    display: flex;
    z-index: var(--zindex-modal-backdrop);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-backdrop);

    &.Modal-backdrop-blackout {
      background-color: var(--bg-backdrop-blackout);
    }
  }

  .Modal-close-button-wrapper {
    position: fixed;
    right: 1.5rem;
    top: 0.25rem;
  }

  .Modal-close-button {
    background-color: transparent;
    position: relative;
    z-index: var(--zindex-modal);
    font-size: 1rem;
    height: 2em;
    width: 2em;
    cursor: pointer;
    display: flex;
    color: white;

    > i {
      margin: auto;
    }
  }

  .Modal-content {
    position: fixed;
    z-index: var(--zindex-modal);
    top: 0;
    height: 100vh;
    width: 100%;
    overflow-y: scroll;
    background: transparent;
  }
</style>
