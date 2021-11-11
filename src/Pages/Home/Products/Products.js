import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Products.css";
const Products = ({ product }) => {
  const { name, price, details, img } = product;
  return (
    <div>
      <Col>
        <Card className="first-dr">
          <Card.Img variant="top" src={img} />
          <div className="social-media">
            <h3 className="">{name}</h3>
            <div className="bg-warning rounded-3 py-2">
              <small className="text-dark">{details.slice(0, 150)}.</small>
            </div>
            <h3>$ {price}</h3>
            <button className="btn btn-danger">
              <i className="fas fa-shopping-cart"></i> Add to cart
            </button>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default Products;
