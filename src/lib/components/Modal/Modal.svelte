<script lang="ts">
  import { Portal } from "$lib";

  export let isVisible = false;
  export let hideModal = () => {};
  export let showCloseButton = false;

  const handleKeyDown = (e: KeyboardEvent) => {
    console.log(e);
  };
</script>

{#if isVisible}
  <Portal>
    <div class="Modal">
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <div class="Modal-backdrop" on:click={hideModal} on:keydown={handleKeyDown} role="dialog" />
      <div class="Modal-content">
        {#if showCloseButton}
          <div class="Modal-close-button-wrapper">
            <div role="button" class="Modal-close-button" on:mouseup={() => hideModal()} tabindex="-1">Close</div>
          </div>
        {/if}
        <div class="Modal-window">
          <slot />
        </div>
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
    background-color: rgba(0, 0, 0, 0.4);
  }

  .Modal-close-button-wrapper {
    margin: 0.25rem auto;
    max-width: 800px;
    text-align: right;
  }

  .Modal-close-button {
    background-color: white;
    display: inline-block;
    padding: 0.125rem 1rem;
  }

  .Modal-content {
    position: fixed;
    z-index: var(--zindex-modal);
    top: 0;
    left: 0;
    width: 100%;
  }

  .Modal-window {
    margin: auto;
    max-width: 800px;
    padding: 1rem;
    background-color: white;
  }
</style>
