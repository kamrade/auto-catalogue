import { type SelectOption, type IBrandData, type FetchFunctionType } from '$lib';

export const getBrands = async (fetch: FetchFunctionType) => {
  try {
      const brands = await fetch('http://cat.primavistalab.com/api/v1/api.php?method=LOAD_BRANDS');
      const allBrands = await brands.json();
      let bransOptions: SelectOption[] = allBrands?.map((brand: IBrandData) => ({
        text: brand.name,
        value: brand.brand_id
      }));
    
    return bransOptions;
  } catch (err) {
    console.log('Error', err);
    return [];
  }
}