<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  // export let data;

  page.subscribe((url) => {});

  // $: {
  //   if (brandValue) {
  //     goto(`/showcase/catalogue/${brandValue.value}`);
  //   }
  // }
</script>

<h1>Auto Catalogue</h1>

<slot />
