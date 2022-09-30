import React from 'react';


const login = () => {
    return (
        <div>
             <div className="login-section">
      <div className="materialContainer">
        <div className="box">
          <div className="login-title">
            <h2>Login</h2>
          </div>
          <div className="input">
            <label htmlFor="name">Username</label>
            <input type="text" name="name" id="name" required="" />
            <span className="spin" />
            <div className="valid-feedback">Please fill the name</div>
          </div>
          <div className="input">
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" id="pass" />
            <span className="spin" />
          </div>
          <a href="forgot.html" className="pass-forgot">
            Forgot your password?
          </a>
          <div className="button login">
            <button onclick="location.href = 'index.html';" type="submit">
              <span>Log In</span>
              <i className="fa fa-check" />
            </button>
          </div>
          <p className="sign-category">
            <span>Or sign in with</span>
          </p>
          <div className="row gx-md-3 gy-3">
            <div className="col-md-6">
              <a href="www.facebook.com">
                <div className="social-media fb-media">
                  <img
                    src="assets/images/inner-page/facebook.png"
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                  <h6>Facebook</h6>
                </div>
              </a>
            </div>
            <div className="col-md-6">
              <a href="www.gmail.com">
                <div className="social-media google-media">
                  <img
                    src="assets/images/inner-page/google.png"
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                  <h6>Google</h6>
                </div>
              </a>
            </div>
          </div>
          <p>
            Not a member?{" "}
            <a href="sign-up.html" className="theme-color">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
    {/* Log In Section End */}
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



export default login;