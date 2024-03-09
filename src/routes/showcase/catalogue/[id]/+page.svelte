<script lang="ts">
  import { getContext } from "svelte";
  const brands = getContext<any>("brands");
  brands.subscribe((data: any) => {
    console.log(data);
  });
</script>

<h2>Cat</h2>
