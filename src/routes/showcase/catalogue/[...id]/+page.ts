import type { PageLoad } from "./$types";
import type { SelectOption, IBrandData, IModelData, IGenerationData, IModificationData } from "$lib";

export let load: PageLoad = async ({ fetch, params }) => {
  
  let parameteres = (params.id as string).split("/");
  
  let currentBrand = parameteres[0];
  let currentModel = parameteres[1];
  let currentGeneration = parameteres[2];
  let currentModification = parameteres[3];

  let allModels;
  let allGenerations;
  let allModifications;
  
  const brands = await fetch('http://cat.primavistalab.com/api/v1/api.php?method=LOAD_BRANDS');
  const allBrands = await brands.json();
  let bransOptions: SelectOption[] = allBrands?.map((brand: IBrandData) => ({
    text: brand.name,
    value: brand.brand_id
  }));

  if (currentBrand) {
    const models = await fetch(`http://cat.primavistalab.com/api/v1/api.php?method=LOAD_MODELS&brandId=${currentBrand}`);
    allModels = await models.json();
    allModels = allModels?.map((model: IModelData) => {
      return {
        text: `${model.name} (${model.start_year}-${model.end_year})`,
        value: model.model_id
      };
    });
  } else {
    allModels = [];
  }

  if (currentBrand && currentModel) {
    const generations = await fetch(`http://cat.primavistalab.com/api/v1/api.php?method=LOAD_GENERATIONS&modelId=${currentModel}`);
    allGenerations = await generations.json();
    allGenerations = allGenerations?.map((generation: IGenerationData) => {
      return {
        text: `${generation.name}. ${generation.body_type} (${generation.start_year}-${generation.end_year})`,
        value: generation.generation_id
      };
    });
  } else {
    allGenerations = [];
  }

  if (currentBrand && currentModel && currentGeneration) {
    const modifications = await fetch(`http://cat.primavistalab.com/api/v1/api.php?method=LOAD_MODIFICATIONS&generationId=${currentGeneration}`);
    allModifications = await modifications.json();
    allModifications = allModifications?.map((modification: IModificationData) => {
      return {
        text: `${modification.name}. ${modification.engine_power}HP ${modification.car_drive} (${modification.start_year}-${modification.end_year})`,
        value: modification.modification_id
      };
    });
  } else {
    allModifications = [];
  }

  function isValidParameter(options: SelectOption[], currentValue: string) {
    const result = options?.find((opt: SelectOption) => {
      return opt.value === currentValue
    });

    return result ? true : false;
  }

  let isBrandValid = isValidParameter(bransOptions, currentBrand);
  let isModelValid = isValidParameter(allModels, currentModel);
  let isGenerationValid = isValidParameter(allGenerations, currentGeneration);
  let isModificationValid = isValidParameter(allModifications, currentModification);
  
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
    modifications: allModifications
  };

}