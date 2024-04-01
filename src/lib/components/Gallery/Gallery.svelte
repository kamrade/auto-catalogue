<script lang="ts">
  import type { IGalleryPhoto } from "./Gallery";
  export let photos: IGalleryPhoto[];
</script>

<div class="Gallery">
  {#each photos as photo}
    <img class="catalogue-image" src={`${photo.path}.jpg`} alt={photo.alt || ""} />
  {/each}
</div>

<style lang="scss">
</style>
