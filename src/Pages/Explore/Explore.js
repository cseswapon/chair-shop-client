import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Products from "../Home/Products/Products";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import Spinner from "react-bootstrap/Spinner";
const Explore = () => {
  const [explore, setExplore] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setExplore(data);
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
    <div>
      <Navigation />
      <div className="text-center my-5">
        <h1
          className=" fw-bolder"
          style={{
            borderBottom: "2px solid orange",
            display: "inline",
            color: "#e6490b",
          }}
        >
          Our All Product
        </h1>
      </div>
      <div className="container">
        <Row xs={1} md={3} className="g-4">
          {explore.map((pd) => (
            <Products key={pd._id} product={pd}></Products>
          ))}
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
