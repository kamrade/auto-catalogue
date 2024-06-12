<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { Select, type SelectOption, type ICatalogueData, Link } from "$lib";
  import { checkParams } from "./modules";

  export let data: ICatalogueData;

  let lastSelection: "" | "brand" | "model" | "generation" | "modification" = "";
  let isPreNavigation = false;
  let imagesStorage = "http://cat.primavistalab.com/images/thumbnail-w200";

  onMount( () => lastSelection = "" );

  let openBrandDropdown: () => void;
  let openModelDropdown: () => void;
  let openGenerationDropdown: () => void;
  let openModificationDropdown: () => void;

  page.subscribe(( /* url */ ) => {

    checkParams(data); // Show alert if user entered wrong URL

    if (!isPreNavigation) {
      if (browser && data) {
        switch (lastSelection) {
          case "":
            break;
          case "brand":
            openModelDropdown && openModelDropdown();
            break;
          case "model":
            openGenerationDropdown && openGenerationDropdown();
            break;
          case "generation":
            openModificationDropdown && openModificationDropdown();
            break;
          case "modification":
            return;
        }
      }
    } else {
      isPreNavigation = false;
    }
  });

  $: {
    if (browser && (data.randomBrand || data.randomModel || data.randomGeneration || data.randomModification)) {
      let path =
        "/showcase/catalogue/" +
        `${data.randomBrand?.value || data.currentBrand}/` +
        `${data.randomModel?.value || data.currentModel}/` +
        `${data.randomGeneration?.value || data.currentGeneration}/` +
        `${data.randomModification?.value || data.currentModification}`;
      goto(path);
    }
  }

  // Brand change handler
  let brandValue: SelectOption | null = null;
  const onBrandChange = (option: SelectOption) => {
    lastSelection = "brand";
    isPreNavigation = true;
    goto(`/showcase/catalogue/${option.value}`);
    brandValue = option;
  };
  $: brandValue = data.brands?.find((option: SelectOption) => option.value === data.currentBrand) || null;

  // Model change handler
  let modelValue: SelectOption | null = null;
  const onModelChange = (option: SelectOption) => {
    lastSelection = "model";
    isPreNavigation = true;
    goto(`/showcase/catalogue/${brandValue?.value}/${option.value}`);
    modelValue = option;
  };
  $: modelValue = data.models?.find((option: SelectOption) => option.value === data.currentModel) || null;

  // Generation change handler
  let generationValue: SelectOption | null = null;
  const onGenerationChange = (option: SelectOption) => {
    lastSelection = "generation";
    isPreNavigation = true;
    goto(`/showcase/catalogue/${brandValue?.value}/${modelValue?.value}/${option.value}`);
    generationValue = option;
  };
  $: generationValue =
    data.generations?.find((option: SelectOption) => option.value === data.currentGeneration) || null;

  // Modification change handler
  let modificationValue: SelectOption | null = null;
  const onModificationChange = (option: SelectOption) => {
    lastSelection = "modification";
    goto(`/showcase/catalogue/${brandValue?.value}/${modelValue?.value}/${generationValue?.value}/${option.value}`);
    modificationValue = option;
  };
  $: modificationValue =
    data.modifications?.find((option: SelectOption) => option.value === data.currentModification) || null;
</script>

<div class="mb-3">
  <Link href="/showcase/catalogue/random">Get random</Link>
</div>

<div class="mb-3">
  <Select
    bind:focusTextInputElement={openBrandDropdown}
    fullWidthDropdown
    label={"Brand"}
    placeholder={"Choose a brand"}
    maxHeight={300}
    options={data.brands}
    value={brandValue}
    onChange={onBrandChange}
  ></Select>
</div>

<div class="mb-3">
  <Select
    bind:focusTextInputElement={openModelDropdown}
    fullWidthDropdown
    label={"Model"}
    placeholder={"Choose a model"}
    maxHeight={300}
    options={data.models}
    value={modelValue}
    onChange={onModelChange}
  />
</div>

<div class="mb-3">
  <Select
    bind:focusTextInputElement={openGenerationDropdown}
    fullWidthDropdown
    label={"Generation"}
    placeholder={"Choose a generation"}
    maxHeight={300}
    options={data.generations}
    value={generationValue}
    onChange={onGenerationChange}
  />
</div>

<div class="mb-3">
  <Select
    bind:focusTextInputElement={openModificationDropdown}
    fullWidthDropdown
    label={"Modification"}
    placeholder={"Choose a modification"}
    maxHeight={300}
    options={data.modifications}
    value={modificationValue}
    onChange={onModificationChange}
  />
</div>

{#if data?.photos && brandValue && modelValue && generationValue && modificationValue}
  <div class="catalogue-gallery">
    {#each data.photos as photo}
      <img class="catalogue-image" src={`${imagesStorage}/${photo.photo_name}.jpg`} alt="" />
    {/each}
  </div>
{/if}

{#if brandValue && modelValue && generationValue && modificationValue}
  {#each data.features as feature}
    <div class="catalogue-feature">
      <div class="catalogue-feature-label">
        <div class="text-muted">
          {data.filters.find((filter) => filter.id === feature.ifilter_id)?.group}:
        </div>
        <div class="text-muted">
          {data.filters.find((filter) => filter.id === feature.ifilter_id)?.name}
        </div>
      </div>
      <div class="catalogue-feature-value">
        <div>
          {feature.value}
        </div>
        <div>
          {data.filters.find((filter) => filter.id === feature.ifilter_id)?.unit || ""}
        </div>
      </div>
    </div>
  {/each}
{/if}

<style lang="scss"> @import './catalogue.scss'; </style>
