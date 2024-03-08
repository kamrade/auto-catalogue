import type { PageLoad } from "./$types";

export let load: PageLoad = async ({ fetch, params }) => {

  const brands = await fetch('http://cat.primavistalab.com/api/v1/api.php?method=LOAD_BRANDS');
  const allBrands = await brands.json();
  const filters = await fetch('http://cat.primavistalab.com/api/v1/api.php?method=LOAD_FILTER');
  const allFilters = await filters.json();
  const models = await fetch('http://cat.primavistalab.com/api/v1/api.php?method=LOAD_MODELS&brandId=1');
  const allModels = await models.json();
  const generations = await fetch('http://cat.primavistalab.com/api/v1/api.php?method=LOAD_GENERATIONS&modelId=1');
  const allGenerations = await generations.json();
  const modifications = await fetch('http://cat.primavistalab.com/api/v1/api.php?method=LOAD_MODIFICATIONS&generationId=1');
  const allModifications = await modifications.json();
  
  const photos = await fetch('http://cat.primavistalab.com/api/v1/api.php?method=LOAD_PHOTOS&generationId=1');
  const allPhotos = await photos.json();
  const features = await fetch('http://cat.primavistalab.com/api/v1/api.php?method=LOAD_FEATURES&modificationId=1');
  const allFeatures = await features.json();

  
  return {
    allBrands,
    allFilters,
    allModels,
    allGenerations,
    allModifications,
    allPhotos,
    allFeatures
  };
};