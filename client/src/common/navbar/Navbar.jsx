// import Css
import './navbar.css'




// import Images
import logo from '../../assets/images/navbar-img/logo.png'
import img4 from '../../assets/images/navbar-img/4.jpg'
import img1 from '../../assets/images/navbar-img/1.jpg'
import fashion from '../../assets/images/navbar-img/fashion.jpg'
import flower from '../../assets/images/navbar-img/flower.jpg'
import fur from '../../assets/images/navbar-img/furniture.jpg'
import elec from '../../assets/images/navbar-img/electonic.jpg'
import shoes from '../../assets/images/navbar-img/shoes.jpg'
import vege from '../../assets/images/navbar-img/vagetables.jpg'
import pwa from '../../assets/images/navbar-img/pwa.png'
import img2 from '../../assets/images/navbar-img/2.jpg'
import img7 from '../../assets/images/navbar-img/7.jpg'
import img3 from '../../assets/images/navbar-img/3.jpg'
import img5 from '../../assets/images/navbar-img/5.jpg'



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
                    <a href="index.html">
                      <svg className="svg-icon">
                        <use
                          className="fill-color"
                          xlinkHref="assets/svg/icons.svg#logo"
                        ></use>
                      </svg>
                      <img
                        src={logo}
                        className="img-fluid blur-up lazyload"
                        alt="logo"
                      />
                    </a>
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
                        <li className="dropdown">
                          <a
                            href="javascript:void(0)"
                            className="nav-link menu-title"
                          >
                            product
                          </a>
                          <ul className="nav-submenu menu-content">
                            <li>
                              <a href="product-4-image.html">
                                Product 4 Images
                              </a>
                            </li>
                            <li>
                              <a href="product-360-view.html">
                                Product 360 View
                              </a>
                            </li>
                            <li>
                              <a href="product-bundle.html">Product Bundle</a>
                            </li>
                            <li>
                              <a href="product-left-sidebar.html">
                                Product Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="product-left-thumbnail.html">
                                Product Left thumbnail
                              </a>
                            </li>
                            <li>
                              <a href="product-no-sidebar.html">
                                Product No Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="product-right-sidebar.html">
                                Product Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="product-right-thumbnail.html">
                                Product Right thumbnail
                              </a>
                            </li>
                            <li>
                              <a href="product-sticky.html">Product Sticky</a>
                            </li>
                            <li>
                              <a href="product-video-thumbnail.html">
                                Product Video Thumbnail
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu dropdown ratio_40">
                          <a
                            href="javascript:void(0)"
                            className="nav-link menu-title"
                          >
                            <div className="gradient-title">Voxo plus</div>
                          </a>
                          <div className="mega-menu-container poster-bg-image menu-content">
                            <div className="container-fluid">
                              <div className="row row-cols-5">
                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="submenu-title">
                                      <h5>Email Template</h5>
                                    </div>
                                    <div className="submenu-content opensubmegamenu">
                                      <ul className="list">
                                        <li>
                                          <a href="../email-template/abandonment-email.html">
                                            Abandonment Email
                                          </a>
                                        </li>
                                        <li>
                                          <a href="../email-template/black-friday.html">
                                            Black Fridday
                                          </a>
                                        </li>
                                        <li>
                                          <a href="../email-template/email-template-1.html">
                                            Email Template 1
                                          </a>
                                        </li>
                                        <li>
                                          <a href="../email-template/email-template-2.html">
                                            Email Template 2
                                          </a>
                                        </li>
                                        <li>
                                          <a href="../email-template/offer.html">
                                            Offer Template
                                          </a>
                                        </li>
                                        <li>
                                          <a href="../email-template/order-success-1.html">
                                            Order Success 1
                                          </a>
                                        </li>
                                        <li>
                                          <a href="../email-template/order-success-2.html">
                                            Order Success 2
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="submenu-title">
                                      <h5>Email Template</h5>
                                    </div>
                                    <div className="submenu-content opensubmegamenu">
                                      <ul className="list">
                                        <li>
                                          <a href="../email-template/product-review.html">
                                            Product Review
                                          </a>
                                        </li>
                                        <li>
                                          <a href="../email-template/reset-password.html">
                                            Reset Password
                                          </a>
                                        </li>
                                        <li>
                                          <a href="../email-template/welcome.html">
                                            Welcome Template
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="link-section">
                                    <div className="submenu-title">
                                      <h5>Invoice Template</h5>
                                    </div>
                                    <div className="submenu-content opensubmegamenu">
                                      <ul className="list">
                                        <li>
                                          <a href="../invoice/invoice-1.html">
                                            Invoice 1 Template
                                          </a>
                                        </li>
                                        <li>
                                          <a href="../invoice/invoice-2.html">
                                            Invoice 2 Template
                                          </a>
                                        </li>
                                        <li>
                                          <a href="../invoice/invoice-3.html">
                                            Invoice 3 Template
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="submenu-title">
                                      <h5>Portfolio Page</h5>
                                    </div>
                                    <div className="submenu-content opensubmegamenu">
                                      <ul className="list">
                                        <li>
                                          <a href="portfolio-2-grid.html">
                                            Portfolio 2 Grid
                                          </a>
                                        </li>
                                        <li>
                                          <a href="portfolio-2-masonary.html">
                                            Portfolio 2 Masonary
                                          </a>
                                        </li>
                                        <li>
                                          <a href="portfolio-3-grid.html">
                                            Portfolio 3 Grid
                                          </a>
                                        </li>
                                        <li>
                                          <a href="portfolio-3-masonary.html">
                                            Portfolio 3 Masonary
                                          </a>
                                        </li>
                                        <li>
                                          <a href="portfolio-4-grid.html">
                                            Portfolio 4 Grid
                                          </a>
                                        </li>
                                        <li>
                                          <a href="portfolio-4-masonary.html">
                                            Portfolio 4 Masonary
                                          </a>
                                        </li>
                                        <li>
                                          <a href="portfolio-no-space.html">
                                            Portfolio No Space
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="submenu-title">
                                      <h5>Element Page</h5>
                                    </div>
                                    <div className="submenu-content opensubmegamenu">
                                      <ul className="list">
                                        <li>
                                          <a href="element-button.html">
                                            Element Button
                                          </a>
                                        </li>
                                        <li>
                                          <a href="element-category.html">
                                            Element Category
                                          </a>
                                        </li>
                                        <li>
                                          <a href="element-collection-banner.html">
                                            Element Collection Banner
                                          </a>
                                        </li>
                                        <li>
                                          <a href="element-deal-banner.html">
                                            Element Deal Banner
                                          </a>
                                        </li>
                                        <li>
                                          <a href="element-header.html">
                                            Element Header
                                          </a>
                                        </li>
                                        <li>
                                          <a href="element-home.html">
                                            Element Home
                                          </a>
                                        </li>
                                        <li>
                                          <a href="element-product.html">
                                            Element Product
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="submenu-title">
                                      <h5>Cookie Bar</h5>
                                    </div>
                                    <div className="submenu-content opensubmegamenu">
                                      <ul className="list">
                                        <li>
                                          <a href="furniture-demo.html">
                                            Bottom
                                          </a>
                                        </li>
                                        <li>
                                          <a href="electronic-demo.html">
                                            Bottom Left
                                          </a>
                                        </li>
                                        <li>
                                          <a href="index.html">Bottom Right</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="link-section">
                                    <div className="submenu-title">
                                      <h5>Search</h5>
                                    </div>
                                    <div className="submenu-content opensubmegamenu">
                                      <ul className="list">
                                        <li>
                                          <a href="vegetables-demo.html">
                                            Ajax Search
                                          </a>
                                        </li>
                                      </ul>
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
                            pages
                          </a>
                          <ul className="nav-submenu menu-content">
                            <li>
                              <a href="404.html">404</a>
                            </li>
                            <li>
                              <a href="log-in.html">Log In</a>
                            </li>
                            <li>
                              <a href="sign-up.html">Register</a>
                            </li>
                            <li>
                              <a href="forgot.html">Forgot Password</a>
                            </li>
                            <li>
                              <a href="cart.html">cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">checkout</a>
                            </li>
                            <li>
                              <a href="coming-soon.html">
                                coming soon<span>trending</span>
                              </a>
                            </li>
                            <li>
                              <a href="compare.html">compare</a>
                            </li>
                            <li>
                              <a href="contact-us.html">contact us</a>
                            </li>
                            <li>
                              <a href="faq.html">faq</a>
                            </li>
                            <li>
                              <a href="order-success.html">order success</a>
                            </li>
                            <li>
                              <a href="order-tracking.html">order tracking</a>
                            </li>
                            <li>
                              <a href="review.html">review</a>
                            </li>
                            <li>
                              <a href="search.html">search</a>
                            </li>
                            <li>
                              <a href="user-dashboard.html">user dashboard</a>
                            </li>
                            <li>
                              <a href="wishlist.html">wishlist</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            href="javascript:void(0)"
                            className="nav-link menu-title"
                          >
                            blog
                          </a>
                          <ul className="nav-submenu menu-content">
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                            <li>
                              <a href="blog-infinite-scroll.html">
                                Blog Infinite Scroll
                              </a>
                            </li>
                            <li>
                              <a href="blog-left-sidebar.html">
                                Blog Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-listing.html">Blog Listing</a>
                            </li>
                            <li>
                              <a href="blog-masonary.html">
                                blog Masonary <span>New</span>
                              </a>
                            </li>
                            <li>
                              <a href="blog-no-sidebar.html">blog No Sidebar</a>
                            </li>
                            <li>
                              <a href="blog-right-sidebar.html">
                                Blog Right Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="mobile-poster d-flex d-xl-none">
                          <img
                            src={pwa}
                            className="img-fluid"
                            alt=""
                          />
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
                      <div className="search-box">
                        <i data-feather="search"></i>
                      </div>
                    </li>
                    <li className="onhover-dropdown">
                      <div className="cart-media">
                        <i data-feather="user"></i>
                      </div>
                      <div className="onhover-div profile-dropdown">
                        <ul>
                          <li>
                            <a href="log-in.html" className="d-block">
                              Login
                            </a>
                          </li>
                          <li>
                            <a href="sign-up.html" className="d-block">
                              Register
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="onhover-dropdown wislist-dropdown">
                      <div className="cart-media">
                        <a href="wishlist.html">
                          <i data-feather="heart"></i>
                          <span className="label label-theme rounded-pill">
                            5
                          </span>
                        </a>
                      </div>
                      <div className="onhover-div">
                        <a href="wishlist.html">
                          <div className="wislist-empty">
                            <i className="fab fa-gratipay"></i>
                            <h6 className="mb-1">Your wislist empty !!</h6>
                            <p className="font-light mb-0">
                              explore more and shortlist items.
                            </p>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li className="onhover-dropdown cart-dropdown">
                      <button
                        type="button"
                        className="btn btn-solid-default btn-spacing"
                      >
                        <i data-feather="shopping-cart" className="pe-2"></i>
                        <span>$5686.25</span>
                      </button>
                      <div className="onhover-div">
                        <div className="cart-menu">
                          <div className="cart-title">
                            <h6>
                              <i data-feather="shopping-bag"></i>
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
