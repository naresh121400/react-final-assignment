import { combineReducers } from "redux";
import { cartReducer, productReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  cartItems: cartReducer,
});
export default reducers;
