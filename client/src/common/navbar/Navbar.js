// import Css
import "./navbar.css";

import * as Icon from "react-feather";

// import Images
import logo from "../../assets/images/navbar-img/logo.png";
import img4 from "../../assets/images/navbar-img/4.jpg";
import img1 from "../../assets/images/navbar-img/1.jpg";
import fashion from "../../assets/images/navbar-img/fashion.jpg";
import flower from "../../assets/images/navbar-img/flower.jpg";
import fur from "../../assets/images/navbar-img/furniture.jpg";
import elec from "../../assets/images/navbar-img/electonic.jpg";
import shoes from "../../assets/images/navbar-img/shoes.jpg";
import vege from "../../assets/images/navbar-img/vagetables.jpg";
import pwa from "../../assets/images/navbar-img/pwa.png";
import img2 from "../../assets/images/navbar-img/2.jpg";
import img7 from "../../assets/images/navbar-img/7.jpg";
import img3 from "../../assets/images/navbar-img/3.jpg";
import img5 from "../../assets/images/navbar-img/5.jpg";

import favicon from "../../assets/images/navbar-img/favicon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header-style-2" id="home">
      <div className="main-header navbar-searchbar">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-menu">
                <div className="menu-left">
                  <div className="brand-logo">
                    <Link to="/">
                      <svg className="svg-icon">
                        <Icon.Star />
                      </svg>
                      <img
                        src={logo}
                        className="img-fluid blur-up lazyload"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="category-menu">
                    <div className="category-dropdown">
                      <div className="close-btn d-xl-none">
                        Category List
                        <span className="back-category">
                          <i className="fa fa-angle-left"></i>
                        </span>
                      </div>
                      <ul>
                        <li className="submenu">
                          <a href="javascript:void(0)">watches</a>
                          <ul className="category-mega-menu">
                            <li>
                              <div className="row">
                                <div className="col-xl-3">
                                  <div className="category-childmenu">
                                    <div className="title-category">
                                      <h6>Watch Brands</h6>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Coros
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Titan
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Citizen
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Casio
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Movado
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Tissot
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-xl-3">
                                  <div className="category-childmenu">
                                    <div className="title-category">
                                      <h6>Watch Display</h6>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Analog
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Digital
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Hybrid
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Tactile
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Touchscreen
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-xl-3">
                                  <div className="category-childmenu">
                                    <div className="title-category">
                                      <h6>Watch Style</h6>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Casual
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Dress
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Fashion
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Luxury
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-xl-3">
                                  <div className="category-banner">
                                    <img
                                      src={img4}
                                      className="img-fluid blur-up lazyload"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="shop-left-sidebar.html">footwear</a>
                        </li>

                        <li className="submenu">
                          <a href="javascript:void(0)">clothing</a>
                          <ul className="category-mega-menu">
                            <li>
                              <div className="row">
                                <div className="col-xl-3">
                                  <div className="category-childmenu">
                                    <div className="title-category">
                                      <h6>Women's fashion</h6>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Dress
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Skirts
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Western wear
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Etahnic wear
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Sports wear
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-xl-3">
                                  <div className="category-childmenu">
                                    <div className="title-category">
                                      <h6>Men's fashion</h6>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Sports wear
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Etahnic wear
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          Western wear
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-xl-3">
                                  <div className="category-childmenu">
                                    <div className="title-category">
                                      <h6>Accesories</h6>
                                    </div>
                                    <ul>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          earrings
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          fashion jewellery
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          ties
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          caps and hats
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          cufflinks
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          precious jewellery
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-left-sidebar.html">
                                          necklaces
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-xl-3">
                                  <div className="category-banner">
                                    <img
                                      src={img1}
                                      className="img-fluid blur-up lazyload"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="shop-left-sidebar.html">Accessories</a>
                        </li>
                        <li>
                          <a href="shop-left-sidebar.html">Home & decor</a>
                        </li>
                        <li>
                          <a href="shop-left-sidebar.html">Bags</a>
                        </li>
                        <li>
                          <a href="shop-left-sidebar.html">Kitchan</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <nav>
                  <div className="main-navbar">
                    <div id="mainnav">
                      <div className="toggle-nav">
                        <i className="fa fa-bars sidebar-bar"></i>
                      </div>
                      <ul className="nav-menu">
                        <li className="back-btn d-xl-none">
                          <div className="close-btn">
                            Menu
                            <span className="mobile-back">
                              <i className="fa fa-angle-left"></i>
                            </span>
                          </div>
                        </li>
                        <li className="mega-menu dropdown home-menu">
                          <a
                            href="javascript:void(0)"
                            className="nav-link menu-title"
                          >
                            home
                          </a>
                          <div className="mega-menu-container menu-content">
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="opensubmegamenu">
                                      <ul>
                                        <li>
                                          <a
                                            href="index.html"
                                            className="megamenu-image"
                                          >
                                            <img
                                              src={fashion}
                                              className="img-fluid blur-up lazyload"
                                              alt=""
                                            />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>

                                    <div className="megamenu-image-title pb-0">
                                      <h5 className="mb-0">Fashion Demo</h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="opensubmegamenu">
                                      <ul>
                                        <li>
                                          <a
                                            href="flower-demo.html"
                                            className="megamenu-image"
                                          >
                                            <img
                                              src={flower}
                                              className="img-fluid blur-up lazyload"
                                              alt=""
                                            />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="megamenu-image-title pb-0">
                                      <h5 className="mb-0">Flowers Demo</h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="opensubmegamenu">
                                      <ul>
                                        <li>
                                          <a
                                            href="furniture-demo.html"
                                            className="megamenu-image"
                                          >
                                            <img
                                              src={fur}
                                              className="img-fluid blur-up lazyload"
                                              alt=""
                                            />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="megamenu-image-title pb-0">
                                      <h5 className="mb-0">Furniture Demo</h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="opensubmegamenu">
                                      <ul>
                                        <li>
                                          <a
                                            href="electronic-demo.html"
                                            className="megamenu-image"
                                          >
                                            <img
                                              src={elec}
                                              className="img-fluid blur-up lazyload"
                                              alt=""
                                            />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="megamenu-image-title pb-0">
                                      <h5 className="mb-0">Electronic Demo</h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="opensubmegamenu">
                                      <ul>
                                        <li>
                                          <a
                                            href="shoes-demo.html"
                                            className="megamenu-image"
                                          >
                                            <img
                                              src={shoes}
                                              className="img-fluid blur-up lazyload"
                                              alt=""
                                            />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="megamenu-image-title pb-0">
                                      <h5 className="mb-0">Shoes Demo</h5>
                                    </div>
                                  </div>
                                </div>
                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="opensubmegamenu">
                                      <ul>
                                        <li>
                                          <a
                                            href="vegetables-demo.html"
                                            className="megamenu-image"
                                          >
                                            <img
                                              src={vege}
                                              className="img-fluid blur-up lazyload"
                                              alt=""
                                            />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="megamenu-image-title pb-0">
                                      <h5 className="mb-0">Vegetables Demo</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropdown">
                          <a
                            href="javascript:void(0)"
                            className="nav-link menu-title"
                          >
                            shop
                          </a>
                          <ul className="nav-submenu menu-content">
                            <li>
                              <a href="shop-canvas-filter.html">
                                Shop Canvas Filter
                              </a>
                            </li>
                            <li>
                              <a href="shop-category-slider.html">
                                Shop Category Filter
                              </a>
                            </li>
                            <li>
                              <a href="shop-filter-hide.html">
                                Shop Filter Hide
                              </a>
                            </li>
                            <li>
                              <a href="shop-left-sidebar.html">
                                Shop Left Sidebar
                                <span>Trending</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-infinite.html">
                                Shop List Infinite
                              </a>
                            </li>
                            <li>
                              <a href="shop-list.html">Shop List</a>
                            </li>
                            <li>
                              <a href="shop-no-sidebar.html">Shop No Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Shop Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-top-filter.html">Shop Top Filter</a>
                            </li>
                            <li>
                              <a href="shop-with-category.html">
                                Shop With Category{" "}
                                <span className="tren-budge">New</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="mobile-poster d-flex d-xl-none">
                          <img src={pwa} className="img-fluid" alt="" />
                          <div className="mobile-contain">
                            <h5>Enjoy app-like experience</h5>
                            <p className="font-light">
                              With this Screen option you can use Website like
                              an App.
                            </p>
                            <a
                              href="javascript:void(0)"
                              id="installApp"
                              className="btn btn-solid-default btn-spacing w-100"
                            >
                              ADD TO HOMESCREEN
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <div className="menu-right">
                  <ul>
                    <li>
                      <div className="cart-media">
                        <Icon.Search />
                        <i data-feather="search"></i>
                      </div>
                    </li>
                    <li className="onhover-dropdown">
                      <div className="cart-media">
                        <Icon.User />
                      </div>
                      <div className="onhover-div profile-dropdown">
                        <ul>
                          <li>
                            <Link to="/login" className="d-block">
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link to="/register" className="d-block">
                              Register
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="onhover-dropdown wislist-dropdown">
                      <div className="cart-media">
                        <Link to="/wishlist">
                          <Icon.Heart />
                          <span className="label label-theme rounded-pill">
                            5
                          </span>
                        </Link>
                      </div>
                      <div className="onhover-div">
                        <Link to="/wishlist">
                          <div className="wislist-empty">
                            <i className="fab fa-gratipay"></i>
                            <h6 className="mb-1">Your wislist empty !!</h6>
                            <p className="font-light mb-0">
                              explore more and shortlist items.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li className="onhover-dropdown cart-dropdown">
                      <button
                        type="button"
                        className="btn btn-solid-default btn-spacing"
                      >
                        <Icon.ShoppingCart style={{ paddingRight: "8px" }} />
                        <span>$5686.25</span>
                      </button>
                      <div className="onhover-div">
                        <div className="cart-menu">
                          <div className="cart-title">
                            <h6>
                              <Icon.ShoppingBag />
                              <span className="label label-theme rounded-pill">
                                5
                              </span>
                            </h6>
                            <span className="d-md-none d-block">
                              <i className="fas fa-arrow-right back-cart"></i>
                            </span>
                          </div>
                          <ul className="custom-scroll">
                            <li>
                              <div className="media">
                                <img
                                  src={img2}
                                  className="img-fluid blur-up lazyload"
                                  alt=""
                                />
                                <div className="media-body">
                                  <h6>Slim Fit Plastic Coat</h6>
                                  <div className="qty-with-price">
                                    <span>$78.00</span>
                                    <span>
                                      <input
                                        type="number"
                                        className="form-control"
                                        value="1"
                                      />
                                    </span>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  className="btn-close d-block d-md-none"
                                  aria-label="Close"
                                >
                                  <i className="fas fa-times"></i>
                                </button>
                              </div>
                            </li>
                            <li>
                              <div className="media">
                                <img
                                  src={img7}
                                  className="img-fluid blur-up lazyload"
                                  alt=""
                                />
                                <div className="media-body">
                                  <h6>Womens Stylish Jacket</h6>
                                  <div className="qty-with-price">
                                    <span>$24.00</span>
                                    <span>
                                      <input
                                        type="number"
                                        className="form-control"
                                        value="1"
                                      />
                                    </span>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  className="btn-close d-block d-md-none"
                                  aria-label="Close"
                                >
                                  <i className="fas fa-times"></i>
                                </button>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="cart-btn">
                          <h6 className="cart-total">
                            <span className="font-light">Total:</span> $ 542.00
                          </h6>
                          <button
                            onClick="location.href = 'cart.html';"
                            type="button"
                            className="btn btn-solid-default btn-block"
                          >
                            Proceed to payment
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="search-full">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i data-feather="search" className="font-light"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control search-type"
                      placeholder="Search here.."
                    />
                    <span className="input-group-text close-search">
                      <i data-feather="x" className="font-light"></i>
                    </span>
                  </div>
                  <div className="search-suggestion">
                    <ul className="custom-scroll">
                      <li>
                        <div className="product-cart media">
                          <img
                            src={img3}
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                          <div className="media-body">
                            <a href="javascript:void(0)">
                              <h6 className="mb-1">New Smart Watch 4 ERT2</h6>
                            </a>
                            <ul className="rating p-0">
                              <li>
                                <i className="fas fa-star theme-color"></i>
                              </li>
                              <li>
                                <i className="fas fa-star theme-color"></i>
                              </li>
                              <li>
                                <i className="fas fa-star theme-color"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                            </ul>
                            <p className="mb-0 mt-1">$28.00</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="product-cart media">
                          <img
                            src={img5}
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                          <div className="media-body">
                            <a href="javascript:void(0)">
                              <h6 className="mb-1">Powermatic 900 W Juicer</h6>
                            </a>
                            <ul className="rating m-0 p-0">
                              <li>
                                <i className="fas fa-star theme-color"></i>
                              </li>
                              <li>
                                <i className="fas fa-star theme-color"></i>
                              </li>
                              <li>
                                <i className="fas fa-star theme-color"></i>
                              </li>
                              <li>
                                <i className="fas fa-star theme-color"></i>
                              </li>
                              <li>
                                <i className="fas fa-star theme-color"></i>
                              </li>
                            </ul>
                            <p className="mb-0 mt-1">$35.00</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
