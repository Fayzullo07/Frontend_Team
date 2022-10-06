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
      {/* theme Setting Start */}
      <div className="theme-setting">
        <ul>
          <li>
            <button id="darkButton" className="btn btn-sm dark-buttton">
              Dark
            </button>
          </li>
          <li>
            <button className="btn btn-sm rtl-button">RTL</button>
          </li>
          <li className="color-picker">
            <input
              type="color"
              className="form-control form-control-color"
              id="ColorPicker1"
              defaultValue="#e22454"
              title="Choose your color"
            />
          </li>
        </ul>
      </div>
      {/* theme Setting End */}
      <div className="bg-overlay" />
    </div>
  );
};

export default forgotPassword;
