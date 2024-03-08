import type { PageLoad } from "./$types";

export let load: PageLoad = async ({ fetch, params }) => {
  console.log(params.id);
}