<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import type { LayoutData } from "./$types";
  import { Select, type SelectOption } from "$lib";
  import type { IBrandData } from "./catalogue";

  export let data: LayoutData;

  const brands = writable();

  page.subscribe((url) => {});

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

  $: brands.set(data);
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
