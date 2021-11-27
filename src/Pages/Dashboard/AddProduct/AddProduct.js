import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./AddProduct.css";
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data)
    fetch("https://lit-badlands-47254.herokuapp.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          swal(
            "Product Add Successfully",
            "Your product has been added",
            "success"
          );
          reset();
        }
      });
  };
  return (
    <>
      <div className="my-4">
        <h1 className="text-center text-danger">Add Product</h1>
      </div>
      <div className="from-input-add text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
          />
          <textarea {...register("details")} placeholder="Details" />
          <input {...register("img")} placeholder="Image" />
          <input type="number" {...register("price")} placeholder="Price" />
          <input
            className="btn btn-danger text-light"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </>
  );
};

export default AddProduct;
