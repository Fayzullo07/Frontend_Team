import React from "react";

const forgotPassword = () => {
  return (
    <div>
      <div className="login-section">
        <div className="materialContainer">
          <div className="box">
            <div className="login-title">
              <h2>Forgot Password</h2>
            </div>
            <div className="input">
              <label htmlFor="emailname">Enter Email Address</label>
              <input
                type="text"
                name="name"
                className="is-invalid"
                id="emailname"
              />
              <span className="spin" />
            </div>
            <div className="button login button-1">
              <button onclick="location.href = 'index.html';">
                <span>Send</span>
                <i className="fa fa-check" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Sign Up Section End */}
    
      
    </div>
  );
};

export default forgotPassword;
