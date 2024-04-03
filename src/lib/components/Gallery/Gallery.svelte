<script lang="ts">
  import type { IGalleryPhoto } from "./Gallery";
  export let images: IGalleryPhoto[];
  export let thumbnailsPath: string;
  // export let imagesPath: string;
</script>

<div class="Gallery">
  {#each images as image}
    <img class="Gallery-image" src={`${thumbnailsPath}/${image.path}.jpg`} alt={image.alt || ""} />
  {/each}
</div>

<style lang="scss">
  .Gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .Gallery-image {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
</style>
