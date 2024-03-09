import type { PageLoad } from "./$types";

export let load: PageLoad = async ({ fetch, params }) => {
  return { brandId: params.id };
}