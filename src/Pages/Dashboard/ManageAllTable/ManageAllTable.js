import React, { useState } from "react";
import swal from "sweetalert";

const ManageAllTable = ({ product, index, allP }) => {
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
          className="fas fa-hourglass-end text-primary fs-5"
        ></i>
      </td>
    </tr>
  );
};

export default ManageAllTable;
