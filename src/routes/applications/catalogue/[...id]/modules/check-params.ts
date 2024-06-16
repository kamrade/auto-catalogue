import { type ICatalogueData, addToast } from "$lib";

export const checkParams = ( data: ICatalogueData ) => {
  if (data.invalidUrlParam !== "") {
    addToast({
      text: `Invalid ${data.invalidUrlParam} URL. Getting a random ${data.invalidUrlParam}`,
      type: 'warning'
    });
  }
}
