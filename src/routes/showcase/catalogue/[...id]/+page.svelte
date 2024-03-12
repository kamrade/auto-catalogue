<script lang="ts">
  import type { IBrandData } from "../catalogue";
  import { Select, type SelectOption } from "$lib";

  export let data: any;
  let brands = data.brands;

  let params = (data.routeParams as string).split("/");
  let currentBrand = params[0];
  let currentModel;
  let currentGeneration;
  let currentModification;

  // Brand
  let options: SelectOption[];
  $: options = brands?.map((brand: IBrandData) => ({
    text: brand.name,
    value: brand.brand_id
  }));
  let brandValue: SelectOption | null = options?.find((options) => options.value === currentBrand) || null;
  const onChange = (option: SelectOption) => (brandValue = option);
  $: brandValue = options?.find((options) => options.value === currentBrand) || null;
</script>

<div class="filter">
  <div class="filter-block">
    <Select
      searchInDropdown={true}
      fullWidthDropdown
      label={"Brand"}
      placeholder={"Choose a brand"}
      maxHeight={300}
      {options}
      value={brandValue}
      {onChange}
    ></Select>
  </div>
</div>

<style lang="scss">
  .filter {
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    .filter-block {
      width: 25%;
    }
  }
</style>
