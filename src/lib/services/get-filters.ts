import { type FetchFunctionType } from '$lib';

export const getFilters = async (fetch: FetchFunctionType) => {
  try {
    const filters = await fetch('http://cat.primavistalab.com/api/v1/api.php?method=LOAD_FILTER');
    const allFilters = await filters.json();
    return allFilters;
  } catch (err) {
    console.log('Error', err);
    return [];
  }
}