import React from "react";
import { Link } from "react-router-dom";

const ContinueShop = () => {
  return (
    <div className="col-12 mt-md-5 mt-4">
      <div className="row">
        <div className="col-sm-7 col-5 order-1">
          <div className="left-side-button text-end d-flex d-block justify-content-end">
            <Link
              to="/javascript:void(0)"
              className="text-decoration-underline theme-color d-block text-capitalize"
            >
              clear all items
            </Link>
          </div>
        </div>
        <div className="col-sm-5 col-7">
          <div className="left-side-button float-start">
            <Link
              to="/index.html"
              className="btn btn-solid-default btn fw-bold mb-0 ms-0"
            >
              <i className="fas fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueShop;
