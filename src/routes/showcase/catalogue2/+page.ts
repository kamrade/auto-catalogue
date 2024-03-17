import type { PageLoad } from "./$types";
import { redirect } from '@sveltejs/kit';

export let load: PageLoad = async ({ fetch, params }) => {
  redirect(307, '/showcase/catalogue2/0');
};