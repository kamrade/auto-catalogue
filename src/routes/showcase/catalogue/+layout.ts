import type { LayoutLoad } from "./$types";

export let load: LayoutLoad = async ({ fetch, params }) => {
  const brands = await fetch('http://cat.primavistalab.com/api/v1/api.php?method=LOAD_BRANDS');
  const allBrands = await brands.json();
  return {
    brands: allBrands
  }
}