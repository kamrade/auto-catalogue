<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  page.subscribe((url) => {});

  // $: {
  //   if (brandValue) {
  //     goto(`/showcase/catalogue/${brandValue.value}`);
  //   }
  // }
</script>

<h1>Catalogue Layout</h1>

<slot />
