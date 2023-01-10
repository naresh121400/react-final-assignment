import { actionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
};
const cartItems = {
  cart: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const cartReducer = (state = cartItems, { type, payload }) => {
  console.log({ ...state, ...payload });
  switch (type) {
    case actionTypes.ADD_PRODUCT_CART:
      return { ...state, ...payload };
    default:
      return state;
  }
};
