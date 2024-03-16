import { type SelectOption, type IGenerationData, type FetchFunctionType } from '$lib';

export const getGenerations = async (fetch: FetchFunctionType, modelId: string) => {
  try {
    const generations = await fetch(`http://cat.primavistalab.com/api/v1/api.php?method=LOAD_GENERATIONS&modelId=${modelId}`);
    const allGenerations = await generations.json();
    const generationOptions: SelectOption[] = allGenerations?.map((generation: IGenerationData) => {
      return {
        text: `${generation.name}. ${generation.body_type} (${generation.start_year}-${generation.end_year})`,
        value: generation.generation_id
      };
    });
    return generationOptions;
  } catch(err) {
    console.log('Error', err);
    return [];
  }
}