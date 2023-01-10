import { actionTypes } from "../constants/actionTypes";
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_PRODUCT_CART,
    payload: product,
  };
};
export const removeFromCart = (productId) => {
  return {
    type: actionTypes.REMOVE_PRODUCT_CART,
    payload: productId,
  };
};
