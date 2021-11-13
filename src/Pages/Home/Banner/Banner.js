import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../../img/slider-img/slider-0.jpg";
import slider2 from "../../../img/slider-img/slider-1.jpg";
import slider3 from "../../../img/slider-img/slider-2.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={slider1} alt="avtor slide" />
        <Carousel.Caption>
          <h3>Official Chair</h3>
          <p>Our main focus chair selling</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider2} alt="avtor slide" />

        <Carousel.Caption>
          <h3>Home Desk Chair</h3>
          <p>This is a very good quality chair</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider3} alt="avtor slide" />
        <Carousel.Caption>
          <h3>Official Meeting Chair</h3>
          <p>This chair is very comfortable with meeting duscation.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
