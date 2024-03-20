<script lang="ts">
  import { Portal } from '$lib';
  import type { INotification } from './Notification';
  export let allNotifications: INotification[] = [{
    text: 'Test',
    type: 'default',
    visible: true
  }, {
    text: 'Test 2',
    type: 'default',
    visible: true
  }, {
    text: 'Test 3',
    type: 'default',
    visible: false
  }];
</script>

{#if allNotifications?.length > 0}
  <Portal>   
    <div class="Notifications">
      <div class="container">
        {#each allNotifications as notification, $i}
          {#if notification.visible}
            <div class="Notification">
              <span class="Notification-text">{notification.text}</span>
              <i class="ri-close-line" />
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </Portal>
{/if}

<style lang="scss">
  .Notifications {
    position: fixed;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;
    z-index: var(--zindex-toast);
  }

  .Notification {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: .25rem .5rem 0.25rem 0.75rem;
    background-color: var(--bg-inverted-100);
    color: var(--text-color-inv);
    box-shadow: 0 0 16px rgba(0,0,0,0.05);
    margin-right: 0.125rem;
    margin: 0.125rem;
    border-radius: var(--border-radius-control);
  }
</style>