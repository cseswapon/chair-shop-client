import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth.";
import Table from "react-bootstrap/Table";
import MyorderTable from "../MyorderTable/MyorderTable";
const Myorder = () => {
  const [order, setOrder] = useState([]);
  const { users } = useAuth();
  useEffect(() => {
    fetch("https://lit-badlands-47254.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  const myOrder = order.filter((od) => od.email === users.email);
  // console.log(myOrder);

  return (
    <>
      <div className="my-4">
        <h1 className="text-center text-danger fw-bold">My Order</h1>
      </div>
      <Table striped responsive>
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Status</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {myOrder.map((my, index) => (
            <MyorderTable
              key={my._id}
              order={my}
              index={index}
              orders={order}
              set={setOrder}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Myorder;
