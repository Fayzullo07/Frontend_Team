// import Css
import './footer.css'



// import Images
import logo from '../../assets/images/footer-img/logo.png'
import img1 from '../../assets/images/footer-img/1.jpg'
import img2 from '../../assets/images/footer-img/2.jpg'
import img3 from '../../assets/images/footer-img/3.jpg'
import img4 from '../../assets/images/footer-img/4.jpg'



const Footer = () => {
  return (
    <footer className="footer-sm-space">
    <div className="main-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-contact">
              <div className="brand-logo">
                <a href="index.html" className="footer-logo">
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
              <ul className="contact-lists">
                <li>
                  <span>
                    <b>phone:</b>
                    <span className="font-light"> + 185659635</span>
                  </span>
                </li>
                <li>
                  <span>
                    <b>Address:</b>
                    <span className="font-light">
                      {" "}
                      1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052,
                      United States
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <b>Email:</b>
                    <span className="font-light"> Voxo123@gmail.com</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="footer-links">
              <div className="footer-title">
                <h3>About us</h3>
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <a href="index.html" className="font-dark">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html" className="font-dark">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="about-us.html" className="font-dark">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html" className="font-dark">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html" className="font-dark">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div className="footer-links">
              <div className="footer-title">
                <h3>New Categories</h3>
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <a href="shop-left-sidebar.html" className="font-dark">
                      Latest Shoes
                    </a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html" className="font-dark">
                      Branded Jeans
                    </a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html" className="font-dark">
                      New Jackets
                    </a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html" className="font-dark">
                      Colorfull Hoodies
                    </a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html" className="font-dark">
                      Shiner Goggles
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div className="footer-links">
              <div className="footer-title">
                <h3>Get Help</h3>
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <a href="user-dashboard.html" className="font-dark">
                      Your Orders
                    </a>
                  </li>
                  <li>
                    <a href="user-dashboard.html" className="font-dark">
                      Your Account
                    </a>
                  </li>
                  <li>
                    <a href="order-tracking.html" className="font-dark">
                      Track Orders
                    </a>
                  </li>
                  <li>
                    <a href="wishlist.html" className="font-dark">
                      Your Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="faq.html" className="font-dark">
                      Shopping FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 d-none d-sm-block">
            <div className="footer-newsletter">
              <h3>Let’s stay in touch</h3>
              <div className="form-newsletter">
                <div className="input-group mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                  <span className="input-group-text" id="basic-addon4">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
                <p className="font-dark mb-0">
                  Keep up to date with our latest news and special offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sub-footer">
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-6">
            <ul>
              <li className="font-dark">We accept:</li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src={img1}
                    className="img-fluid blur-up lazyload"
                    alt="payment icon"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src={img2}
                    className="img-fluid blur-up lazyload"
                    alt="payment icon"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src={img3}
                    className="img-fluid blur-up lazyload"
                    alt="payment icon"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src={img4}
                    className="img-fluid blur-up lazyload"
                    alt="payment icon"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <p className="mb-0 font-dark">
              © 2022, Voxo Theme. Made with heart by Pixelstrap
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
