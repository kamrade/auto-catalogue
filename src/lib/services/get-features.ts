import { type FetchFunctionType } from '$lib';

export const getFeatures = async (fetch: FetchFunctionType, modificationId: string) => {
  try {
    const features = await fetch(`http://cat.primavistalab.com/api/v1/api.php?method=LOAD_FEATURES&modificationId=${modificationId}`);
    const allFeatures = await features.json();
    return allFeatures;
  } catch (err) {
    console.log('Error', err);
    return [];
  }
}