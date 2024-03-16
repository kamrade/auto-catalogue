import { type SelectOption, type IModificationData, type FetchFunctionType } from '$lib';

export const getModifications = async (fetch: FetchFunctionType, generationId: string) => {
  const modifications = await fetch(`http://cat.primavistalab.com/api/v1/api.php?method=LOAD_MODIFICATIONS&generationId=${generationId}`);
  const allModifications = await modifications.json();
  const modificationOptions: SelectOption[] = allModifications?.map((modification: IModificationData) => {
    return {
      text: `${modification.name}. ${modification.engine_power}HP ${modification.car_drive} (${modification.start_year}-${modification.end_year})`,
      value: modification.modification_id
    };
  });

  return modificationOptions;
}