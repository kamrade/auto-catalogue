<script lang="ts">
  import { Gallery, type IGalleryPhoto, Button } from "$lib";
  import { galleryPhotos } from "./gallery-data";

  let thumbnailsPath = "http://cat.primavistalab.com/images/thumbnail-w200";
  // let imagesStorage = "http://cat.primavistalab.com/images";
</script>

<h1>Gallery and Modal</h1>

<div>
  <Gallery images={galleryPhotos} {thumbnailsPath} />
</div>
