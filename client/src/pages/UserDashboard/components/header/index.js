import React from "react";

const header = () => {
  return (
    <div className="signup-page theme-color2">
      <section className="breadcrumb-section section-b-space">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>User Dashboard</h3>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="fas fa-home"></i>
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    User Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default header;
