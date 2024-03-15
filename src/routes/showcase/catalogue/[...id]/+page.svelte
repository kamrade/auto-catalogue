<script lang="ts">
  import { goto } from "$app/navigation";
  import { Select, type SelectOption } from "$lib";
  import { page } from "$app/stores";

  export let data: any;

  page.subscribe((url) => {
    console.log(":: route changed");
  });

  // Brand
  let brandValue: SelectOption | null = null;
  const onBrandChange = (option: SelectOption) => {
    goto(`/showcase/catalogue/${option.value}`);
    brandValue = option;
  };
  $: brandValue = data.brands?.find((option: SelectOption) => option.value === data.currentBrand) || null;

  // Model
  let modelValue: SelectOption | null = null;
  const onModelChange = (option: SelectOption) => {
    goto(`/showcase/catalogue/${brandValue?.value}/${option.value}`);
    modelValue = option;
  };
  $: modelValue = data.models?.find((option: SelectOption) => option.value === data.currentModel) || null;

  // Generation
  let generationValue: SelectOption | null = null;
  const onGenerationChange = (option: SelectOption) => {
    goto(`/showcase/catalogue/${brandValue?.value}/${modelValue?.value}/${option.value}`);
    generationValue = option;
  };
  $: generationValue =
    data.generations?.find((option: SelectOption) => option.value === data.currentGeneration) || null;

  // Modification
  let modificationValue: SelectOption | null = null;
  const onModificationChange = (option: SelectOption) => {
    goto(`/showcase/catalogue/${brandValue?.value}/${modelValue?.value}/${generationValue?.value}/${option.value}`);
    modificationValue = option;
  };
  $: modificationValue =
    data.modifications?.find((option: SelectOption) => option.value === data.currentModification) || null;
</script>

<Select
  searchInDropdown={true}
  fullWidthDropdown
  label={"Brand"}
  placeholder={"Choose a brand"}
  maxHeight={300}
  options={data.brands}
  value={brandValue}
  onChange={onBrandChange}
></Select>
{#if data?.models?.length}
  <Select
    searchInDropdown={true}
    fullWidthDropdown
    label={"Model"}
    placeholder={"Choose a model"}
    maxHeight={300}
    options={data.models}
    value={modelValue}
    onChange={onModelChange}
  />
{/if}
{#if data?.generations?.length}
  <Select
    searchInDropdown={true}
    fullWidthDropdown
    label={"Generation"}
    placeholder={"Choose a generation"}
    maxHeight={300}
    options={data.generations}
    value={generationValue}
    onChange={onGenerationChange}
  />
{/if}
{#if data?.modifications?.length}
  <Select
    searchInDropdown={true}
    fullWidthDropdown
    label={"Modification"}
    placeholder={"Choose a modification"}
    maxHeight={300}
    options={data.modifications}
    value={modificationValue}
    onChange={onModificationChange}
  />
{/if}
