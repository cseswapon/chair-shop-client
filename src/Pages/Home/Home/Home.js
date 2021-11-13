import React, { useEffect } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Business from "../Business/Business";
import Product from "../Product/Product";
import Review from "../Review/Review";
import ShippingSupport from "../ShippingSupport/ShippingSupport";

const Home = () => {
  useEffect(() => {
    document.title = "Chair Shop | Home";
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <ShippingSupport></ShippingSupport>
      <Business></Business>
      <Product></Product>
      <Review></Review>
      <Footer />
    </div>
  );
};

export default Home;
