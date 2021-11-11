import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth.";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
const Login = () => {
  const [users, setUsers] = useState({});
  const { googleSingin, logIn, users: user, error } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handelInputFiled = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newUser = { ...users };
    newUser[filed] = value;
    setUsers(newUser);
  };
  const handelFrom = (e) => {
    e.preventDefault();
    logIn(users.email, users.password, location, history);
    e.target.reset();
  };
  console.log(error);
  return (
    <>
      <Navigation></Navigation>
      <div className="container w-50 my-5">
        <h1 className="fw-bold" style={{ color: "#e6490b" }}>
          Please Login
        </h1>
        <form onSubmit={handelFrom}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <i className="fas fa-envelope" style={{ color: "#e6490b" }}></i>{" "}
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              required
              onBlur={handelInputFiled}
              name="email"
              aria-describedby="emailHelp"
              placeholder="enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              <i className="fas fa-lock" style={{ color: "#e6490b" }}></i>{" "}
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
              onBlur={handelInputFiled}
              name="password"
              placeholder="enter your password"
            />
          </div>
          <button type="submit" className="btn btn-outline-danger">
            Login
          </button>
        </form>

        <h4 className="text-center text-danger">----- or -----</h4>
        <div className="text-center">
          <button
            onClick={() => googleSingin(location, history)}
            className="btn btn-danger m-2"
          >
            <i className="fab fa-google-plus text-light"></i>
          </button>
          <p>
            Create Account & Singup <Link to="/singup">Singup</Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
