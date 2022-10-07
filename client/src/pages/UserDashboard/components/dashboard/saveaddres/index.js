import React from "react";

const SaveAddres = () => {
  return (
    <div>
      <div className="tab-pane fade dashboard" id="save">
        <div className="box-head">
          <h3>Save Address</h3>
          <button
            className="btn btn-solid-default btn-sm fw-bold ms-auto"
            data-bs-toggle="modal"
            data-bs-target="#addAddress"
          >
            <i className="fas fa-plus"></i>
            Add New Address
          </button>
        </div>
        <div className="save-details-box">
          <div className="row g-3">
            <div className="col-xl-4 col-md-6">
              <div className="save-details">
                <div className="save-name">
                  <h5>Mark Jugal</h5>
                  <div className="save-position">
                    <h6>Home</h6>
                  </div>
                </div>

                <div className="save-address">
                  <p className="font-light">549 Sulphur Springs Road</p>
                  <p className="font-light">Downers Grove, IL</p>
                  <p className="font-light">60515</p>
                </div>

                <div className="mobile">
                  <p className="font-light mobile">Mobile No. +1-123-456-7890</p>
                </div>

                <div className="button">
                  <a href="javascript:void(0)" className="btn btn-sm">
                    Edit
                  </a>
                  <a href="javascript:void(0)" className="btn btn-sm">
                    Remove
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="save-details">
                <div className="save-name">
                  <h5>Method Zaki</h5>
                  <div className="save-position">
                    <h6>Office</h6>
                  </div>
                </div>

                <div className="save-address">
                  <p className="font-light">549 Sulphur Springs Road</p>
                  <p className="font-light">Downers Grove, IL</p>
                  <p className="font-light">60515</p>
                </div>

                <div className="mobile">
                  <p className="font-light mobile">Mobile No. +1-123-456-7890</p>
                </div>

                <div className="button">
                  <a href="javascript:void(0)" className="btn btn-sm">
                    Edit
                  </a>
                  <a href="javascript:void(0)" className="btn btn-sm">
                    Remove
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="save-details">
                <div className="save-name">
                  <h5>Mark Jugal</h5>
                  <div className="save-position">
                    <h6>Home</h6>
                  </div>
                </div>

                <div className="save-address">
                  <p className="font-light">549 Sulphur Springs Road</p>
                  <p className="font-light">Downers Grove, IL</p>
                  <p className="font-light">60515</p>
                </div>

                <div className="mobile">
                  <p className="font-light mobile">Mobile No. +1-123-456-7890</p>
                </div>

                <div className="button">
                  <a href="javascript:void(0)" className="btn btn-sm">
                    Edit
                  </a>
                  <a href="javascript:void(0)" className="btn btn-sm">
                    Remove
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* < />!-- Add Address Modal Start --> */}
      <div className="modal fade add-address-modal" id="addAddress">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="name" className="form-label font-light">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="full name"
                  />
                </div>
                <div className="mb-3">
                  <label for="address" className="form-label font-light">
                    Full Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="123, abcd, xyz"
                  />
                </div>
                <div>
                  <label for="number" className="form-label font-light">
                    Mobile
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="number"
                    placeholder="+1-123-456-7890"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer pt-0 text-end d-block">
              <button
                type="button"
                className="btn bg-secondary text-white rounded-1 modal-close-button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                className="btn btn-solid-default rounded-1"
                data-bs-dismiss="modal"
              >
                Save Address
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* < />!-- Add Address Modal End --> */}
    </div>
  );
};

export default SaveAddres;
