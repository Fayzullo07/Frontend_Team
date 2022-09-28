import React from "react";

function Home(props) {
  return (
    <div className="theme-color2 light ltr">
      <div className="mobile-menu d-sm-none">
        <ul>
          <li>
            <a href="index.html">
              <i data-feather="home"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="toggle-category">
              <i data-feather="align-justify"></i>
              <span>Category</span>
            </a>
          </li>
          <li>
            <a href="cart.html">
              <i data-feather="shopping-bag"></i>
              <span>Cart</span>
            </a>
          </li>
          <li>
            <a href="wishlist.html">
              <i data-feather="heart"></i>
              <span>Wishlist</span>
            </a>
          </li>
          <li>
            <a href="user-dashboard.html">
              <i data-feather="user"></i>
              <span>Account</span>
            </a>
          </li>
        </ul>
      </div>
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
              <h3>404</h3>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="fas fa-home"></i>
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    404
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="page-not-found section-b-space">
        <div className="container">
          <div className="row gx-md-2 gx-0 gy-md-0 gy-3">
            <div className="col-md-8 m-auto">
              <div className="page-image">
                <img
                  src="assets/images/inner-page/404.png"
                  className="img-fluid blur-up lazyload"
                  alt=""
                />
              </div>
            </div>

            <div className="col-md-8 mx-auto mt-md-5 mt-3">
              <div className="page-container pass-forgot">
                <div>
                  <h2>page not found</h2>
                  <p>
                    The page you are looking for doesn't exist or an other error
                    occurred. Go back, or head over to choose a new direction.
                  </p>
                  <a href="index.html" className="btn btn-solid-default">
                    Back Home Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              value="#e22454"
              title="Choose your color"
            />
          </li>
        </ul>
      </div>
      <div className="tap-to-top">
        <a href="#home">
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
