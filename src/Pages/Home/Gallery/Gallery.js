import React from "react";
import img1 from "../../../img/image-gl/1.jpg";
import img2 from "../../../img/image-gl/2.jpg";
import img3 from "../../../img/image-gl/3.jpg";
import img4 from "../../../img/image-gl/4.jpg";
import img7 from "../../../img/image-gl/7.jpg";
import img8 from "../../../img/image-gl/8.jpg";
import img9 from "../../../img/image-gl/9.jpg";
const Gallery = () => {
  return (
    <div className="container custom-buttom">
      <div className=" mb-5 pb-5">
        <h1 className="fw-bold product">Our Gallery</h1>
      </div>
      <div className="mt-5">
        <div className="mx-auto row gx-3">
          <div className="col-lg-4">
            <div className="row mb-3">
              <img
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="img-fluid"
                src={img1}
                alt="avtor"
              />
            </div>
            <div className="row">
              <img
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="img-fluid"
                src={img2}
                alt="avtor"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row mb-3">
              <img
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="img-fluid"
                src={img3}
                alt="avtor"
              />
            </div>
            <div className="row mb-3">
              <img
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="img-fluid"
                src={img4}
                alt="avtor"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row mb-3">
              <img
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="img-fluid"
                src={img7}
                alt="avtor"
              />
            </div>
            <div className="row mb-3">
              <img
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="img-fluid"
                src={img8}
                alt="avtor"
              />
            </div>
            <div className="row">
              <img
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="img-fluid"
                src={img9}
                alt="avtor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
