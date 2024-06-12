<script lang="ts">
  import { Modal, ModalGallery, type IGalleryPhoto } from "$lib";
  export let images: IGalleryPhoto[];
  export let thumbnailsPath: string;
  export let imagesPath: string;

  let isImageShowed = false;
  const showImage = () => (isImageShowed = true);
  const hideImage = () => (isImageShowed = false);

  let currentPath: string | null = null;
  let currentImage: number | null = null;

  const clickOnImg = (i: number, path: string) => {
    currentImage = i;
    currentPath = path;
    showImage();
  };

</script>

<div class="Gallery">
  {#each images as image, $i}
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
      class="Gallery-image"
      src={`${thumbnailsPath}/${image.photo_name}.jpg`}
      alt={image.alt || ""}
      on:mouseup={() => clickOnImg($i, image.photo_name)}
    />
  {/each}

  {#if isImageShowed}
    <Modal
      isVisible={isImageShowed}
      hideModal={() => hideImage()}
      blackout={true}
      closeOnBackdrop={true}
      showCloseButton={true}
      hideOnEscape={true}
    >
      <ModalGallery {images} {thumbnailsPath} {imagesPath} {currentImage} />
    </Modal>
  {/if}

</div>

<style lang="scss">
  @import "../../../styles/mixins-and-variables.scss";

  .Gallery {
    display: flex;
    flex-wrap: wrap;
  }

  .Gallery-image {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    width: 20%;
    height: auto;
    border: 4px solid white;

    @include media-breakpoint-down(lg) {
      width: 33.3%;
    }

    @include media-breakpoint-down(md) {
      width: 50%;
    }

    &:hover {
      opacity: 0.7;
    }
  }  
</style>
