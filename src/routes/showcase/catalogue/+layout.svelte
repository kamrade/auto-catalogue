<script lang="ts">
  import { goto } from "$app/navigation";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import type { LayoutData } from "./$types";
  import { Select, type SelectOption } from "$lib";

  export let data: LayoutData;

  const brands = writable();

  interface IBrandData {
    name: string;
    brand_id: string;
  }

  let brandValue: SelectOption;
  let options: SelectOption[];

  $: options = data?.brands?.map((brand: IBrandData) => ({
    text: brand.name,
    value: brand.brand_id
  }));

  $: {
    if (brandValue) {
      goto(`/showcase/catalogue/${brandValue.value}`);
    }
  }

  $: {
    brands.set(data);
    console.log(data);
  }
  setContext("brands", brands);

  const onChange = (option: SelectOption) => (brandValue = option);
</script>

<h1>Catalogue Layout</h1>

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

<slot />
