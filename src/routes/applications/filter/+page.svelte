<script lang="ts">

  import { onMount} from "svelte";
  import { type IFilter } from '$lib';

  let uniqueGroups: string[] = [];
  let selectedGroup: string;
  let selectedFilter: string;
  let uniqueFilterTypes: string[];

  export let data: {
    filters: IFilter[];
  };

  onMount(() => {
    let groups = data.filters.map((filter: IFilter) => filter.group);
    let filterTypes = data.filters.map((filter: IFilter) => filter.filter_type);

    uniqueFilterTypes = [];
    filterTypes.forEach((filterType: string) => {
      if (!uniqueFilterTypes.includes(filterType)) { uniqueFilterTypes.push(filterType) }
    })

    uniqueGroups = [];
    groups.forEach((group: string) => {
      if (!uniqueGroups.includes(group)) { uniqueGroups.push(group) }
    });

    selectedGroup = uniqueGroups[0];
    selectedFilter = data.filters[0].id;

    console.log(uniqueFilterTypes);
  });

</script>

<h1>Filter</h1>

<div class="row">
  <div class="col-md-6">
    {#each uniqueGroups as group}
      <div
        class={`FilterGroup ${ group === selectedGroup ? 'FilterGroupSelected' : null }`}
        on:mouseup={() => selectedGroup = group}
        role="button" tabindex="-1">
        {group}
      </div>
    {/each}
  </div>
  <div class="col-md-6">
    {#each data.filters as filter}
      {#if filter.group === selectedGroup}
        <div
          role="button" tabindex="-1"
          class={`FilterGroup ${ filter.id === selectedFilter ? 'FilterGroupSelected' : null }`}
          on:mouseup={() => {
            console.log(filter);
            selectedFilter = filter.id;
          }}>
          {filter.name}
        </div>
      {/if}
    {/each}
  </div>
</div>



<style lang="scss">

  .FilterGroup {
    padding: .25rem .5rem;
    margin-bottom: .25rem;
    background: var(--bg-control-100);
    cursor: pointer;
    &:hover {
      background: var(--bg-control-200);
    }
    &.FilterGroupSelected {
      background: var(--bg-primary-100);
    }
  }
</style>
