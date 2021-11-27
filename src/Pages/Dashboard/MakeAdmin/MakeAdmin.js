import React, { useState } from "react";
import swal from "sweetalert";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handelInput = (e) => {
    setEmail(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const user = { email: email };
    fetch("https://lit-badlands-47254.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal(
            "Admin Add Successfully !",
            "Welcome You are admin role!",
            "success"
          );
          e.target.reset();
        } else {
          swal(
            "Oops no user name but you are admin role play",
            "Welcome You are admin role!",
            "success"
          );
        }
      });
  };
  return (
    <>
      <div className="text-center my-3 text-danger">
        <h1>Make Admin</h1>
      </div>
      <form onSubmit={handelSubmit}>
        <div className="input-group mb-3 w-50 mx-auto">
          <input
            required
            onBlur={handelInput}
            type="email"
            name="email"
            className="form-control"
            placeholder="Make Admin Your Mail"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-danger"
            id="button-addon2"
            type="submit"
          >
            Admin
          </button>
        </div>
      </form>
    </>
  );
};

export default MakeAdmin;
