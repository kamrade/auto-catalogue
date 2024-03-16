import { type SelectOption, type IModelData, type FetchFunctionType } from '$lib';

export const getModels = async (fetch: FetchFunctionType, brandId: string) => {
  try {
    const models = await fetch(`http://cat.primavistalab.com/api/v1/api.php?method=LOAD_MODELS&brandId=${brandId}`);
    const allModels = await models.json();
    const modelOptions: SelectOption[] = allModels?.map((model: IModelData) => {
      return {
        text: `${model.name} (${model.start_year}-${model.end_year})`,
        value: model.model_id
      };
    });

    return modelOptions;
  } catch(err) {
    console.log('Error', err);
    return [];
  }
}