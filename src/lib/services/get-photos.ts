import { type FetchFunctionType } from '$lib';

export const getPhotos = async (fetch: FetchFunctionType, generationId: string) => {
  try {
    const photos = await fetch(`http://cat.primavistalab.com/api/v1/api.php?method=LOAD_PHOTOS&generationId=${generationId}`);
    const allPhotos = await photos.json();
    return allPhotos;
  } catch(err) {
    console.log('Error', err);
    return [];
  }
}