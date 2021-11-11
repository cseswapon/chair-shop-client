import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Products from "../Products/Products";
import "./Product.css";
const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <div className="container custom-buttom">
      <div className=" text-center my-5">
        <h1 className="fw-bold product">Our Product</h1>
      </div>
      <Row xs={1} md={3} className="g-4">
        {product.slice(0, 6).map((pd) => (
          <Products key={pd._id} product={pd}></Products>
        ))}
      </Row>
    </div>
  );
};

export default Product;
