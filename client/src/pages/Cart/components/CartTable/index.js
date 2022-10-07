import React from "react";
import { cart } from "../../../../data/dummydata";
import CartTableTbody from "../CartTableTbody";

const CartTable = () => {
  return (
    <div className="col-sm-12 table-responsive mt-4">
      <table className="table cart-table">
        <thead>
          <tr className="table-head">
            <th scope="col">image</th>
            <th scope="col">product name</th>
            <th scope="col">price</th>
            <th scope="col">quantity</th>
            <th scope="col">action</th>
            <th scope="col">total</th>
          </tr>
        </thead>
        {cart.map((item) => (
          <CartTableTbody item={item} />
        ))}
      </table>
    </div>
  );
};

export default CartTable;
