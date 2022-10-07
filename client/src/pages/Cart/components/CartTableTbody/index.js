import React from "react";
import { Link } from "react-router-dom";

const CartTableTbody = ({ item }) => {
  return (
    <tbody key={item.id}>
      <tr>
        <td>
          <Link to="/product-left-sidebar.html">
            <img
              src={item.image}
              className=" blur-up lazyload"
              alt={item.productName}
            />
          </Link>
        </td>
        <td>
          <Link to="/product-left-sidebar.html">{item.productName}</Link>
          <div className="mobile-cart-content row">
            <div className="col">
              <div className="qty-box">
                <div className="input-group">
                  <input
                    type="text"
                    name="quantity"
                    className="form-control input-number"
                    value={item.quantity}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <h2>${item.price}</h2>
            </div>
            <div className="col">
              <h2 className="td-color">
                <Link to="/javascript:void(0)">
                  <i className="fas fa-times"></i>
                </Link>
              </h2>
            </div>
          </div>
        </td>
        <td>
          <h2>${item.price}</h2>
        </td>
        <td>
          <div className="qty-box">
            <div className="input-group">
              <input
                type="number"
                name="quantity"
                className="form-control input-number"
                value={item.quantity}
              />
            </div>
          </div>
        </td>
        <td>
          <Link to="/javascript:void(0)">
            <i className="fas fa-times"></i>
          </Link>
        </td>
        <td>
          <h2 className="td-color">${item.total}</h2>
        </td>
      </tr>
    </tbody>
  );
};

export default CartTableTbody;
