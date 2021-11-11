import React from "react";
import slider1 from "../../../img/slider-1.jpg";
import slider2 from "../../../img/slider-2.jpg";
import slider3 from "../../../img/slider-3.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div
          className="carousel-item active p-5 rounded-3"
          style={{ backgroundColor: "#f5f5f7" }}
        >
          <div className="row d-flex align-items-center">
            <div className="col-lg-7 text-center">
              <h1 className="fw-bold text-primary banner-header-text">
                Modern Chair
              </h1>
              <p className="text-secoundry">
                One of the basic pieces of furniture, a chair is a type of seat.
                Its primary features are two pieces of a durable material,
                attached as back and seat to one
              </p>
              <h1 className="text-primary">Price : $100</h1>
              <button className="btn-outline-primary mt-2 rounded">
                Buy Now
              </button>
            </div>
            <div className="col-lg-5">
              <img src={slider1} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <div
          className="carousel-item p-5 rounded-3"
          style={{ backgroundColor: "#f5f5f7" }}
        >
          <div className="row d-flex align-items-center">
            <div className="col-lg-5">
              <img src={slider2} className="d-block w-100" alt="..." />
            </div>
            <div className="col-lg-7 text-center">
              <h1 className="fw-bold text-danger banner-header-text">
                Natural Chair
              </h1>
              <p className="text-secoundry">
                Crafted with durability in mind. The chair balances durability,
                functionality, and comfort stylishly. It's upholstered in
                linen-blend fabric.
              </p>
              <h1 className="text-danger">Price : $200</h1>
              <button className="btn-outline-danger mt-2 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="carousel-item p-5 rounded-3"
          style={{ backgroundColor: "#f5f5f7" }}
        >
          <div className="row d-flex align-items-center">
            <div className="col-lg-7 text-center">
              <h1 className="fw-bold text-primary banner-header-text">
                Aluha Chair
              </h1>
              <p className="text-secondary">
                Our best-selling Ankara chair tries on a new look in on-trend
                cane. In keeping with Ankara's tropical vibe, the chair backs
                its barrel curves with a breezy.
              </p>
              <h1 className="text-primary">Price : $250</h1>
              <button className="btn-outline-primary mt-2 rounded">
                Buy Now
              </button>
            </div>
            <div className="col-lg-5">
              <img src={slider3} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
