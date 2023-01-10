import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = async (productId) => {
    const response = await axios
      .get(`http://localhost:3004/products/${productId}`)
      .catch((err) => console.log(err));
    console.log(response.data);
    setProduct(response.data);
  };
  useEffect(() => {
    if (id && id !== "") {
      getProduct(id);
    }
  }, [id]);

  return (
    <div className="card text-center">
      <div className="card-header">{product.title}</div>
      <div className="card-body">
        {product.instock ? (
          <h5 className="card-title">Available</h5>
        ) : (
          <h5 className="card-title">Out of stock</h5>
        )}
        <p className="card-text">{product.description}</p>
        <img
          className="card-img-top"
          src={product.image}
          alt="Card image cap"
          style={{ width: "400px", height: "400px" }}
        />
      </div>
      <div className="card-footer text-muted">{`Rs: ${product.price}`}</div>
    </div>
  );
};
