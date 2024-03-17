import type { PageLoad } from "./$types";
import { type ICatalogueFilter , type ICatalogueFeature, type SelectOption, type ICataloguePhoto, getRandomInt, getBrands, getModels, getGenerations, getModifications, getPhotos, hasValueInOptions, getFeatures, getFilters } from '$lib';

let previousBrand = '0';
let previousModel = '0';
let previousGeneration = '0';
let previousModification = '0';
let brands: SelectOption[];
let models: SelectOption[];
let generations: SelectOption[];
let modifications: SelectOption[];
let photos: ICataloguePhoto[];
let features: ICatalogueFeature[];
let filters: ICatalogueFilter[];

export let load: PageLoad = async ({ fetch, params }) => {
  
  const parameteres = (params.id as string).split("/");

  const currentBrand = parameteres[0];
  const currentModel = parameteres[1];
  const currentGeneration = parameteres[2];
  const currentModification = parameteres[3];

  filters = filters ? filters : await getFilters(fetch);

  brands = (previousBrand !== currentBrand) || (currentBrand === '0') ? await getBrands(fetch) : brands;
  
  const isBrandValid = hasValueInOptions(brands, currentBrand);
  const randomBrand: SelectOption | null = (currentBrand === '0000000000') || !isBrandValid ? 
    brands[getRandomInt(0, brands.length - 1)] : null;

  models = previousModel !== currentModel ? 
    randomBrand ? await getModels(fetch, randomBrand.value) : 
      currentBrand ? await getModels(fetch, currentBrand) : []
        : models;

  const isModelValid = hasValueInOptions(models, currentModel);
  const randomModel: SelectOption | null = (currentBrand === '0000000000') || (!isBrandValid || !isModelValid) ? 
    models[getRandomInt(0, models.length - 1)] : null;

  generations = previousGeneration !== currentGeneration ?
    randomModel ? await getGenerations(fetch, randomModel.value) : 
      currentBrand && currentModel ? await getGenerations(fetch, currentModel) : []
        : generations;

  const isGenerationValid = hasValueInOptions(generations, currentGeneration);
  const randomGeneration: SelectOption | null = (currentBrand === '0000000000') || (!isBrandValid || !isModelValid || !isGenerationValid)  ? 
    generations[getRandomInt(0, generations.length - 1)] : null;

  modifications = previousModification !== currentModification ?
    randomGeneration ? await getModifications(fetch, randomGeneration.value) :
      (currentBrand && currentModel && currentGeneration) ? await getModifications(fetch, currentGeneration) : []
      : modifications;

  const isModificationValid = hasValueInOptions(modifications, currentModification);
  const randomModification: SelectOption | null = (currentBrand === '0000000000') || (!isBrandValid || !isModelValid || !isGenerationValid || !isModificationValid) ? 
    modifications[getRandomInt(0, modifications.length - 1)] : null;

  photos = previousGeneration !== currentGeneration ? 
    currentGeneration ? await getPhotos(fetch, currentGeneration) : 
    randomGeneration ? await getPhotos(fetch, randomGeneration.value) : []
    : photos;

  features = previousModification !== currentModification ?
    ( currentModification ? await getFeatures(fetch, currentModification) :
    ( randomModification ? await getFeatures(fetch, randomModification.value) : [] ))
    : features;

  previousBrand = currentBrand || randomBrand?.value || '0';
  previousModel = currentModel || randomModel?.value || '0';
  previousGeneration = currentGeneration || randomGeneration?.value || '0';
  previousModification = currentModification || randomModification?.value || '0';

  return {
    currentBrand: isBrandValid ? currentBrand : 0,
    currentModel: (isBrandValid && isModelValid) ? currentModel : 0 ,
    currentGeneration: (isBrandValid && isModelValid && isGenerationValid) ? currentGeneration : 0,
    currentModification: (isBrandValid && isModelValid && isGenerationValid && isModificationValid) ? currentModification : 0,
    isBrandValid,
    isModelValid,
    isGenerationValid, 
    isModificationValid, 
    
    brands, 
    models,
    generations,
    modifications,
    photos,

    randomBrand,
    randomModel,
    randomGeneration,
    randomModification,

    features,
    filters
  };

}