<!-- 

  White panel for Modal Window

-->

<div class="ModalDialog">
  <slot />
</div>

<style lang="scss">
  .ModalDialog {
    padding: 1rem;
    background-color: white;
    padding: 2rem;
    width: 800px;
    max-width: 100%;
    position: relative;
    margin: 4rem auto;
    z-index: var(--zindex-modal);
    box-shadow: 0 0 200px rgba(0, 0, 0, 0.1);
  }
</style>
