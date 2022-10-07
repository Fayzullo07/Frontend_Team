import React from "react";
import { Link } from "react-router-dom";
import { wishlist } from "../../../../data/dummydata";
import WishListTableTbody from "../WishListTableTbody";

const WishListTable = () => {
  return (
    <table className="table cart-table wishlist-table">
      <thead>
        <tr className="table-head">
          <th scope="col">image</th>
          <th scope="col">product name</th>
          <th scope="col">price</th>
          <th scope="col">availability</th>
          <th scope="col">action</th>
        </tr>
      </thead>
      {wishlist.map((item) => (
        <WishListTableTbody item={item} />
      ))}
    </table>
  );
};

export default WishListTable;
