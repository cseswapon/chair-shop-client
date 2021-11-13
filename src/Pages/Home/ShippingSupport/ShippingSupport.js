import React from "react";

const ShippingSupport = () => {
  const bg = {
    color: "#e96430",
  };
  return (
    <div className="container py-3 my-5">
      <div className="row gap-5">
        <div className="col bg-light p-3 text-center">
          <i style={bg} className="fas fa-truck fs-4"></i>
          <h4 style={bg} className="my-2">
            Free Delivery
          </h4>
          <p style={bg}>Free Shipping</p>
        </div>
        <div className="col p-3 bg-light text-center">
          <i style={bg} className="fas fa-undo-alt fs-4"></i>
          <h4 style={bg} className="my-2">
            Return Policy
          </h4>
          <p style={bg}>Free Shipping</p>
        </div>
        <div className="col bg-light p-3 text-center">
          <i style={bg} className="fas fa-headset fs-4"></i>
          <h4 style={bg} className="my-2">
            24/7 Support
          </h4>
          <p style={bg}>Free Shipping</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingSupport;
