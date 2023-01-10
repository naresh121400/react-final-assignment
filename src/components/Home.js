import React, { useState, useEffect } from "react";
import axios from "axios";
import { Filters } from "./Filters";
import { Products } from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActionTypes";
export const Home = () => {
  const [sortMethod, setSortMethod] = useState();
  const products = useSelector((state) => state.allProducts.products);
  const cartItems = useSelector((state) => state.cartItems.cart);
  const dispatch = useDispatch();
  console.log("Test", cartItems);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios
        .get("http://localhost:3004/products")
        .catch((err) => {
          console.log("Err", err);
        });
      dispatch(setProducts(response.data));
    };

    getProducts();
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3" style={{ backgroundColor: "" }}>
          <div>
            <h6>Filter Products</h6>
            <hr />
            <div className="form-check filter-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="radio_asc"
                onClick={() => setSortMethod("asc")}
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Ascending
              </label>
            </div>
            <div className="form-check filter-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="radio_desc"
                onClick={() => setSortMethod("desc")}
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Descending
              </label>
            </div>

            <button type="button" className="btn btn-secondary clear">
              Clear Filters
            </button>
          </div>
        </div>
        <div className="col-md-9" style={{ backgroundColor: "#f2eee4" }}>
          <Products products={products} sortMethod={sortMethod} />
        </div>
      </div>
    </div>
  );
};
