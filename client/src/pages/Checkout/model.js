import React from "react";
import { Link } from "react-router-dom";
import DataInputs from "./components/DataInputs";

const Checkout = () => {
  return (
    <>
      {/* Breadcrumb section start */}
      <section className="breadcrumb-section section-b-space">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Checkout</h3>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index.html">
                      <i className="fas fa-home"></i>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Checkout
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb section end */}

      {/* Cart Section Start */}
      <DataInputs/>
      {/* Cart Section End */}

      {/* Subscribe Section Start */}
      <section className="subscribe-section section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="subscribe-details">
                <h2 className="mb-3">Subscribe Our News</h2>
                <h6 className="font-light">
                  Subscribe and receive our newsletters to follow the news about
                  our fresh and fantastic Products.
                </h6>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
              <div className="subsribe-input">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control subscribe-input"
                    placeholder="Your Email Address"
                  />
                  <button className="btn btn-solid-default" type="button">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Subscribe Section End */}
    </>
  );
};

export default Checkout;
