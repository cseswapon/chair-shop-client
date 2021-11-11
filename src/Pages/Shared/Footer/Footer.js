import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer-bg">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-5">
              <h3 style={{ color: "#ffffff" }}>Join our newsletter</h3>
              <p style={{ color: "#ffffff" }}>
                We delivery only the best news and updates for you and we never
                spam. Try it!
              </p>
            </div>
            <div className="col-md-7 align-items-center col-md-7 d-flex justify-content-center">
              <input
                className="input-filed"
                type="email"
                name="email"
                id="email"
                placeholder="please enter your email"
              />
              <button className="btn btn-primary ms-2">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="down-footer">
        <div className="child-footer text-center">
          <div className="social-media-icon">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google-plus-g"></i>
          </div>
          <div className="payment-system">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-paypal"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-jcb"></i>
          </div>
          <div className="copyright">
            <p>Copyright &copy; 2021 Chair BD. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
