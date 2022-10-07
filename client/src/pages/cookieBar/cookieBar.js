import React from 'react';

const cookieBar = () => {
    return ( <div>
<div className="cookie-bar-section">
  <img src="assets/images/cookie.png" alt="" />
  <div className="content">
    <h3>Cookies Consent</h3>
    <p className="font-light">
      This website use cookies to ensure you get the best experience on our
      website.
    </p>
    <div className="cookie-buttons">
      <button className="btn btn-solid-default" id="button">
        I understand
      </button>
      <a href="javascript:void(0)" className="btn default-light1">
        Learn more
      </a>
    </div>
  </div>
</div>

        </div>
    );
};



export default cookieBar;