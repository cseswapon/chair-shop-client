import React from "react";

const MyorderTable = ({ order, index }) => {
  const { firstName, email, name, status } = order;
  return (
    <tr className="text-center">
      <td>{index + 1}</td>
      <td>{firstName}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>{status || "pending"}</td>
      <td>delete</td>
    </tr>
  );
};

export default MyorderTable;
