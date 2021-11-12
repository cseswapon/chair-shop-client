import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ManageAllTable from "../ManageAllTable/ManageAllTable";
const ManageAll = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <div className="text-center mb-4">
        <h1 className="mt-3 fw-bold text-primary">Manage All Order</h1>
      </div>
      <Table striped responsive>
        <thead className="text-center">
          <tr>
            <th>Id</th>
            <th>User</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {product.map((pd, index) => (
            <ManageAllTable key={pd._id} product={pd} index={index} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ManageAll;
