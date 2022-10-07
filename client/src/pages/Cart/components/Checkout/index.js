import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="cart-checkout-section">
      <div className="row g-4">
        <div className="col-lg-4 col-sm-6">
          <div className="promo-section">
            <form className="row g-3">
              <div className="col-7">
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  placeholder="Coupon Code"
                />
              </div>
              <div className="col-5">
                <button className="btn btn-solid-default rounded btn">
                  Apply Coupon
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 ">
          <div className="checkout-button">
            <Link to="/checkout.html" className="btn btn-solid-default btn fw-bold">
              Check Out <i className="fas fa-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="cart-box">
            <div className="cart-box-details">
              <div className="total-details">
                <div className="top-details">
                  <h3>Cart Totals</h3>
                  <h6>
                    Total MRP <span>$250.00</span>
                  </h6>
                  <h6>
                    Coupon Discount <span>-$25.00</span>
                  </h6>
                  <h6>
                    Convenience Fee{" "}
                    <span>
                      <del>$25.00</del>
                    </span>
                  </h6>
                </div>
                <div className="bottom-details">
                  <Link to="/checkout.html">Process Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
