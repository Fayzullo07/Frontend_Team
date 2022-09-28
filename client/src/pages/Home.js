import React from 'react';

function Home(props) {
    return (
        <div>
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
                                                    <use className="fill-color"
                                                         xlinkHref="assets/svg/icons.svg#logo"></use>
                                                </svg>
                                                <img src="assets/images/logo.png" className="img-fluid blur-up lazyload"
                                                     alt="logo"/>
                                            </a>
                                        </div>
                                        <div className="category-menu">
                                            <div className="category-dropdown">
                                                <div className="close-btn d-xl-none">
                                                    Category List
                                                    <span className="back-category"><i className="fa fa-angle-left"></i>
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
                                                                                    <a href="shop-left-sidebar.html">Coros</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Titan</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Citizen</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Casio</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Movado</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Tissot</a>
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
                                                                                    <a href="shop-left-sidebar.html">Analog</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Digital</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Hybrid</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Tactile</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Touchscreen</a>
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
                                                                                    <a href="shop-left-sidebar.html">Casual</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Dress</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Fashion</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Luxury</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-3">
                                                                        <div className="category-banner">
                                                                            <img
                                                                                src="assets/images/electronics/banner/4.jpg"
                                                                                className="img-fluid blur-up lazyload"
                                                                                alt=""/>
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
                                                                                    <a href="shop-left-sidebar.html">Dress</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Skirts</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Western
                                                                                        wear</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Etahnic
                                                                                        wear</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Sports
                                                                                        wear</a>
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
                                                                                    <a href="shop-left-sidebar.html">Sports
                                                                                        wear</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Etahnic
                                                                                        wear</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">Western
                                                                                        wear</a>
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
                                                                                    <a href="shop-left-sidebar.html">earrings</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">fashion
                                                                                        jewellery</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">ties</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">caps
                                                                                        and
                                                                                        hats</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">cufflinks</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">precious
                                                                                        jewellery</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-left-sidebar.html">necklaces</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-3">
                                                                        <div className="category-banner">
                                                                            <img src="assets/images/banner/1.jpg"
                                                                                 className="img-fluid blur-up lazyload"
                                                                                 alt=""/>
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
                                                            <span className="mobile-back"><i
                                                                className="fa fa-angle-left"></i>
                                                    </span>
                                                        </div>
                                                    </li>
                                                    <li className="mega-menu dropdown home-menu">
                                                        <a href="javascript:void(0)"
                                                           className="nav-link menu-title">home</a>
                                                        <div className="mega-menu-container menu-content">
                                                            <div className="container-fluid">
                                                                <div className="row">
                                                                    <div className="col mega-box">
                                                                        <div className="link-section">
                                                                            <div className="opensubmegamenu">
                                                                                <ul>
                                                                                    <li>
                                                                                        <a href="index.html"
                                                                                           className="megamenu-image">
                                                                                            <img
                                                                                                src="assets/images/demo-image/fashion.jpg"
                                                                                                className="img-fluid blur-up lazyload"
                                                                                                alt=""/>
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
                                                                                        <a href="flower-demo.html"
                                                                                           className="megamenu-image">
                                                                                            <img
                                                                                                src="assets/images/demo-image/flower.jpg"
                                                                                                className="img-fluid blur-up lazyload"
                                                                                                alt=""/>
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
                                                                                        <a href="furniture-demo.html"
                                                                                           className="megamenu-image">
                                                                                            <img
                                                                                                src="assets/images/demo-image/furniture.jpg"
                                                                                                className="img-fluid blur-up lazyload"
                                                                                                alt=""/>
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
                                                                                        <a href="electronic-demo.html"
                                                                                           className="megamenu-image">
                                                                                            <img
                                                                                                src="assets/images/demo-image/electonic.jpg"
                                                                                                className="img-fluid blur-up lazyload"
                                                                                                alt=""/>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="megamenu-image-title pb-0">
                                                                                <h5 className="mb-0">Electronic
                                                                                    Demo</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col mega-box">
                                                                        <div className="link-section">
                                                                            <div className="opensubmegamenu">
                                                                                <ul>
                                                                                    <li>
                                                                                        <a href="shoes-demo.html"
                                                                                           className="megamenu-image">
                                                                                            <img
                                                                                                src="assets/images/demo-image/shoes.jpg"
                                                                                                className="img-fluid blur-up lazyload"
                                                                                                alt=""/>
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
                                                                                        <a href="vegetables-demo.html"
                                                                                           className="megamenu-image">
                                                                                            <img
                                                                                                src="assets/images/demo-image/vagetables.jpg"
                                                                                                className="img-fluid blur-up lazyload"
                                                                                                alt=""/>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="megamenu-image-title pb-0">
                                                                                <h5 className="mb-0">Vegetables
                                                                                    Demo</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a href="javascript:void(0)"
                                                           className="nav-link menu-title">shop</a>
                                                        <ul className="nav-submenu menu-content">
                                                            <li>
                                                                <a href="shop-canvas-filter.html">Shop Canvas Filter</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-category-slider.html">Shop Category
                                                                    Filter</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-filter-hide.html">Shop Filter Hide</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-left-sidebar.html">Shop Left Sidebar
                                                                    <span>Trending</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-list-infinite.html">Shop List Infinite</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-list.html">Shop List</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-no-sidebar.html">Shop No Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-right-sidebar.html">Shop Right Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-top-filter.html">Shop Top Filter</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-with-category.html">Shop With
                                                                    Category <span className="tren-budge">New</span></a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a href="javascript:void(0)"
                                                           className="nav-link menu-title">product</a>
                                                        <ul className="nav-submenu menu-content">
                                                            <li>
                                                                <a href="product-4-image.html">Product 4 Images</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-360-view.html">Product 360 View</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-bundle.html">Product Bundle</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-left-sidebar.html">Product Left
                                                                    Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-left-thumbnail.html">Product Left
                                                                    thumbnail</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-no-sidebar.html">Product No Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-right-sidebar.html">Product Right
                                                                    Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-right-thumbnail.html">Product Right
                                                                    thumbnail</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-sticky.html">Product Sticky</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-video-thumbnail.html">Product Video
                                                                    Thumbnail</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu dropdown ratio_40">
                                                        <a href="javascript:void(0)" className="nav-link menu-title">
                                                            <div className="gradient-title">Voxo plus</div>
                                                        </a>
                                                        <div
                                                            className="mega-menu-container poster-bg-image menu-content">
                                                            <div className="container-fluid">
                                                                <div className="row row-cols-5">
                                                                    <div className="col mega-box">
                                                                        <div className="link-section">
                                                                            <div className="submenu-title">
                                                                                <h5>Email Template</h5>
                                                                            </div>
                                                                            <div
                                                                                className="submenu-content opensubmegamenu">
                                                                                <ul className="list">
                                                                                    <li>
                                                                                        <a href="../email-template/abandonment-email.html">Abandonment
                                                                                            Email</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="../email-template/black-friday.html">Black
                                                                                            Fridday</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="../email-template/email-template-1.html">Email
                                                                                            Template 1</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="../email-template/email-template-2.html">Email
                                                                                            Template 2</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="../email-template/offer.html">Offer
                                                                                            Template</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="../email-template/order-success-1.html">Order
                                                                                            Success 1</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="../email-template/order-success-2.html">Order
                                                                                            Success 2</a>
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
                                                                            <div
                                                                                className="submenu-content opensubmegamenu">
                                                                                <ul className="list">
                                                                                    <li>
                                                                                        <a href="../email-template/product-review.html">Product
                                                                                            Review</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="../email-template/reset-password.html">Reset
                                                                                            Password</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="../email-template/welcome.html">Welcome
                                                                                            Template</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="link-section">
                                                                            <div className="submenu-title">
                                                                                <h5>Invoice Template</h5>
                                                                            </div>
                                                                            <div
                                                                                className="submenu-content opensubmegamenu">
                                                                                <ul className="list">
                                                                                    <li>
                                                                                        <a href="../invoice/invoice-1.html">Invoice
                                                                                            1 Template</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="../invoice/invoice-2.html">Invoice
                                                                                            2 Template</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="../invoice/invoice-3.html">Invoice
                                                                                            3 Template</a>
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
                                                                            <div
                                                                                className="submenu-content opensubmegamenu">
                                                                                <ul className="list">
                                                                                    <li>
                                                                                        <a href="portfolio-2-grid.html">Portfolio
                                                                                            2 Grid</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="portfolio-2-masonary.html">Portfolio
                                                                                            2 Masonary</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="portfolio-3-grid.html">Portfolio
                                                                                            3 Grid</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="portfolio-3-masonary.html">Portfolio
                                                                                            3 Masonary</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="portfolio-4-grid.html">Portfolio
                                                                                            4 Grid</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="portfolio-4-masonary.html">Portfolio
                                                                                            4 Masonary</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="portfolio-no-space.html">Portfolio
                                                                                            No Space</a>
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
                                                                            <div
                                                                                className="submenu-content opensubmegamenu">
                                                                                <ul className="list">
                                                                                    <li>
                                                                                        <a href="element-button.html">Element
                                                                                            Button</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="element-category.html">Element
                                                                                            Category</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="element-collection-banner.html">Element
                                                                                            Collection Banner</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="element-deal-banner.html">Element
                                                                                            Deal Banner</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="element-header.html">Element
                                                                                            Header</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="element-home.html">Element
                                                                                            Home</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="element-product.html">Element
                                                                                            Product</a>
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
                                                                            <div
                                                                                className="submenu-content opensubmegamenu">
                                                                                <ul className="list">
                                                                                    <li>
                                                                                        <a href="furniture-demo.html">Bottom</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="electronic-demo.html">Bottom
                                                                                            Left</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="index.html">Bottom
                                                                                            Right</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>

                                                                        <div className="link-section">
                                                                            <div className="submenu-title">
                                                                                <h5>Search</h5>
                                                                            </div>
                                                                            <div
                                                                                className="submenu-content opensubmegamenu">
                                                                                <ul className="list">
                                                                                    <li>
                                                                                        <a href="vegetables-demo.html">Ajax
                                                                                            Search</a>
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
                                                        <a href="javascript:void(0)"
                                                           className="nav-link menu-title">pages</a>
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
                                                                <a href="coming-soon.html">coming
                                                                    soon<span>trending</span></a>
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
                                                        <a href="javascript:void(0)"
                                                           className="nav-link menu-title">blog</a>
                                                        <ul className="nav-submenu menu-content">
                                                            <li>
                                                                <a href="blog-details.html">Blog Details</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-infinite-scroll.html">Blog Infinite
                                                                    Scroll</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-listing.html">Blog Listing</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-masonary.html">blog
                                                                    Masonary <span>New</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-no-sidebar.html">blog No Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mobile-poster d-flex d-xl-none">
                                                        <img src="assets/images/pwa.png" className="img-fluid" alt=""/>
                                                            <div className="mobile-contain">
                                                                <h5>Enjoy app-like experience</h5>
                                                                <p className="font-light">With this Screen option you
                                                                    can use Website
                                                                    like an App.</p>
                                                                <a href="javascript:void(0)" id="installApp"
                                                                   className="btn btn-solid-default btn-spacing w-100">ADD
                                                                    TO
                                                                    HOMESCREEN</a>
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
                                                            <a href="log-in.html" className="d-block">Login</a>
                                                        </li>
                                                        <li>
                                                            <a href="sign-up.html" className="d-block">Register</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="onhover-dropdown wislist-dropdown">
                                                <div className="cart-media">
                                                    <a href="wishlist.html">
                                                        <i data-feather="heart"></i>
                                                        <span className="label label-theme rounded-pill">5</span>
                                                    </a>
                                                </div>
                                                <div className="onhover-div">
                                                    <a href="wishlist.html">
                                                        <div className="wislist-empty">
                                                            <i className="fab fa-gratipay"></i>
                                                            <h6 className="mb-1">Your wislist empty !!</h6>
                                                            <p className="font-light mb-0">explore more and shortlist
                                                                items.</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="onhover-dropdown cart-dropdown">
                                                <button type="button" className="btn btn-solid-default btn-spacing">
                                                    <i data-feather="shopping-cart" className="pe-2"></i>
                                                    <span>$5686.25</span>
                                                </button>
                                                <div className="onhover-div">
                                                    <div className="cart-menu">
                                                        <div className="cart-title">
                                                            <h6>
                                                                <i data-feather="shopping-bag"></i>
                                                                <span
                                                                    className="label label-theme rounded-pill">5</span>
                                                            </h6>
                                                            <span className="d-md-none d-block">
                                                        <i className="fas fa-arrow-right back-cart"></i>
                                                    </span>
                                                        </div>
                                                        <ul className="custom-scroll">
                                                            <li>
                                                                <div className="media">
                                                                    <img src="assets/images/fashion/product/front/1.jpg"
                                                                         className="img-fluid blur-up lazyload" alt=""/>
                                                                        <div className="media-body">
                                                                            <h6>Slim Fit Plastic Coat</h6>
                                                                            <div className="qty-with-price">
                                                                                <span>$78.00</span>
                                                                                <span>
                                                                        <input type="number" className="form-control"
                                                                               value="1"/>
                                                                    </span>
                                                                            </div>
                                                                        </div>
                                                                        <button type="button"
                                                                                className="btn-close d-block d-md-none"
                                                                                aria-label="Close">
                                                                            <i className="fas fa-times"></i>
                                                                        </button>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="media">
                                                                    <img src="assets/images/fashion/product/front/7.jpg"
                                                                         className="img-fluid blur-up lazyload" alt=""/>
                                                                        <div className="media-body">
                                                                            <h6>Womens Stylish Jacket</h6>
                                                                            <div className="qty-with-price">
                                                                                <span>$24.00</span>
                                                                                <span>
                                                                        <input type="number" className="form-control"
                                                                               value="1"/>
                                                                    </span>
                                                                            </div>
                                                                        </div>
                                                                        <button type="button"
                                                                                className="btn-close d-block d-md-none"
                                                                                aria-label="Close">
                                                                            <i className="fas fa-times"></i>
                                                                        </button>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="cart-btn">
                                                        <h6 className="cart-total"><span
                                                            className="font-light">Total:</span> $
                                                            542.00</h6>
                                                        <button onClick="location.href = 'cart.html';" type="button"
                                                                className="btn btn-solid-default btn-block">
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
                                            <input type="text" className="form-control search-type"
                                                   placeholder="Search here.."/>
                                    <span className="input-group-text close-search">
                                        <i data-feather="x" className="font-light"></i>
                                    </span>
                                        </div>
                                        <div className="search-suggestion">
                                            <ul className="custom-scroll">
                                                <li>
                                                    <div className="product-cart media">
                                                        <img src="assets/images/electronics/product/1.jpg"
                                                             className="img-fluid blur-up lazyload" alt=""/>
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
                                                        <img src="assets/images/electronics/product/5.jpg"
                                                             className="img-fluid blur-up lazyload" alt=""/>
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
                                    <li className="breadcrumb-item active" aria-current="page">404</li>
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
                                <img src="assets/images/inner-page/404.png" className="img-fluid blur-up lazyload"
                                     alt=""/>
                            </div>
                        </div>

                        <div className="col-md-8 mx-auto mt-md-5 mt-3">
                            <div className="page-container pass-forgot">
                                <div>
                                    <h2>page not found</h2>
                                    <p>The page you are looking for doesn't exist or an other error occurred. Go back,
                                        or head
                                        over to choose a new direction.</p>
                                    <a href="index.html" className="btn btn-solid-default">Back Home Page</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="subscribe-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="subscribe-details">
                                <h2 className="mb-3">Subscribe Our News</h2>
                                <h6 className="font-light">Subscribe and receive our newsletters to follow the news
                                    about our fresh
                                    and fantastic Products.</h6>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
                            <div className="subsribe-input">
                                <div className="input-group">
                                    <input type="text" className="form-control subscribe-input"
                                           placeholder="Your Email Address"/>
                                        <button className="btn btn-solid-default" type="button">Button</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-sm-space">
                <div className="main-footer">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="footer-contact">
                                    <div className="brand-logo">
                                        <a href="index.html" className="footer-logo">
                                            <svg className="svg-icon">
                                                <use className="fill-color"
                                                     xlinkHref="assets/svg/icons.svg#logo"></use>
                                            </svg>
                                            <img src="assets/images/logo.png" className="img-fluid blur-up lazyload"
                                                 alt="logo"/>
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
                                        <span className="font-light"> 1418 Riverwood Drive, Suite 3245
                                            Cottonwood, CA 96052, United States</span>
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
                                                <a href="index.html" className="font-dark">Home</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html" className="font-dark">Shop</a>
                                            </li>
                                            <li>
                                                <a href="about-us.html" className="font-dark">About Us</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html" className="font-dark">Blog</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html" className="font-dark">Contact</a>
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
                                                <a href="shop-left-sidebar.html" className="font-dark">Latest Shoes</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html" className="font-dark">Branded Jeans</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html" className="font-dark">New Jackets</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html" className="font-dark">Colorfull
                                                    Hoodies</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html" className="font-dark">Shiner
                                                    Goggles</a>
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
                                                <a href="user-dashboard.html" className="font-dark">Your Orders</a>
                                            </li>
                                            <li>
                                                <a href="user-dashboard.html" className="font-dark">Your Account</a>
                                            </li>
                                            <li>
                                                <a href="order-tracking.html" className="font-dark">Track Orders</a>
                                            </li>
                                            <li>
                                                <a href="wishlist.html" className="font-dark">Your Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="faq.html" className="font-dark">Shopping FAQs</a>
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
                                            <input type="text" className="form-control"
                                                   placeholder="Your Email Address"/>
                                                <span className="input-group-text" id="basic-addon4"><i
                                                    className="fas fa-arrow-right"></i></span>
                                        </div>
                                        <p className="font-dark mb-0">Keep up to date with our latest news and special
                                            offers.
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
                                            <img src="assets/images/payment-icon/1.jpg"
                                                 className="img-fluid blur-up lazyload" alt="payment icon"/></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="assets/images/payment-icon/2.jpg"
                                                 className="img-fluid blur-up lazyload" alt="payment icon"/></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="assets/images/payment-icon/3.jpg"
                                                 className="img-fluid blur-up lazyload" alt="payment icon"/></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img src="assets/images/payment-icon/4.jpg"
                                                 className="img-fluid blur-up lazyload" alt="payment icon"/></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <p className="mb-0 font-dark">© 2022, Voxo Theme. Made with heart by Pixelstrap</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="theme-setting">
                <ul>
                    <li>
                        <button id="darkButton" className="btn btn-sm dark-buttton">Dark</button>
                    </li>
                    <li>
                        <button className="btn btn-sm rtl-button">RTL</button>
                    </li>
                    <li className="color-picker">
                        <input type="color" className="form-control form-control-color" id="ColorPicker1"
                               value="#e22454" title="Choose your color"/>
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
