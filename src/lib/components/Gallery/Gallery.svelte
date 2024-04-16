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
