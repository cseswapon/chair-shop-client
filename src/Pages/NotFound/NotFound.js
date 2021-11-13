import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import notfound from "../../img/404.png";
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
      <div className="text-center">
        <img className="img-fluid w-25" src={notfound} alt="avtor" />
      </div>
      <div className="text-center">
        <button onClick={handdelBack} className="btn btn-warning">
          <i className="fas fa-long-arrow-alt-left me-2"></i> Back to Home
        </button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default NotFound;
