import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Products from "../Products/Products";
import "./Product.css";
import Spinner from "react-bootstrap/Spinner";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://lit-badlands-47254.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="text-center my-5 py-5">
        <div className="my-3">
          <Spinner animation="grow" variant="danger" />
        </div>
      </div>
    );
  }
  return (
    <div className="container custom-buttom">
      <div className=" mb-5 pb-5">
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
