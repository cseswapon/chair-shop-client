import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import { useForm } from "react-hook-form";

import "./placeOrder.css";
import useAuth from "../../hooks/useAuth.";
import swal from "sweetalert";
const PlaceOrder = () => {
  useEffect(() => {
    document.title = "Chair Shop | Place Order";
  }, []);
  const { id } = useParams();
  const [single, setSingle] = useState({});
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit } = useForm();
  const { users, isLoading } = useAuth();

  const onSubmit = (data) => {
    // return console.log(data);
    fetch(`https://lit-badlands-47254.herokuapp.com/order`, {
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
            "Data added Successfully!",
            "You clicked the button!",
            "success"
          );
        }
      });
  };
  useEffect(() => {
    fetch(`https://lit-badlands-47254.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingle(data);
        setLoading(false);
      });
  }, [id]);
  if (isLoading) {
    return (
      <div className="text-center my-5 py-5">
        <div className="my-3">
          <Spinner animation="grow" variant="success" />
        </div>
      </div>
    );
  }
  // const date = new Date();
  return (
    <div>
      <Navigation></Navigation>
      <div className="text-center mb-5 mt-2">
        <small className="text-danger fw-bold info-id">
          Product Id : <span className="text-primary">{id}</span>{" "}
        </small>
      </div>
      <div className="container my-5">
        <div className="text-center my-5">
          <h1
            className="text-danger info-text"
            style={{
              borderBottom: "2px solid #e96430",
              display: "inline",
              margin: 10,
            }}
          >
            Our Product Information
          </h1>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 text-center">
            <img
              className="img-fluid"
              style={{ width: "90%" }}
              src={single?.img}
              alt="avtor"
            />
          </div>
          <div className="col-md-6 col-sm-12 ">
            <h2 className="single-name">{single?.name}</h2>
            <hr />
            <p className="single-pg">{single?.details}</p>
            <hr />
            <p className="single-Price">$ {single?.price}</p>
          </div>
        </div>
      </div>
      <div className="order-bg my-5">
        <div className="bg-ts">
          <div className="text-center mb-5">
            <h1
              className="text-danger info-text"
              style={{
                borderBottom: "2px solid rgb(13 110 253)",
                display: "inline",
                margin: 10,
              }}
            >
              Place Order
            </h1>
          </div>
          <div className="from-input text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={users.displayName}
                {...register("firstName", { required: true, maxLength: 20 })}
              />
              <input
                defaultValue={users.email}
                type="email"
                {...register("email")}
              />
              {single.name && (
                <input
                  defaultValue={single.name}
                  type="text"
                  {...register("name")}
                />
              )}
              {single.price && (
                <input
                  defaultValue={single.price}
                  // placeholder={`"${single.price}" Please Type`}
                  type="number"
                  {...register("price")}
                />
              )}
              <input required type="date" {...register("date")} />
              <select {...register("status")}>
                <option value="pending">Pending</option>
              </select>
              <input
                style={{
                  background: "rgb(237 75 12 / 73%)",
                  fontWeight: "bold",
                }}
                type="submit"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PlaceOrder;
