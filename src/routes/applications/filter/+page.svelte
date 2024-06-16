<script lang="ts">

  import { onMount} from "svelte";

  export let data: any;

  onMount(() => {
    console.log(data);
  });

</script>

<h1>Filter</h1>

{#each data.filters as filter}
  <div>
    <span style="display: inline-block; min-width: 120px;">{filter.group}</span> {filter.name}
  </div>
{/each}
