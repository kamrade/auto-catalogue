<script lang="ts">
  import { Portal } from "$lib";
  export let isVisible = false;
</script>

{#if isVisible}
  <Portal>
    <div class="Modal">Modal</div>
  </Portal>
{/if}

<style lang="scss">
  .Modal {
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
  }
</style>
