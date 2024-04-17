<script lang="ts">
  import type { IGalleryPhoto } from "../Gallery/Gallery";
  export let images: IGalleryPhoto[];
  export let thumbnailsPath: string;
  export let imagesPath: string;
  export let currentImage: number | null;
  
  let imagePath: string;

  $: {
    imagePath = `${imagesPath}/${images[currentImage || 0].path}.jpg`;
  }

  const nextImage = () => {
    if (images && currentImage !== null) {
      currentImage = currentImage >= images.length-1 ? 0 : currentImage + 1;
    }
  }
  const prevImage = () => {
    if (images && currentImage !== null) {
      currentImage = currentImage === 0 ? images.length - 1 : currentImage - 1;
    }
  }
</script>

<div class="ModalGallery">
  <div class="Gallery-buttons">
    <button on:click={prevImage} class="Gallery-button">Previous</button>
    <button on:click={nextImage} class="Gallery-button">Next</button>
  </div>
  <div class="image-wrapper">
    <a href={imagePath} target="_blank">
      <img class="modal-gallery-image" src={imagePath} alt="" />
    </a>
  </div>
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

  .image-wrapper {
    max-width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
  }
  .modal-gallery-image {
    max-width: 100%;
    max-height: 100%;
  }
  .Gallery-buttons {
    position: absolute;
    z-index: var(--zindex-modal);
    top: 1rem;
    right: 1rem;

    .Gallery-button {
      border: none;
      outline: none;
      background: var(--bg-inverted-100);
      color: var(--text-color-inv);
      cursor: pointer;
    }
  }
</style>
