import React from "react";
import swal from "sweetalert";
const MyorderTable = ({ order, index, set, orders }) => {
  const { _id, firstName, email, name, status } = order;
  const handelClick = (id) => {
    // console.log(id);
    const promise = window.confirm("Are your sure order cancel");
    if (promise) {
      fetch(`http://localhost:5000/order/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          const deletes = orders.filter((od) => od._id !== id);
          set(deletes);
          swal("Delete Successfully", "cong's your data is remove", "success");
        });
    }
  };
  return (
    <tr className="text-center">
      <td>{index + 1}</td>
      <td>{firstName}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>
        <span className="badge bg-primary p-1"> {status || "pending"}</span>
      </td>
      <td>
        <i
          onClick={() => handelClick(_id)}
          style={{ cursor: "pointer" }}
          className="fas fa-ban text-danger fs-5"
        ></i>
      </td>
    </tr>
  );
};

export default MyorderTable;
