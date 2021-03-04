import { combineReducers } from "redux";
import { categoryReducer } from "./category.reducer";
import { productReducer } from "./product.reducer";

export const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
});
