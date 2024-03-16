import type { PageLoad } from "./$types";
import { type SelectOption, getRandomInt, getBrands, getModels, getGenerations, getModifications, getPhotos, hasValueInOptions } from '$lib';

export let load: PageLoad = async ({ fetch, params }) => {
  const parameteres = (params.id as string).split("/");
  const currentBrand = parameteres[0];
  const currentModel = parameteres[1];
  const currentGeneration = parameteres[2];
  const currentModification = parameteres[3];

  const bransOptions: SelectOption[] = await getBrands(fetch);

  const randomBrand: SelectOption | null = 
    currentBrand === '0000000000' 
      ? bransOptions[getRandomInt(0, bransOptions.length - 1)] 
      : null;

  const allModels : SelectOption[] = 
    currentBrand ? await getModels(fetch, currentBrand) : [];
  const allGenerations : SelectOption[] = 
    currentBrand && currentModel ? await getGenerations(fetch, currentModel) : [];
  const allModifications : SelectOption[] = 
    (currentBrand && currentModel && currentGeneration) ? await getModifications(fetch, currentGeneration) : [];

  const isBrandValid = hasValueInOptions(bransOptions, currentBrand);
  const isModelValid = hasValueInOptions(allModels, currentModel);
  const isGenerationValid = hasValueInOptions(allGenerations, currentGeneration);
  const isModificationValid = hasValueInOptions(allModifications, currentModification);

  const allPhotos = currentGeneration ? await getPhotos(fetch, currentGeneration) : [];

  return { 
    currentBrand: isBrandValid ? currentBrand : 0,
    currentModel: (isBrandValid && isModelValid) ? currentModel : 0 ,
    currentGeneration: (isBrandValid && isModelValid && isGenerationValid) ? currentGeneration : 0,
    currentModification: (isBrandValid && isModelValid && isGenerationValid && isModificationValid) ? currentModification : 0,
    isBrandValid,
    isModelValid,
    isGenerationValid, 
    isModificationValid, 
    brands: bransOptions, 
    models: allModels,
    generations: allGenerations,
    modifications: allModifications,
    allPhotos,

    randomBrand
  };

}