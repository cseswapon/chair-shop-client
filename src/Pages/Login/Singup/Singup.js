import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const Singup = () => {
  const [loginUser, setLoginUser] = useState({});
  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newUser = { ...loginUser };
    newUser[name] = value;
    setLoginUser(newUser);
  };
  const handelFrom = (e) => {
    e.preventDefault();
    console.log(loginUser);
    if (loginUser.password1 !== loginUser.password2) {
      swal(
        "Password Not Matched !",
        "Please check your input filed and re-type!"
      );
      return;
    } else {
      swal("Register Successfully!", "Welcome to our website!", "success");
      e.target.reset();
    }
  };
  return (
    <div>
      <>
        <Navigation></Navigation>
        <div className="container w-50 my-5">
          <h1 className="fw-bold" style={{ color: "#e6490b" }}>
            Please Sing Up
          </h1>
          <form onSubmit={handelFrom}>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                <i className="fas fa-user" style={{ color: "#e6490b" }}></i>{" "}
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                required
                name="name"
                onBlur={handelInput}
                aria-describedby="emailHelp"
                placeholder="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <i className="fas fa-envelope" style={{ color: "#e6490b" }}></i>{" "}
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                required
                onBlur={handelInput}
                aria-describedby="emailHelp"
                placeholder="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <i className="fas fa-lock" style={{ color: "#e6490b" }}></i>{" "}
                Password
              </label>
              <input
                type="password"
                name="password1"
                className="form-control"
                id="exampleInputPassword1"
                required
                onBlur={handelInput}
                placeholder="password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <i className="fas fa-lock" style={{ color: "#e6490b" }}></i>{" "}
                Re-type Password
              </label>
              <input
                name="password2"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
                onBlur={handelInput}
                placeholder="Re-type password"
              />
            </div>
            <button type="submit" className="btn btn-outline-danger">
              Sing Up
            </button>
          </form>
          <div className="text-center">
            <p>
              Already Account <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
        <Footer></Footer>
      </>
    </div>
  );
};

export default Singup;
