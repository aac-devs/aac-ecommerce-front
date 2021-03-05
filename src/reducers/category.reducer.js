import { types } from "../types/types";

const initialState = {
  count: 0,
  list: [],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.category.load:
      return {
        ...state,
        count: action.payload.count,
        list: action.payload.rows,
      };
    default:
      return state;
  }
};
