import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../redux/actions/productActionTypes";
export const Products = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  if (props.sortMethod === "desc") {
    props.products.sort(({ price: a }, { price: b }) => b - a);
  } else if (props.sortMethod === "asc") {
    props.products.sort(({ price: a }, { price: b }) => a - b);
  }
  const addItem = (product) => {
    dispatch(addToCart(product));
    console.log("dispatch triggered");
  };

  return (
    <div class="container mt-5">
      <input
        type="text"
        value={search}
        style={{ marginLeft: "40%", marginBottom: "50px" }}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div class="container"></div>
      <div class="row">
        {props.products
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => {
            const { id, title, price, description, image, instock } = product;
            return (
              <div class="col-xs-6 col-md-4" key={id}>
                <div
                  className="card"
                  style={{ width: "18rem", marginBottom: "10px" }}
                >
                  <img
                    className="card-img-top"
                    src={image}
                    alt="Card image cap"
                    style={{ height: "200px" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{title.substring(0, 15)}</h6>
                    <p class="card-text">{description.substring(0, 50)}</p>
                    <p class="card-text">{`Rs:${price}`}</p>
                    {instock ? (
                      <p class="card-text">{`Available: Yes`}</p>
                    ) : (
                      <p class="card-text">{`Out of Stock`}</p>
                    )}
                  </div>
                  <div className="container">
                    <div className="row">
                      <NavLink className="col ">
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => addItem(product)}
                        >
                          Add to cart
                        </button>
                      </NavLink>
                      <NavLink className="col" to={`/product/${id}`}>
                        <button className="btn btn-outline-dark">
                          View Item
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
