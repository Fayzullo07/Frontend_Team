import React from "react";

const MyProfile = () => {
  return (
    <div>
      <div className="tab-pane fade dashboard-profile dashboard" id="profile">
        <div className="box-head">
          <h3>Profile</h3>
          <a
            href="javascript:void(0)"
            data-bs-toggle="modal"
            data-bs-target="#resetEmail"
          >
            Edit
          </a>
        </div>
        <ul className="dash-profile">
          <li>
            <div className="left">
              <h6 className="font-light">Company Name</h6>
            </div>
            <div className="right">
              <h6>Voxo Fashion</h6>
            </div>
          </li>

          <li>
            <div className="left">
              <h6 className="font-light">Country / Region</h6>
            </div>
            <div className="right">
              <h6>Downers Grove, IL</h6>
            </div>
          </li>

          <li>
            <div className="left">
              <h6 className="font-light">Year Established</h6>
            </div>
            <div className="right">
              <h6>2018</h6>
            </div>
          </li>

          <li>
            <div className="left">
              <h6 className="font-light">Total Employees</h6>
            </div>
            <div className="right">
              <h6>101 - 200 People</h6>
            </div>
          </li>

          <li>
            <div className="left">
              <h6 className="font-light">Category</h6>
            </div>
            <div className="right">
              <h6>Clothing</h6>
            </div>
          </li>

          <li>
            <div className="left">
              <h6 className="font-light">Street Address</h6>
            </div>
            <div className="right">
              <h6>549 Sulphur Springs Road</h6>
            </div>
          </li>

          <li>
            <div className="left">
              <h6 className="font-light">City/State</h6>
            </div>
            <div className="right">
              <h6>Downers Grove, IL</h6>
            </div>
          </li>

          <li>
            <div className="left">
              <h6 className="font-light">Zip</h6>
            </div>
            <div className="right">
              <h6>60515</h6>
            </div>
          </li>
        </ul>

        <div className="box-head mt-lg-5 mt-3">
          <h3>Login Details</h3>
          <a
            href="javascript:void(0)"
            data-bs-toggle="modal"
            data-bs-target="#resetEmail"
          >
            Edit
          </a>
        </div>

        <ul className="dash-profile">
          <li>
            <div className="left">
              <h6 className="font-light">Email Address</h6>
            </div>
            <div className="right">
              <h6>mark.jugal@gmail.com</h6>
            </div>
            <a
              href="javascript:void(0)"
              data-bs-toggle="modal"
              data-bs-target="#resetEmail"
            >
              Edit
            </a>
          </li>

          <li>
            <div className="left">
              <h6 className="font-light">Phone No.</h6>
            </div>
            <div className="right">
              <h6>+1-202-555-0198</h6>
            </div>
            <a
              href="javascript:void(0)"
              data-bs-toggle="modal"
              data-bs-target="#resetEmail"
            >
              Edit
            </a>
          </li>

          <li className="mb-0">
            <div className="left">
              <h6 className="font-light">Password</h6>
            </div>
            <div className="right">
              <h6>●●●●●●</h6>
            </div>
            <a
              href="javascript:void(0)"
              data-bs-toggle="modal"
              data-bs-target="#resetEmail"
            >
              Edit
            </a>
          </li>
        </ul>
      </div>
      {/* < />!-- Reset Password Modal Start --> */}
      <div className="modal fade reset-email-modal" id="resetEmail">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Comfirm Email
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body pt-3">
              <form>
                <div className="mb-3">
                  <label for="email" className="form-label font-light">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label for="comfirmEmail" className="form-label font-light">
                    Comfirm Email address
                  </label>
                  <input type="email" className="form-control" id="comfirmEmail" />
                </div>
                <div>
                  <label
                    for="exampleInputPassword1"
                    className="form-label font-light"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer pt-0">
              <button
                className="btn bg-secondary rounded-1 modal-close-button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                className="btn btn-solid-default rounded-1"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* < />!-- Reset Password Modal End --> */}
    </div>
  );
};

export default MyProfile;
