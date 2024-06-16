import type { PageLoad } from "./$types";
import {getFilters} from "$lib";

export const load: PageLoad = async ({ fetch }) => {
  const filters = await getFilters(fetch);
  return { filters };
};
