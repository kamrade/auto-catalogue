<script lang="ts">
  import { Modal, ModalGallery, Hr } from "$lib";
  import type { IGalleryPhoto } from "./Gallery";
  export let images: IGalleryPhoto[];
  export let thumbnailsPath: string;
  export let imagesPath = "http://cat.primavistalab.com/images";
  // export let imagesPath: string;

  let isImageShowed = false;
  const showImage = () => (isImageShowed = true);
  const hideImage = () => (isImageShowed = false);

  let currentPath: string | null = null;

  const clickOnImg = (path: string) => {
    console.log("path", path);
    currentPath = path;
    showImage();
  };
</script>

<div class="Gallery">
  {#each images as image, $i}
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
      class="Gallery-image"
      src={`${thumbnailsPath}/${image.path}.jpg`}
      alt={image.alt || ""}
      on:mouseup={() => clickOnImg(image.path)}
    />
  {/each}

  <Modal
    isVisible={isImageShowed}
    hideModal={() => hideImage()}
    blackout={true}
    closeOnBackdrop={true}
    showCloseButton={true}
    hideOnEscape={true}
  >
    <ModalGallery>
      <h1 class="mb-0">Lorem ipsum dolor sit amet</h1>
      <Hr />
      <div class="image-wrapper">
        <a href={`${imagesPath}/${currentPath}.jpg`} target="_blank">
          <img class="modal-gallery-image" src={`${imagesPath}/${currentPath}.jpg`} alt="" />
        </a>
      </div>
    </ModalGallery>
  </Modal>
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

  .image-wrapper {
    max-width: 100%;
    height: 90%;
    position: relative;
    text-align: center;
  }
  .modal-gallery-image {
    max-width: 100%;
    max-height: 100%;
  }
</style>
