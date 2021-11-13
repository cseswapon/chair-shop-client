import React from "react";
import swal from "sweetalert";

const ManageProductTable = ({ product, index, products, set }) => {
  const { _id, name, img, price } = product;
  const handelClick = (id) => {
    const promise = window.confirm("Are Your Sure Deleted");
    if (promise) {
      fetch(`https://lit-badlands-47254.herokuapp.com/products/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const count = products.filter((pw) => pw._id !== id);
            set(count);
            swal(
              "Delete Successfully",
              "cong's your data is remove",
              "success"
            );
          }
        });
    }
  };
  return (
    <tr className="text-center">
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>
        <img
          src={img}
          alt="avtor"
          style={{ width: 50, height: 50, borderRadius: "50%" }}
        />
      </td>
      <td>$ {price}</td>
      <td>
        <i
          onClick={() => handelClick(_id)}
          style={{ cursor: "pointer" }}
          className="fas fa-trash text-danger fs-5"
        ></i>
      </td>
    </tr>
  );
};

export default ManageProductTable;
