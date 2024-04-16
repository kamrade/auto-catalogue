<div class="ModalGallery">
  <slot />
</div>

<style lang="scss">
  .ModalGallery {
    padding: 1rem;
    background-color: white;
    padding: 2rem;
    position: relative;
    margin: 2.5rem auto 0;
    z-index: var(--zindex-modal);
    box-shadow: 0 0 200px rgba(0, 0, 0, 0.1);
    height: calc(100% - 2.5rem);
  }
</style>
