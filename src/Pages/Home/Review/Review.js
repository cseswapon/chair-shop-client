import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Reviews from "../Reviews/Reviews";
import "./Review.css";
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <div className="my-5 review-bg custom-buttom">
      <h1 className="text-center text-warning py-lg-4 p-3 mb-3">
        Our Client Review
      </h1>
      <div className="review my-4">
        <Slider {...settings}>
          {review.map((rev) => (
            <Reviews key={rev._id} view={rev} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
