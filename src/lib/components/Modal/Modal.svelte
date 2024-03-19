<script lang="ts">
  import { Portal } from "$lib";

  export let isVisible = false;
  export let hideModal = () => {};

  const handleKeyDown = (e: KeyboardEvent) => {
    console.log(e);
  };
</script>

{#if isVisible}
  <Portal>
    <div class="Modal">
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <div
        class="Modal-backdrop"
        on:click={hideModal}
        on:keydown={handleKeyDown}
        role="dialog"
      />
      <div class="Modal-content">
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
    z-index: var(--zindex-modal-backdrop);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .Modal-content {
    position: fixed;
    z-index: var(--zindex-modal);
    top: 0;
    left: 0;
    width: 100%;
  }

  .Modal-window {
    width: 400px;
    padding: 1rem;
    background-color: white;
    margin: 0 auto;
  }
</style>
