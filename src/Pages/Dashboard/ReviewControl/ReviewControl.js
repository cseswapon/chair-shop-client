import React from "react";
import useAuth from "../../../hooks/useAuth.";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./ReviewControl.css";
const ReviewControl = () => {
  const { register, handleSubmit, reset } = useForm();
  const { users } = useAuth();
  const onSubmit = (data) => {
    // console.log(data);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.insertedId) {
          swal(
            "Review Add Successfully",
            "Your review has been added",
            "success"
          );
          reset();
        }
      });
    reset();
  };
  return (
    <>
      <div className="text-center">
        <h1 className="text-primary fw-bold">This is a Review</h1>
      </div>
      <div className="review-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            readOnly
            defaultValue={users.displayName}
            {...register("name", { required: true, maxLength: 20 })}
          />
          <input
            readOnly
            defaultValue={users.email}
            type="email"
            {...register("email")}
          />
          <input
            type="number"
            min="1"
            max="5"
            placeholder="1-5 require"
            {...register("rating", { min: 1, max: 5 })}
          />
          <textarea
            placeholder="short description 50 charecter"
            {...register("description", { required: true, maxLength: 60 })}
          />
          <input
            style={{ display: "inline" }}
            className="btn btn-primary text-light p-0 text-center w-50"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default ReviewControl;
