import React from "react";

const MyorderTable = ({ order, index }) => {
  const { firstName, email, name, status } = order;
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
          style={{ cursor: "pointer" }}
          className="fas fa-ban text-danger fs-5"
        ></i>
      </td>
    </tr>
  );
};

export default MyorderTable;
