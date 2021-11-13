import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ManageProductTable from "../ManageProductTable/ManageProductTable";
const MangeProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://lit-badlands-47254.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProduct(data);
      });
  }, []);
  if (loading) {
    return (
      <div className="text-center my-5 py-5">
        <div className="my-3">
          <Spinner animation="grow" variant="danger" />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="text-center my-5">
        <h1 className="text-danger">Mange Product All</h1>
      </div>
      <Table striped responsive>
        <thead className="text-center">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Img</th>
            <th>price</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {product.map((pd, index) => (
            <ManageProductTable
              key={pd._id}
              product={pd}
              index={index}
              products={product}
              set={setProduct}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default MangeProduct;
