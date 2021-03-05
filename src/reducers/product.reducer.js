import { types } from "../types/types";

const initialState = {
  count: 0,
  xCategory: [],
  list: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.product.xCategoryLoad:
      return {
        ...state,
        xCategory: [...state.xCategory, action.payload],
      };
    default:
      return state;
  }
};
