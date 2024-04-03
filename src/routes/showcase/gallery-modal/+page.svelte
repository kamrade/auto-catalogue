<script lang="ts">
  import { Gallery, type IGalleryPhoto, Button, Modal } from "$lib";
  import { galleryPhotos } from "./gallery-data";

  let isModalShowed = false;
  const showModal = () => (isModalShowed = true);
  const hideModal = () => (isModalShowed = false);

  let thumbnailsPath = "http://cat.primavistalab.com/images/thumbnail-w200";
  // let imagesStorage = "http://cat.primavistalab.com/images";
</script>

<h1>Gallery and Modal</h1>

<div class="mb-3">
  <Button props={{ onClick: () => showModal() }}>Show Modal</Button>
</div>

{#if isModalShowed}
  <Modal isVisible={isModalShowed} {hideModal}>Test</Modal>
{/if}

<div>
  <Gallery images={galleryPhotos} {thumbnailsPath} />
</div>
