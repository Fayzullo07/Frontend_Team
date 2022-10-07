import React from "react";

const MyDashboard = () => {
  return (
    <div>
      <div className="tab-pane fade show active" id="dash">
        <div className="dashboard-right">
          <div className="dashboard">
            <div className="page-title title title1 title-effect">
              <h2>My Dashboard</h2>
            </div>
            <div className="welcome-msg">
              <h6 className="font-light">
                Hello, <span>MARK JECNO !</span>
              </h6>
              <p className="font-light">
                From your My Account Dashboard you have the ability to view a
                snapshot of your recent account activity and update your account
                information. Select a link below to view or edit information.
              </p>
            </div>

            <div className="order-box-contain my-4">
              <div className="row g-4">
                <div className="col-lg-4 col-sm-6">
                  <div className="order-box">
                    <div className="order-box-image">
                      <img
                        src="assets/images/svg/box.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </div>
                    <div className="order-box-contain">
                      <img
                        src="assets/images/svg/box1.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                      <div>
                        <h5 className="font-light">total order</h5>
                        <h3>3648</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="order-box">
                    <div className="order-box-image">
                      <img
                        src="assets/images/svg/sent.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </div>
                    <div className="order-box-contain">
                      <img
                        src="assets/images/svg/sent1.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                      <div>
                        <h5 className="font-light">pending orders</h5>
                        <h3>215</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="order-box">
                    <div className="order-box-image">
                      <img
                        src="assets/images/svg/wishlist.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </div>
                    <div className="order-box-contain">
                      <img
                        src="assets/images/svg/wishlist1.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                      <div>
                        <h5 className="font-light">wishlist</h5>
                        <h3>63874</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-account box-info">
              <div className="box-head">
                <h3>Account Information</h3>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="box">
                    <div className="box-title">
                      <h4>Contact Information</h4>
                      <a href="javascript:void(0)">Edit</a>
                    </div>
                    <div className="box-content">
                      <h6 className="font-light">MARK JECNO</h6>
                      <h6 className="font-light">MARk-JECNO@gmail.com</h6>
                      <a href="javascript:void(0)">Change Password</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="box">
                    <div className="box-title">
                      <h4>Newsletters</h4>
                      <a href="javascript:void(0)">Edit</a>
                    </div>
                    <div className="box-content">
                      <h6 className="font-light">
                        You are currently not subscribed to any newsletter.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="box address-box">
                  <div className="box-title">
                    <h4>Address Book</h4>
                    <a href="javascript:void(0)">Manage Addresses</a>
                  </div>
                  <div className="box-content">
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <h6 className="font-light">Default Billing Address</h6>
                        <h6 className="font-light">
                          You have not set a default billing address.
                        </h6>
                        <a href="javascript:void(0)">Edit Address</a>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="font-light">Default Shipping Address</h6>
                        <h6 className="font-light">
                          You have not set a default shipping address.
                        </h6>
                        <a href="javascript:void(0)">Edit Address</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
