import React from "react";

const DeleteYourAccount = () => {
  return (
    <div>
      <div className="tab-pane fade dashboard-security dashboard" id="security">
        <div className="box-head">
          <h3>Delete Your Account</h3>
        </div>
        <div className="security-details">
          <h5 className="font-light mt-3">
            Hi <span> Mark Enderess,</span>
          </h5>
          <p className="font-light mt-1">
            We Are Sorry To Here You Would Like To Delete Your Account.
          </p>
        </div>

        <div className="security-details-1 mb-0">
          <div className="page-title">
            <h4 className="fw-bold">Note</h4>
          </div>
          <p className="font-light">
            Deleting your account will permanently remove your profile, personal
            settings, and all other associated information. Once your account is
            deleted, You will be logged out and will be unable to log back in.
          </p>

          <p className="font-light mb-4">
            If you understand and agree to the above statement, and would still
            like to delete your account, than click below
          </p>

          <button
            className="btn btn-solid-default btn-sm fw-bold rounded"
            data-bs-toggle="modal"
            data-bs-target="#deleteModal"
          >
            Delete Your Account
          </button>
        </div>
      </div>
      
      {/* < />!-- Comfirm Delete Modal Start --> */}
      <div className="modal delete-account-modal fade" id="deleteModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body pb-3 text-center mt-4">
              <h4>Are you sure you want to delete your account?</h4>
            </div>
            <div className="modal-footer d-block text-center mb-4">
              <button
                className="btn btn-solid-default btn-sm fw-bold rounded"
                data-bs-target="#doneModal"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Yes Delete account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal delete-account-modal fade" id="doneModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body pb-3 text-center mt-4">
              <h4>Done!!! Delete Your Account</h4>
            </div>
            <div className="modal-footer d-block text-center mb-4">
              <button
                className="btn btn-solid-default btn-sm fw-bold rounded"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* < />!-- Comfirm Delete Modal End --> */}
    </div>
  );
};

export default DeleteYourAccount;
