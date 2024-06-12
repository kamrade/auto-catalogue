<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import type { IGalleryPhoto } from "$lib";
  export let images: IGalleryPhoto[];
  export let thumbnailsPath: string;
  export let imagesPath: string;
  export let currentImage: number | null;

  let imagePath: string;

  const keyUpHandler = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextImage && nextImage();
    }

    if (e.key === 'ArrowLeft') {
      prevImage && prevImage();
    }
  }

  onMount(() => {
    document.addEventListener('keyup', keyUpHandler);
  });

  onDestroy(() => {
    document.removeEventListener('keyup', keyUpHandler);
  });

  $: {
    imagePath = `${imagesPath}/${images[currentImage || 0].photo_name}.jpg`;
  }

  const nextImage = () => {
    if (images && currentImage !== null) {
      currentImage = currentImage >= images.length - 1 ? 0 : currentImage + 1;
    }
  };
  const prevImage = () => {
    if (images && currentImage !== null) {
      currentImage = currentImage === 0 ? images.length - 1 : currentImage - 1;
    }
  };
</script>

<div class="ModalGallery">

  <div class="image-wrapper">
    <a href={imagePath} target="_blank" tabindex="-1">
      <img class="modal-gallery-image" src={imagePath} alt="" />
    </a>
  </div>

  {#if (images?.length || 0) > 1}
    <div class="Gallery-buttons-lg">
      <div role="button" tabindex="-1" on:mouseup={prevImage} class="Gallery-button-lg Gallery-button-previous"><i class="ri-arrow-left-s-line"></i></div>
      <div role="button" tabindex="-1" on:mouseup={nextImage} class="Gallery-button-lg Gallery-button-next"><i class="ri-arrow-right-s-line"></i></div>
    </div>
  {/if}


</div>

<style lang="scss">
  .ModalGallery {
    background-color: transparent;
    position: relative;
    padding: 1rem;
    margin: 2.5rem auto 0;
    z-index: var(--zindex-modal);
    box-shadow: 0 0 200px rgba(0, 0, 0, 0.1);
    height: calc(100% - 2.5rem);
  }

  .image-wrapper {
    max-width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    > a {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &:focus, &:focus-visible {
        outline: none;
        box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.3);
      }

    }
  }

  .modal-gallery-image {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
    position: relative;
  }

  .Gallery-buttons-lg {
    .Gallery-button-lg {
      position: absolute;
      z-index: 1;
      top: 14px;
      bottom: 14px;
      border-radius: 8px;
      width: 100px;
      background-color: rgba(255, 255, 255, 0);
      color: white;
      cursor: pointer;
      display: flex;
      transition: var(--transition-base);

      &:focus, &:focus-visible {
        outline: none;
        box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.3);
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.07);
      }

      > i {
        margin: auto;
      }

      &.Gallery-button-previous {
        left: .5rem;
      }
      &.Gallery-button-next {
        right: .5rem;
      }
    }
  }
</style>
