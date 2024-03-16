import type { PageLoad } from "./$types";
import { type SelectOption, getRandomInt, getBrands, getModels, getGenerations, getModifications, getPhotos, hasValueInOptions } from '$lib';

export let load: PageLoad = async ({ fetch, params }) => {
  const parameteres = (params.id as string).split("/");
  const currentBrand = parameteres[0];
  const currentModel = parameteres[1];
  const currentGeneration = parameteres[2];
  const currentModification = parameteres[3];

  const brands: SelectOption[] = await getBrands(fetch);

  const randomBrand: SelectOption | null = currentBrand === '0000000000' ? brands[getRandomInt(0, brands.length - 1)] : null;

  const models : SelectOption[] = 
    randomBrand ? await getModels(fetch, randomBrand.value) : 
      currentBrand ? await getModels(fetch, currentBrand) : [];

  const randomModel: SelectOption | null = currentBrand === '0000000000' ? models[getRandomInt(0, models.length - 1)] : null;

  const generations : SelectOption[] = 
    randomModel ? await getGenerations(fetch, randomModel.value) : 
      currentBrand && currentModel ? await getGenerations(fetch, currentModel) : [];

  const randomGeneration: SelectOption | null = currentBrand === '0000000000' ? generations[getRandomInt(0, generations.length - 1)] : null;

  const modifications : SelectOption[] = 
    randomGeneration ? await getModifications(fetch, randomGeneration.value) :
      (currentBrand && currentModel && currentGeneration) ? await getModifications(fetch, currentGeneration) : [];

  const randomModification: SelectOption | null = currentBrand === '0000000000' ? modifications[getRandomInt(0, modifications.length - 1)] : null;

  const isBrandValid = hasValueInOptions(brands, currentBrand);
  const isModelValid = hasValueInOptions(models, currentModel);
  const isGenerationValid = hasValueInOptions(generations, currentGeneration);
  const isModificationValid = hasValueInOptions(modifications, currentModification);

  const photos = currentGeneration ? await getPhotos(fetch, currentGeneration) : [];

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
    randomModification
  };

}