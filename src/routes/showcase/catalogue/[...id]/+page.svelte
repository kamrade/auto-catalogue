<script lang="ts">
  import { writable } from "svelte/store";
  import { getContext, setContext } from "svelte";
  import { page } from "$app/stores";
  import type { IBrandData } from "../catalogue";

  export let data: any;
  const currentBrand = writable();

  const isBeta = $page.url.searchParams.has("beta");
  const b = $page.url.searchParams.get("beta");

  page.subscribe((url) => {
    console.log(url);
    console.log(url.url.searchParams);
  });

  $: {
    console.log("is beta:", isBeta, b);
  }

  $: currentBrand.set(data.brandId);
  setContext("currentBrand", currentBrand);

  const brands = getContext<any>("brands");
  brands.subscribe((data: IBrandData[]) => {
    console.log(data);
  });
  $: console.log(data.brandId);
</script>

<h2>Cat</h2>
