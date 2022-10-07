import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MyDashboard from "./mydashboard";
import MyOrder from "./myorder";
import MyWishlist from "./mywishlist";

const Dashboard = () => {
  return (
    <div>
      <section className="section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ul
                className="nav nav-tabs custome-nav-tabs flex-column category-option"
                id="myTab"
              >
                <Link to="/" className="nav-item mb-2">
                  <button
                    className="nav-link font-light active"
                    id="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#dash"
                    type="button"
                  >
                    <i className="fas fa-angle-right"></i>Dashboard
                  </button>
                </Link>

                <Link to="orders" className="nav-item mb-2">
                  <button
                    className="nav-link font-light"
                    id="1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#order"
                    type="button"
                  >
                    <i className="fas fa-angle-right"></i>Orders
                  </button>
                </Link>

                <Link to="wishlist" className="nav-item mb-2">
                  <button
                    className="nav-link font-light"
                    id="2-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#wishlist"
                    type="button"
                  >
                    <i className="fas fa-angle-right"></i>Wishlist
                  </button>
                </Link>

                <Link to="savedadress" className="nav-item mb-2">
                  <button
                    className="nav-link font-light"
                    id="3-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#save"
                    type="button"
                  >
                    <i className="fas fa-angle-right"></i>Saved Address
                  </button>
                </Link>

                <Link to="payment" className="nav-item mb-2">
                  <button
                    className="nav-link font-light"
                    id="4-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#pay"
                    type="button"
                  >
                    <i className="fas fa-angle-right"></i>Payment
                  </button>
                </Link>

                <Link to="profile" className="nav-item mb-2">
                  <button
                    className="nav-link font-light"
                    id="5-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                  >
                    <i className="fas fa-angle-right"></i>Profile
                  </button>
                </Link>

                <Link to="security" className="nav-item">
                  <button
                    className="nav-link font-light"
                    id="6-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#security"
                    type="button"
                  >
                    <i className="fas fa-angle-right"></i>Security
                  </button>
                </Link>
              </ul>
            </div>

            <div className="col-lg-9">
              <div className="filter-button dash-filter dashboard">
                <button className="btn btn-solid-default btn-sm fw-bold filter-btn">
                  Show Menu
                </button>
              </div>

              <div className="tab-content" id="myTabContent">

                <Routes>
                  <Route path="/" element={<MyDashboard />} />
                  <Route path="orders" element={<MyOrder />} />
                  <Route path="wishlist" element={<MyWishlist />} />

                </Routes>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* < />!-- user dashboard section end --> */}
    </div>
  );
};

export default Dashboard;
