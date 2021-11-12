import React from "react";

const ManageAllTable = ({ product, index }) => {
  const { firstName, email, name, date, status } = product;
  return (
    <tr className="text-center">
      <td>{index + 1}</td>
      <td>{firstName}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>{date}</td>
      <td>
        <span className="badge bg-secondary">{status || "approved"}</span>
      </td>
      <td>
        <i className="fas fa-trash text-danger fs-5"></i>
      </td>
    </tr>
  );
};

export default ManageAllTable;
