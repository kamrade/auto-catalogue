<script lang="ts">
  import { Portal, Toast } from "$lib";
  import { toasts } from "./NotificationsStore";
</script>

{#if $toasts.length}
  <Portal>
    <div class="Notifications">
      <div class="container">
        <div class="Notifications-toasts-container">
          {#each $toasts as toast (toast.id)}
            <Toast on:dismiss={() => console.log("Dismiss", toast.text)} {toast}>
              {toast.text}
            </Toast>
          {/each}
        </div>
      </div>
    </div>
  </Portal>
{/if}

<style lang="scss">
  .Notifications {
    position: fixed;
    bottom: 2rem;
    left: 0;
    right: 0;
    width: 100%;
    z-index: var(--zindex-toast);
  }
  .Notifications-toasts-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
