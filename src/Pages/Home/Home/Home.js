import React, { useEffect } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Business from "../Business/Business";
import Product from "../Product/Product";
import Review from "../Review/Review";
import ShippingSupport from "../ShippingSupport/ShippingSupport";
import ScrollAnimation from "react-animate-on-scroll";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  useEffect(() => {
    document.title = "Chair Shop | Home";
  }, []);
  return (
    <div>
      <Navigation></Navigation>

      <Banner></Banner>
      <ScrollAnimation animateIn="fadeIn">
        <ShippingSupport></ShippingSupport>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Business></Business>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Product></Product>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Gallery></Gallery>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Review></Review>
      </ScrollAnimation>
      <Footer />
    </div>
  );
};

export default Home;
