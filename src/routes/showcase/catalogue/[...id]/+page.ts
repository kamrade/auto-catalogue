import type { PageLoad } from "./$types";
import { type SelectOption } from "$lib";
import type { IBrandData } from "../catalogue";

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
    allModels = allModels?.map((model: any) => {
      return {
        text: model.name,
        value: model.model_id
      };
    });
  }

  if (currentModel) {
    const generations = await fetch(`http://cat.primavistalab.com/api/v1/api.php?method=LOAD_GENERATIONS&modelId=${currentModel}`);
    allGenerations = await generations.json();
    allGenerations = allGenerations?.map((generation: any) => {
      return {
        text: generation.name,
        value: generation.generation_id
      };
    });
  }

  if (currentGeneration) {
    const modifications = await fetch(`http://cat.primavistalab.com/api/v1/api.php?method=LOAD_MODIFICATIONS&generationId=${currentGeneration}`);
    allModifications = await modifications.json();
    allModifications = allModifications?.map((modification: any) => {
      return {
        text: modification.name,
        value: modification.modification_id
      };
    });
  }
  
  return { 
    currentBrand, 
    currentModel, 
    currentGeneration, 
    currentModification, 
    brands: bransOptions, 
    models: allModels,
    generations: allGenerations,
    modifications: allModifications
  };

}