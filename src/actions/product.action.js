import { fetchData } from "../helpers/fetch.helper";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui.action";

export const startLoadingProductXCategory = () => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    const { name } = getState().categories.list[0];
    const resp = await fetchData.fetchData(`products/category/${name}`);
    const body = await resp.json();
    dispatch(productsXCategoryLoaded(body));
    dispatch(finishLoading());
    
  };
};

const productsXCategoryLoaded = (products) => ({
  type: types.product.xCategoryLoad,
  payload: products,
});
