import React from "react";
import { Link } from "react-router-dom";

const WishListTableTbody = ({ item }) => {
  return (
    <tbody key={item.id}>
      <tr>
        <td>
          <Link to="/product-left-sidebar.html">
            <img
              src={item.image}
              className="blur-up lazyload"
              alt={item.productName}
            />
          </Link>
        </td>
        <td>
          <Link to="/product-left-sidebar.html" className="font-light">
            {item.productName}
          </Link>
          <div className="mobile-cart-content row">
            <div className="col">
              <p>{item.isSelled ? "In Stock" : "Out Of Stock"}</p>
            </div>
            <div className="col">
              <p className="fw-bold">${item.price}</p>
            </div>
            <div className="col">
              <h2 className="td-color">
                <Link to="/javascript:void(0)" className="icon">
                  <i className="fas fa-times"></i>
                </Link>
              </h2>
              <h2 className="td-color">
                <Link to="/cart" className="icon">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </h2>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-bold">${item.price}</p>
        </td>
        <td>
          <p>{item.isSelled ? "In Stock" : "Out Of Stock"}</p>
        </td>
        <td>
          <Link to="/javascript:void(0)" className="icon">
            <i className="fas fa-times"></i>
          </Link>
          <Link to="/cart" className="icon">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default WishListTableTbody;
