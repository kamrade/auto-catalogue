import type { PageLoad } from "./$types";

export let load: PageLoad = async ({ fetch, params }) => {
  return { routeParams: params.id };
}