import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
const NotFound = () => {
  useEffect(() => {
    document.title = "Chair Shop | 404";
  }, []);
  const history = useHistory();
  const handdelBack = () => {
    history.push("/");
  };
  return (
    <>
      <Navigation></Navigation>
      <h1>Page not found</h1>
      <button onClick={handdelBack} className="btn btn-primary">
        Back to Home
      </button>
      <Footer></Footer>
    </>
  );
};

export default NotFound;
