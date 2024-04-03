<script lang="ts">
  import { Gallery, type IGalleryPhoto, Modal, Button } from "$lib";
  import { galleryPhotos } from "./gallery-data";

  let isModalVisible = false;

  let hideModal = () => (isModalVisible = false);
  let showModal = () => (isModalVisible = true);

  let thumbnailsPath = "http://cat.primavistalab.com/images/thumbnail-w200";
  // let imagesStorage = "http://cat.primavistalab.com/images";
</script>

<h1>Gallery and Modal</h1>

<div class="mb-3">
  <Button props={{ onClick: () => (isModalVisible = true) }}>Show Modal</Button>
</div>

{#if isModalVisible}
  <Modal isVisible={isModalVisible}></Modal>
{/if}

<div>
  <Gallery images={galleryPhotos} {thumbnailsPath} />
</div>
