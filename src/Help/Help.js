import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navigation from "../Pages/Shared/Navigation/Navigation";

const Help = () => {
  const history = useHistory();
  const handelClick = () => {
    history.push("/");
  };
  return (
    <>
      <Navigation></Navigation>
      <div className="text-center">
        <h1>Hello Can I Help you</h1>
        <button className="btn btn-primary" onClick={handelClick}>
          Back to Home
        </button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Help;
