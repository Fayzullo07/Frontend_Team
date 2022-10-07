import React from "react";

const CardPayment = () => {
  return (
    <div>
      <div className="tab-pane fade dashboard" id="pay">
        <div className="box-head">
          <h3>Card & Payment</h3>
          <button
            className="btn btn-solid-default btn-sm fw-bold ms-auto"
            data-bs-toggle="modal"
            data-bs-target="#addPayment"
          >
            <i className="fas fa-plus"></i>
            Add New Card
          </button>
        </div>

        <div className="card-details-section">
          <div className="row g-4">
            <div className="col-lg-4 col-sm-6">
              <div className="payment-card-detail">
                <div className="card-details">
                  <div className="card-number">
                    <h4>XXXX - XXXX - XXXX - 2548</h4>
                  </div>

                  <div className="valid-detail">
                    <div className="title">
                      <span>valid</span>
                      <span>thru</span>
                    </div>
                    <div className="date">
                      <h3>12/23</h3>
                    </div>
                    <div className="primary">
                      <span className="badge bg-pill badge-light">primary</span>
                    </div>
                  </div>

                  <div className="name-detail">
                    <div className="name">
                      <h5>mark jecno</h5>
                    </div>
                    <div className="card-img">
                      <img
                        src="assets/images/payment-icon/1.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="edit-card">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#addPayment"
                    href="javascript:void(0)"
                  >
                    <i className="far fa-edit"></i> edit
                  </a>
                  <a href="javascript:void(0)">
                    <i className="far fa-minus-square"></i>
                    delete
                  </a>
                </div>
              </div>

              <div className="edit-card-mobile">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#addPayment"
                  href="javascript:void(0)"
                >
                  <i className="far fa-edit"></i> edit
                </a>
                <a href="javascript:void(0)">
                  <i className="far fa-minus-square"></i>
                  delete
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="payment-card-detail">
                <div className="card-details card-visa">
                  <div className="card-number">
                    <h4>XXXX - XXXX - XXXX - 2548</h4>
                  </div>

                  <div className="valid-detail">
                    <div className="title">
                      <span>valid</span>
                      <span>thru</span>
                    </div>
                    <div className="date">
                      <h3>12/23</h3>
                    </div>
                    <div className="primary">
                      <span className="badge bg-pill badge-light">primary</span>
                    </div>
                  </div>

                  <div className="name-detail">
                    <div className="name">
                      <h5>mark jecno</h5>
                    </div>
                    <div className="card-img">
                      <img
                        src="assets/images/payment-icon/2.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="edit-card">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#addPayment"
                    href="javascript:void(0)"
                  >
                    <i className="far fa-edit"></i> edit
                  </a>
                  <a href="javascript:void(0)">
                    <i className="far fa-minus-square"></i>
                    delete
                  </a>
                </div>
              </div>

              <div className="edit-card-mobile">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#addPayment"
                  href="javascript:void(0)"
                >
                  <i className="far fa-edit"></i> edit
                </a>
                <a href="javascript:void(0)">
                  <i className="far fa-minus-square"></i>
                  delete
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="payment-card-detail">
                <div className="card-details dabit-card">
                  <div className="card-number">
                    <h4>XXXX - XXXX - XXXX - 2548</h4>
                  </div>

                  <div className="valid-detail">
                    <div className="title">
                      <span>valid</span>
                      <span>thru</span>
                    </div>
                    <div className="date">
                      <h3>12/23</h3>
                    </div>
                    <div className="primary">
                      <span className="badge bg-pill badge-light">primary</span>
                    </div>
                  </div>

                  <div className="name-detail">
                    <div className="name">
                      <h5>mark jecno</h5>
                    </div>
                    <div className="card-img">
                      <img
                        src="assets/images/payment-icon/3.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="edit-card">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#addPayment"
                    href="javascript:void(0)"
                  >
                    <i className="far fa-edit"></i> edit
                  </a>
                  <a href="javascript:void(0)">
                    <i className="far fa-minus-square"></i>
                    delete
                  </a>
                </div>
              </div>

              <div className="edit-card-mobile">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#addPayment"
                  href="javascript:void(0)"
                >
                  <i className="far fa-edit"></i> edit
                </a>
                <a href="javascript:void(0)">
                  <i className="far fa-minus-square"></i>
                  delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* < />!-- Add Payment Modal Start --> */}
      <div className="modal fade payment-modal" id="addPayment">
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
                <label for="name" className="form-label">
                  Card Type
                </label>
                <select className="form-select form-select-lg mb-4">
                  <option selected="" disabled="">
                    Choose Your Card
                  </option>
                  <option value="1">Creadit Card</option>
                  <option value="2">Debit Card</option>
                  <option value="3">Debit Card and ATM</option>
                </select>

                <div className="mb-4">
                  <label for="card" className="form-label">
                    Name On Card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="card"
                    placeholder="Name card"
                  />
                </div>
                <div className="mb-4">
                  <label for="cAddress" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="cAddress"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                  />
                </div>
                <div className="row">
                  <div className="col-md-8 mb-4">
                    <label for="expiry" className="form-label">
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      className="form-control font-light"
                      id="expiry"
                    />
                  </div>
                  <div className="col-md-4 mb-4">
                    <label for="cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="cvv"
                      placeholder="XX9"
                    />
                  </div>
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
                Save Card Details
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* < />!-- Add Payment Modal End --> */}
    </div>
  );
};

export default CardPayment;
