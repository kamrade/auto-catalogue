<script lang="ts">
  import { goto } from "$app/navigation";
  import { Select, type SelectOption, type ICatalogueData, Link } from "$lib";
  import { page } from "$app/stores";

  let imagesStorage = "http://cat.primavistalab.com/images/thumbnail-w200";

  export let data: ICatalogueData;

  page.subscribe((url) => {
    // console.log(":: route changed");
  });

  $: {
    if (data.randomBrand) {
      goto(`/showcase/catalogue/${data.randomBrand.value}/`);
    }
  }

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

<div class="mb-3">
  <Link href="/showcase/catalogue/0000000000">Get random</Link>
</div>

<div class="mb-3">
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
</div>
{#if data?.models?.length && data.isBrandValid}
  <div class="mb-3">
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
  </div>
{/if}
{#if data?.generations?.length && data.isBrandValid && data.isModelValid}
  <div class="mb-3">
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
  </div>
{/if}
{#if data?.modifications?.length && data.isBrandValid && data.isModelValid && data.isGenerationValid}
  <div class="mb-3">
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
  </div>
{/if}

{#if data?.allPhotos}
  <div class="catalogue-gallery">
    {#each data.allPhotos as photo}
      <img
        class="catalogue-image"
        src={`${imagesStorage}/${photo.photo_name}.jpg`}
        alt=""
      />
    {/each}
  </div>
{/if}

<style lang="scss">
  .catalogue-gallery {
    margin: 0 -4px;
  }
  .catalogue-image {
    margin: 0 4px;
    width: 153px;
    height: auto;
    border-radius: 4px;
  }
</style>
