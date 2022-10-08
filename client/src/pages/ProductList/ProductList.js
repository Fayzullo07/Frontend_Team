import React from 'react';
import {Link} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProductList(props) {

    const settings = {
        dots: true, arrows: false, infinite: true, speed: 500, slidesToShow: 4, slidesToScroll: 1
    };

    const settings2 = {
        dots: true, arrows: false, infinite: true, speed: 500, slidesToShow: 2, slidesToScroll: 1
    };

    return (
        <>
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
                            <h3>Shop Listing</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">
                                            <i className="fas fa-home"></i>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Shop Fashion</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="category-option">
                                <div className="button-close mb-3">
                                    <button className="btn p-0"><i data-feather="arrow-left"></i> Close</button>
                                </div>
                                <div className="accordion category-name" id="accordionExample">

                                    <div className="accordion-item category-rating">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo">
                                                Brand
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse show"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body category-scroll">
                                                <ul className="category-list">
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault1"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault1">Zara</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault2"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault2">Allen
                                                                Solly</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault3"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault3">Louis
                                                                Philippe</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault4"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault4">Louis
                                                                Philippe Sport</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault5"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault5">H&M</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault6"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault6">Fila</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault7"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault7">Puma</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault8"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault8">Nike</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault9"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault9">HRX</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item category-color">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree">
                                                Color
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse show"
                                             aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <ul className="category-list">
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <i className="fas fa-check"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item category-price">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseFour">Price
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse show"
                                             aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="range-slider category-list">
                                                    <input type="text" className="js-range-slider" value=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item category-rating">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne">
                                                Category
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show"
                                             aria-labelledby="headingOne">
                                            <div className="accordion-body category-scroll">
                                                <ul className="category-list">
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault10"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault10">Shirts</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault11"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault11">T-shirts
                                                                Solly</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault12"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault12">Kurtas</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault13"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault13">Sweatshirts</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault14"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault14">Jackets</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault15"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault15">Blazers</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault16"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault16">Puma</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault17"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault17">Nike</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault18"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault18">HRX</label>
                                                            <p className="font-light">(25)</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseFive">
                                                Discount Range
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse show"
                                             aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <ul className="category-list">
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault19"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault19">5% and
                                                                above</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault20"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault20">10% and
                                                                above</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0 custome-form-check">
                                                            <input className="checkbox_animated check-it"
                                                                   type="checkbox" id="flexCheckDefault21"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckDefault21">20% and
                                                                above</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="most-popular">
                                        <div className="title title-2 text-lg-start">
                                            <h3>Most Popular</h3>
                                        </div>

                                        <div className="product-slider border-top round-arrow1">
                                            <div>
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <div className="product-image">
                                                            <a href="javascript:void(0)">
                                                                <img src="assets/images/fashion/product/front/1.jpg"
                                                                     className="blur-up lazyload" alt=""/>
                                                            </a>
                                                            <div className="product-details">
                                                                <h6 className="font-light">Regular Fit</h6>
                                                                <a href="javascript:void(0)" className="">
                                                                    <h3>Slim Fit Plastic Coat</h3>
                                                                </a>
                                                                <h4 className="font-light mt-1">
                                                                    <del>$49.00</del>
                                                                    <span className="theme-color">$35.50</span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="product-image">
                                                            <a href="javascript:void(0)">
                                                                <img src="assets/images/fashion/product/front/2.jpg"
                                                                     className="blur-up lazyload" alt=""/>
                                                            </a>
                                                            <div className="product-details">
                                                                <h6 className="font-light">Regular Fit</h6>
                                                                <a href="javascript:void(0)" className="">
                                                                    <h3>Slim Fit Plastic Coat</h3>
                                                                </a>
                                                                <h4 className="font-light mt-1">
                                                                    <del>$49.00</del>
                                                                    <span className="theme-color">$35.50</span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="product-image">
                                                            <a href="javascript:void(0)">
                                                                <img src="assets/images/fashion/product/front/3.jpg"
                                                                     className="blur-up lazyload" alt=""/>
                                                            </a>
                                                            <div className="product-details">
                                                                <h6 className="font-light">Regular Fit</h6>
                                                                <a href="javascript:void(0)" className="">
                                                                    <h3>Slim Fit Plastic Coat</h3>
                                                                </a>
                                                                <h4 className="font-light mt-1">
                                                                    <del>$49.00</del>
                                                                    <span className="theme-color">$35.50</span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <div className="product-image">
                                                            <a href="javascript:void(0)">
                                                                <img src="assets/images/fashion/product/front/6.jpg"
                                                                     className="blur-up lazyload" alt=""/>
                                                            </a>
                                                            <div className="product-details">
                                                                <h6 className="font-light">Regular Fit</h6>
                                                                <a href="javascript:void(0)" className="">
                                                                    <h3>Slim Fit Plastic Coat</h3>
                                                                </a>
                                                                <h4 className="font-light mt-1">
                                                                    <del>$49.00</del>
                                                                    <span className="theme-color">$35.50</span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="product-image">
                                                            <a href="javascript:void(0)">
                                                                <img src="assets/images/fashion/product/front/7.jpg"
                                                                     className="blur-up lazyload" alt=""/>
                                                            </a>
                                                            <div className="product-details">
                                                                <h6 className="font-light">Regular Fit</h6>
                                                                <a href="javascript:void(0)" className="">
                                                                    <h3>Slim Fit Plastic Coat</h3>
                                                                </a>
                                                                <h4 className="font-light mt-1">
                                                                    <del>$49.00</del>
                                                                    <span className="theme-color">$35.50</span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="product-image">
                                                            <a href="javascript:void(0)">
                                                                <img src="assets/images/fashion/product/front/8.jpg"
                                                                     className="blur-up lazyload" alt=""/>
                                                            </a>
                                                            <div className="product-details">
                                                                <h6 className="font-light">Regular Fit</h6>
                                                                <a href="javascript:void(0)" className="">
                                                                    <h3>Slim Fit Plastic Coat</h3>
                                                                </a>
                                                                <h4 className="font-light mt-1">
                                                                    <del>$49.00</del>
                                                                    <span className="theme-color">$35.50</span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9 col-12 ratio_30">
                            <div className="banner-deatils">
                                <div className="banner-image">
                                    <img src="assets/images/fashion/banner.jpg"
                                         className="img-fluid bg-img blur-up lazyload" alt=""/>
                                    <div className="banner-content">
                                        <div>
                                            <h3>Shop The Latest Trends</h3>
                                            <p>Shop the latest clothing trends with our weekly edit of what's new in
                                                online at
                                                Voxo. From out latest woman collection.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-contain mt-3 mb-5">
                                    <p className="font-light">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen
                                        book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged.</p>
                                </div>
                            </div>
                            <div className="row g-4">

                                <div className="filter-button">
                                    <button className="danger-button danger-center btn btn-sm filter-btn"><i
                                        data-feather="align-left"></i> Filter
                                    </button>
                                </div>


                                <div className="col-md-12">
                                    <ul className="short-name">
                                        <li>
                                            <div className="label-tag">
                                                <span>Shirts</span>
                                                <button type="button" className="btn-close" aria-label="Close"></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label-tag">
                                                <span>Kurtas</span>
                                                <button type="button" className="btn-close" aria-label="Close"></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label-tag">
                                                <span>Jackets</span>
                                                <button type="button" className="btn-close" aria-label="Close"></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label-tag">
                                                <span>Blazers</span>
                                                <button type="button" className="btn-close" aria-label="Close"></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label-tag">
                                                <a href="javascript:void(0)"><span>Clear All</span></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-12">
                                    <div className="filter-options">
                                        <div className="select-options">
                                            <div className="page-view-filter">
                                                <div className="dropdown select-featured">
                                                    <button className="btn dropdown-toggle" type="button"
                                                            id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                        24 Page per view
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li>
                                                            <a className="dropdown-item" href="javascript:void(0)">Alphabetically
                                                                A-Z</a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="javascript:void(0)">Alphabetically
                                                                Z-A</a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="javascript:void(0)">Price,
                                                                High To
                                                                Low</a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="javascript:void(0)">Price,
                                                                Low To
                                                                High</a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="javascript:void(0)">Date,
                                                                Old To
                                                                New</a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="javascript:void(0)">Date,
                                                                New To
                                                                Old</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="dropdown select-featured">
                                                <button className="btn dropdown-toggle" type="button"
                                                        id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                    Select Featured
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li>
                                                        <a className="dropdown-item" href="javascript:void(0)">Jeans</a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item"
                                                           href="javascript:void(0)">T-Shirt</a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="javascript:void(0)">Shirt</a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item"
                                                           href="javascript:void(0)">Jacket</a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item"
                                                           href="javascript:void(0)">Hoodie</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="grid-options d-sm-inline-block d-none">
                                            <ul className="d-flex">
                                                <li className="two-grid">
                                                    <a href="javascript:void(0)">
                                                        <img src="assets/svg/grid-2.svg"
                                                             className="img-fluid blur-up lazyload" alt=""/>
                                                    </a>
                                                </li>
                                                <li className="three-grid d-md-inline-block d-none">
                                                    <a href="javascript:void(0)">
                                                        <img src="assets/svg/grid-3.svg"
                                                             className="img-fluid blur-up lazyload" alt=""/>
                                                    </a>
                                                </li>
                                                <li className="grid-btn d-lg-inline-block d-none">
                                                    <a href="javascript:void(0)">
                                                        <img src="assets/svg/grid.svg"
                                                             className="img-fluid blur-up lazyload" alt=""/>
                                                    </a>
                                                </li>
                                                <li className="list-btn active">
                                                    <a href="javascript:void(0)">
                                                        <img src="assets/svg/list.svg"
                                                             className="img-fluid blur-up lazyload" alt=""/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="row g-sm-4 g-3 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section list-style">
                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <Link to="/single_product">
                                                    <img src="assets/images/fashion/product/front/1.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="back">
                                                <Link to="/single_product">
                                                    <img src="assets/images/fashion/product/back/1.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="cart-wrap">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0)" className="addtocart-btn"
                                                           data-bs-toggle="modal" data-bs-target="#addtocart">
                                                            <i data-feather="shopping-bag"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#quick-view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link to="/compare">
                                                            <i data-feather="refresh-cw"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/wishlist" className="wishlist">
                                                            <i data-feather="heart"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <div className="rating-details">
                                                <span className="font-light grid-content">B&Y Jacket</span>
                                                <ul className="rating mt-0">
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
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main-price">
                                                <Link to="/single_product" className="font-default">
                                                    <h5 className="ms-0">Slim Fit Plastic Coat</h5>
                                                </Link>
                                                <div className="listing-content">
                                                    <span className="font-light">Regular Fit</span>
                                                    <p className="font-light">Lorem ipsum, dolor sit amet consectetur
                                                        adipisicing
                                                        elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid
                                                        ab
                                                        ducimus eaque illum, quibusdam reiciendis id ad consectetur
                                                        quis, animi
                                                        qui, minus quidem eveniet! Dolorum magnam numquam, asperiores
                                                        accusantium architecto placeat quam officia, tempore
                                                        repellendus.</p>
                                                </div>
                                                <h3 className="theme-color">$78.00</h3>
                                                <button onClick="location.href = 'cart.html';"
                                                        className="btn listing-content">Add
                                                    To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <Link to="single_product">
                                                    <img src="assets/images/fashion/product/front/2.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="back">
                                                <Link to="/single_product">
                                                    <img src="assets/images/fashion/product/back/2.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="cart-wrap">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0)" className="addtocart-btn"
                                                           data-bs-toggle="modal" data-bs-target="#addtocart">
                                                            <i data-feather="shopping-bag"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#quick-view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link to="/compare">
                                                            <i data-feather="refresh-cw"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/wishlist" className="wishlist">
                                                            <i data-feather="heart"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <div className="rating-details">
                                                <span className="font-light grid-content">Jacket</span>
                                                <ul className="rating mt-0">
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
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main-price">
                                                <Link to="/single_product" className="font-default">
                                                    <h5 className="ms-0">Blue Leather Jacket</h5>
                                                </Link>
                                                <div className="listing-content">
                                                    <span className="font-light">Jacket</span>
                                                    <p className="font-light">Lorem ipsum, dolor sit amet consectetur
                                                        adipisicing
                                                        elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid
                                                        ab
                                                        ducimus eaque illum, quibusdam reiciendis id ad consectetur
                                                        quis, animi
                                                        qui, minus quidem eveniet! Dolorum magnam numquam, asperiores
                                                        accusantium architecto placeat quam officia, tempore
                                                        repellendus.</p>
                                                </div>
                                                <h3 className="theme-color">$60.00</h3>
                                                <button onClick="location.href = 'cart.html';"
                                                        className="btn listing-content">Add
                                                    To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <Link to="/single_product">
                                                    <img src="assets/images/fashion/product/front/3.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="back">
                                                <Link to="/single_product">
                                                    <img src="assets/images/fashion/product/back/3.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="cart-wrap">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0)" className="addtocart-btn"
                                                           data-bs-toggle="modal" data-bs-target="#addtocart">
                                                            <i data-feather="shopping-bag"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#quick-view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link to="compare">
                                                            <i data-feather="refresh-cw"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/wishlist" className="wishlist">
                                                            <i data-feather="heart"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <div className="rating-details">
                                                <span className="font-light grid-content">Coat</span>
                                                <ul className="rating mt-0">
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
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main-price">
                                                <Link to="/single_product" className="font-default">
                                                    <h5 className="ms-0">Military Ball Night Dress</h5>
                                                </Link>
                                                <div className="listing-content">
                                                    <span className="font-light">Coat</span>
                                                    <p className="font-light">Lorem ipsum, dolor sit amet consectetur
                                                        adipisicing
                                                        elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid
                                                        ab
                                                        ducimus eaque illum, quibusdam reiciendis id ad consectetur
                                                        quis, animi
                                                        qui, minus quidem eveniet! Dolorum magnam numquam, asperiores
                                                        accusantium architecto placeat quam officia, tempore
                                                        repellendus.</p>
                                                </div>
                                                <h3 className="theme-color">$85.00</h3>
                                                <button onClick="location.href = 'cart.html';"
                                                        className="btn listing-content">Add
                                                    To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <Link to="/single_product">
                                                    <img src="assets/images/fashion/product/front/4.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="back">
                                                <Link to="/single_product">
                                                    <img src="assets/images/fashion/product/back/4.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="cart-wrap">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0)" className="addtocart-btn"
                                                           data-bs-toggle="modal" data-bs-target="#addtocart">
                                                            <i data-feather="shopping-bag"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#quick-view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link to="/compare">
                                                            <i data-feather="refresh-cw"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/wishlist" className="wishlist">
                                                            <i data-feather="heart"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <div className="rating-details">
                                                <span className="font-light grid-content">Jacket</span>
                                                <ul className="rating mt-0">
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
                                            </div>
                                            <div className="main-price">
                                                <Link to="/single_product" className="font-default">
                                                    <h5 className="ms-0">Slim Fit Plastic Coat</h5>
                                                </Link>
                                                <div className="listing-content">
                                                    <span className="font-light">Jacket</span>
                                                    <p className="font-light">Lorem ipsum, dolor sit amet consectetur
                                                        adipisicing
                                                        elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid
                                                        ab
                                                        ducimus eaque illum, quibusdam reiciendis id ad consectetur
                                                        quis, animi
                                                        qui, minus quidem eveniet! Dolorum magnam numquam, asperiores
                                                        accusantium architecto placeat quam officia, tempore
                                                        repellendus.</p>
                                                </div>
                                                <h3 className="theme-color">$69.00</h3>
                                                <button onClick="location.href = 'cart.html';"
                                                        className="btn listing-content">Add
                                                    To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <Link to="single_product">
                                                    <img src="assets/images/fashion/product/front/5.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="back">
                                                <Link to="single_product">
                                                    <img src="assets/images/fashion/product/back/5.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="cart-wrap">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0)" className="addtocart-btn"
                                                           data-bs-toggle="modal" data-bs-target="#addtocart">
                                                            <i data-feather="shopping-bag"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#quick-view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link to="/compare">
                                                            <i data-feather="refresh-cw"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/wishlist" className="wishlist">
                                                            <i data-feather="heart"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <div className="rating-details">
                                                <span className="font-light grid-content">Full Jacket</span>
                                                <ul className="rating mt-0">
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
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main-price">
                                                <Link to="/single_product" className="font-default">
                                                    <h5 className="ms-0">Full Jacket Ladies</h5>
                                                </Link>
                                                <div className="listing-content">
                                                    <span className="font-light">Full Jacket</span>
                                                    <p className="font-light">Lorem ipsum, dolor sit amet consectetur
                                                        adipisicing
                                                        elit. Sit, deserunt? Asperiores aliquam voluptatum culpa aliquid
                                                        ab
                                                        ducimus eaque illum, quibusdam reiciendis id ad consectetur
                                                        quis, animi
                                                        qui, minus quidem eveniet! Dolorum magnam numquam, asperiores
                                                        accusantium architecto placeat quam officia, tempore
                                                        repellendus.</p>
                                                </div>
                                                <h3 className="theme-color">$40.00</h3>
                                                <button onClick="location.href = 'cart.html';"
                                                        className="btn listing-content">Add
                                                    To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <nav className="page-section">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                                    <span aria-hidden="true">
                                        <i className="fas fa-chevron-left"></i>
                                    </span>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="javascript:void(0)">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="javascript:void(0)">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="javascript:void(0)">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" aria-label="Next">
                                    <span aria-hidden="true">
                                        <i className="fas fa-chevron-right"></i>
                                    </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
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

            <div className="modal fade quick-view-modal" id="quick-view">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <div className="quick-view-image">
                                        <div className="quick-view-slider">
                                            <Slider {...settings2}></Slider>
                                            <div>
                                                <img src="assets/images/fashion/product/front/4.jpg"
                                                     className="img-fluid blur-up lazyload" alt="product"/>
                                            </div>
                                            <div>
                                                <img src="assets/images/fashion/product/front/5.jpg"
                                                     className="img-fluid blur-up lazyload" alt="product"/>
                                            </div>
                                            <div>
                                                <img src="assets/images/fashion/product/front/6.jpg"
                                                     className="img-fluid blur-up lazyload" alt="product"/>
                                            </div>
                                            <div>
                                                <img src="assets/images/fashion/product/front/7.jpg"
                                                     className="img-fluid blur-up lazyload" alt="product"/>
                                            </div>

                                        </div>
                                        <div className="quick-nav">
                                            <div>
                                                <img src="assets/images/fashion/product/front/4.jpg"
                                                     className="img-fluid blur-up lazyload" alt="product"/>
                                            </div>
                                            <div>
                                                <img src="assets/images/fashion/product/front/5.jpg"
                                                     className="img-fluid blur-up lazyload" alt="product"/>
                                            </div>
                                            <div>
                                                <img src="assets/images/fashion/product/front/6.jpg"
                                                     className="img-fluid blur-up lazyload" alt="product"/>
                                            </div>
                                            <div>
                                                <img src="assets/images/fashion/product/front/7.jpg"
                                                     className="img-fluid blur-up lazyload" alt="product"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="product-right">
                                        <h2 className="mb-2">Men's Hoodie t-shirt</h2>
                                        <ul className="rating mt-1">
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
                                            <li className="font-light">(In stock)</li>
                                        </ul>
                                        <div className="price mt-3">
                                            <h3>$20.00</h3>
                                        </div>
                                        <div className="color-types">
                                            <h4>colors</h4>
                                            <ul className="color-variant mb-0">
                                                <li className="bg-half-light selected"></li>
                                                <li className="bg-light1"></li>
                                                <li className="bg-blue1"></li>
                                                <li className="bg-black1"></li>
                                            </ul>
                                        </div>
                                        <div className="size-detail">
                                            <h4>size</h4>
                                            <ul className="">
                                                <li className="selected">S</li>
                                                <li>M</li>
                                                <li>L</li>
                                                <li>XL</li>
                                            </ul>
                                        </div>
                                        <div className="product-details">
                                            <h4>product details</h4>
                                            <ul>
                                                <li>
                                                    <span className="font-light">Style :</span> Hoodie
                                                </li>
                                                <li>
                                                    <span className="font-light">Catgory :</span> T-shirt
                                                </li>
                                                <li>
                                                    <span className="font-light">Tags:</span> summer, organic
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-btns">
                                            <button type="button" className="btn btn-solid-default btn-sm"
                                                    data-bs-dismiss="modal">Add to cart
                                            </button>
                                            <button type="button" className="btn btn-solid-default btn-sm"
                                                    data-bs-dismiss="modal">View details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade cart-modal" id="addtocart" tabIndex="-1" role="dialog" aria-label="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <div className="modal-contain">
                                <div>
                                    <div className="modal-messages">
                                        <i className="fas fa-check"></i> 3-stripes full-zip hoodie successfully added to
                                        you cart.
                                    </div>
                                    <div className="modal-product">
                                        <div className="modal-contain-img">
                                            <img src="assets/images/fashion/instagram/4.jpg"
                                                 className="img-fluid blur-up lazyload" alt=""/>
                                        </div>
                                        <div className="modal-contain-details">
                                            <h4>Premier Cropped Skinny Jean</h4>
                                            <p className="font-light my-2">Yellow, Qty : 3</p>
                                            <div className="product-total">
                                                <h5>TOTAL : <span>$1,140.00</span></h5>
                                            </div>
                                            <div className="shop-cart-button mt-3">
                                                <Link href="/shop_list"
                                                      className="btn default-light-theme conti-button default-theme default-theme-2 rounded">CONTINUE
                                                    SHOPPING</Link>
                                                <Link to={"/cart"}
                                                      className="btn default-light-theme conti-button default-theme default-theme-2 rounded">VIEW
                                                    CART</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ratio_asos mt-4">
                                <div className="container">
                                    <div className="row m-0">
                                        <div className="col-sm-12 p-0">
                                            <div
                                                className="product-wrapper product-style-2 slide-4 p-0 light-arrow bottom-space spacing-slider">
                                                <Slider {...settings2}>
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="img-wrapper">
                                                                <div className="front">
                                                                    <a href="#">
                                                                        <img
                                                                            src="assets/images/fashion/product/front/1.jpg"
                                                                            className="bg-img blur-up lazyload" alt=""/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-details text-center">
                                                                <div className="rating-details d-block text-center">
                                                                <span
                                                                    className="font-light grid-content">B&Y Jacket</span>
                                                                </div>
                                                                <div className="main-price mt-0 d-block text-center">
                                                                    <h3 className="theme-color">$78.00</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="product-box">
                                                            <div className="img-wrapper">
                                                                <div className="front">
                                                                    <a href="#">
                                                                        <img
                                                                            src="assets/images/fashion/product/front/2.jpg"
                                                                            className="bg-img blur-up lazyload" alt=""/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-details text-center">
                                                                <div className="rating-details d-block text-center">
                                                                <span
                                                                    className="font-light grid-content">B&Y Jacket</span>
                                                                </div>
                                                                <div className="main-price mt-0 d-block text-center">
                                                                    <h3 className="theme-color">$78.00</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="product-box">
                                                            <div className="img-wrapper">
                                                                <div className="front">
                                                                    <a href="#">
                                                                        <img
                                                                            src="assets/images/fashion/product/front/3.jpg"
                                                                            className="bg-img blur-up lazyload" alt=""/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-details text-center">
                                                                <div className="rating-details d-block text-center">
                                                                <span
                                                                    className="font-light grid-content">B&Y Jacket</span>
                                                                </div>
                                                                <div className="main-price mt-0 d-block text-center">
                                                                    <h3 className="theme-color">$78.00</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="product-box">
                                                            <div className="img-wrapper">
                                                                <div className="front">
                                                                    <a href="#">
                                                                        <img
                                                                            src="assets/images/fashion/product/front/4.jpg"
                                                                            className="bg-img blur-up lazyload" alt=""/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="product-details text-center">
                                                                <div className="rating-details d-block text-center">
                                                                <span
                                                                    className="font-light grid-content">B&Y Jacket</span>
                                                                </div>
                                                                <div className="main-price mt-0 d-block text-center">
                                                                    <h3 className="theme-color">$78.00</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Slider>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductList;