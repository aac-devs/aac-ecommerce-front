import { fetchData } from "../helpers/fetch.helper";
import { types } from "../types/types";
import { startLoadingProductXCategory } from "./product.action";
import { finishLoading, startLoading } from "./ui.action";

export const categoriesStartLoading = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    const resp = await fetchData.fetchData("products/category");
    const body = await resp.json();
    dispatch(categoriesLoaded(body));
    dispatch(finishLoading());
    dispatch(startLoadingProductXCategory());
  };
};

const categoriesLoaded = (categories) => ({
  type: types.category.load,
  payload: categories,
});
