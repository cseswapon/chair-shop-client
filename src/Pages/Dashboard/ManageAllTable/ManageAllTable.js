import React, { useState } from "react";
import swal from "sweetalert";

const ManageAllTable = ({ product, index, allP, p, set }) => {
  const { firstName, _id, email, name, date, status } = product;
  const [newStatus, setNewStatus] = useState(status);
  const handelClick = (id) => {
    fetch(`https://lit-badlands-47254.herokuapp.com/order/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allP),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.matchedCount > 0) {
          swal("Shipped Successfully", "Please Check your product", "success");
          setNewStatus("shipped");
        }
      });
  };
  const handelDelete = (id) => {
    // console.log(id);
    const promise = window.confirm(
      "Are you sure you want to delete this order"
    );
    if (promise) {
      fetch(`https://lit-badlands-47254.herokuapp.com/order/${id}`, {
        method: "delete",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(allP),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            swal(
              "Deleted Successfully",
              "Please Check your product",
              "success"
            );
            const newDelete = p.filter((pro) => pro._id !== id);
            set(newDelete);
          }
        });
    }
  };
  return (
    <tr className="text-center">
      <td>{index + 1}</td>
      <td>{firstName}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>{date}</td>
      <td>
        <span className="badge bg-secondary">{newStatus || "pending"}</span>
      </td>
      <td>
        <i
          onClick={() => handelClick(_id)}
          style={{ cursor: "pointer" }}
          className="fas fa-hourglass-end text-success fs-5"
        ></i>
      </td>
      <td>
        <i
          onClick={() => handelDelete(_id)}
          style={{ cursor: "pointer" }}
          className="fas fa-trash-alt text-danger fs-5"
        ></i>
      </td>
    </tr>
  );
};

export default ManageAllTable;
