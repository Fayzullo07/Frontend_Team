import React from 'react';
import {Link} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SingleProduct(props) {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const settings2 = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
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
                            <h3>Product Left Sidebar</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to={"/"}>
                                            <i className="fas fa-home"></i>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Product Left Sidebar</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row gx-4 gy-5">
                        <div className="col-lg-3 col-md-4 mt-lg-5 mt-0">
                            <div className="category-option">
                                <div className="button-close mb-3">
                                    <button className="btn p-0"><i data-feather="arrow-left"></i> Close</button>
                                </div>

                                <div className="accordion category-name" id="accordionExample">
                                    <div className="accordion-item category-rating">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree">
                                                Brand
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse show"
                                             aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body category-scroll">
                                                <ul className="category-list">
                                                    <li>
                                                        <div className="form-check ps-0">
                                                            <div className="form-check user-checkbox ps-0">
                                                                <input className="checkbox_animated check-it"
                                                                       type="checkbox" value="" id="flexCheckDefault1"/>
                                                                    <label className="form-check-label">Zara <span
                                                                        className="font-light">(25)</span>
                                                                    </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0">
                                                            <div className="form-check user-checkbox ps-0">
                                                                <input className="checkbox_animated check-it"
                                                                       type="checkbox" value="" id="flexCheckDefault2"/>
                                                                    <label className="form-check-label">Allen
                                                                        Solly <span className="font-light">(25)</span>
                                                                    </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0">
                                                            <div className="form-check user-checkbox ps-0">
                                                                <input className="checkbox_animated check-it"
                                                                       type="checkbox" value="" id="flexCheckDefault3"/>
                                                                    <label className="form-check-label">Louis
                                                                        Philippe <span
                                                                            className="font-light">(25)</span>
                                                                    </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0">
                                                            <div className="form-check user-checkbox ps-0">
                                                                <input className="checkbox_animated check-it"
                                                                       type="checkbox" value="" id="flexCheckDefault4"/>
                                                                    <label className="form-check-label">Louis
                                                                        Philippe Sport <span
                                                                            className="font-light">(25)</span>
                                                                    </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0">
                                                            <div className="form-check user-checkbox ps-0">
                                                                <input className="checkbox_animated check-it"
                                                                       type="checkbox" value="" id="flexCheckDefault5"/>
                                                                    <label className="form-check-label">H&M <span
                                                                        className="font-light">(25)</span>
                                                                    </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check ps-0">
                                                            <div className="form-check user-checkbox ps-0">
                                                                <input className="checkbox_animated check-it"
                                                                       type="checkbox" value="" id="flexCheckDefault6"/>
                                                                    <label className="form-check-label">Fila <span
                                                                        className="font-light">(25)</span>
                                                                    </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-0">
                                                        <div className="form-check ps-0">
                                                            <div className="form-check user-checkbox ps-0">
                                                                <input className="checkbox_animated check-it"
                                                                       type="checkbox" value="" id="flexCheckDefault7"/>
                                                                    <label className="form-check-label">Puma <span
                                                                        className="font-light">(25)</span>
                                                                    </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item service-accorion">
                                        <div id="collapseFour" className="accordion-collapse collapse show"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <ul className="category-list">
                                                    <li>
                                                        <div className="service-wrap">
                                                            <div className="service-icon">
                                                                <svg>
                                                                    <use
                                                                        xlinkHref="assets/svg/icons.svg#customer"></use>
                                                                </svg>
                                                            </div>
                                                            <div className="service-content">
                                                                <h3>Customer Servcies</h3>
                                                                <span
                                                                    className="font-light">Top notch customer service.</span>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="service-wrap">
                                                            <div className="service-icon">
                                                                <svg>
                                                                    <use xlinkHref="assets/svg/icons.svg#shop"></use>
                                                                </svg>
                                                            </div>
                                                            <div className="service-content">
                                                                <h3>Pickup At Any Store</h3>
                                                                <span className="font-light">Free shipping on orders over
                                                            $65.</span>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="service-wrap">
                                                            <div className="service-icon">
                                                                <svg>
                                                                    <use
                                                                        xlinkHref="assets/svg/icons.svg#secure-payment">
                                                                    </use>
                                                                </svg>
                                                            </div>
                                                            <div className="service-content">
                                                                <h3>Secured Payment</h3>
                                                                <span className="font-light">We accept all major credit
                                                            cards.</span>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="service-wrap">
                                                            <div className="service-icon">
                                                                <svg>
                                                                    <use xlinkHref="assets/svg/icons.svg#return"></use>
                                                                </svg>
                                                            </div>
                                                            <div className="service-content">
                                                                <h3>Free Returns</h3>
                                                                <span
                                                                    className="font-light">30-days free return policy.</span>
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

                        <div className="col-lg-9 col-12">

                            <div className="filter-button mb-3">
                                <button className="danger-button danger-center btn btn-sm filter-btn"><i
                                    data-feather="align-left"></i> Filter
                                </button>
                            </div>

                            <div className="details-items">
                                <div className="row g-4">
                                    <div className="col-lg-5 col-md-6">
                                        <div className="degree-section">
                                            <div className="details-image ratio_asos">
                                                <div>
                                                    <div className="product-image-tag">
                                                        <img src="assets/images/fashion/1.jpg" id="zoom_01"
                                                             data-zoom-image="assets/images/fashion/1.jpg"
                                                             className="img-fluid w-100 image_zoom_cls-0 blur-up lazyload"
                                                             alt=""/>

                                                            <div className="label-tag">
                                                                <h6><i className="fas fa-star"></i> 4.8 <span
                                                                    className="font-light">120</span></h6>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="product-image-tag">
                                                        <img src="assets/images/fashion/2.jpg" id="zoom_02"
                                                             data-zoom-image="assets/images/fashion/2.jpg"
                                                             className="img-fluid w-100 image_zoom_cls-1 blur-up lazyload"
                                                             alt=""/>

                                                            <div className="label-tag">
                                                                <h6><i className="fas fa-star"></i> 4.8 <span
                                                                    className="font-light">120</span></h6>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="product-image-tag">
                                                        <img src="assets/images/fashion/3.jpg" id="zoom_03"
                                                             data-zoom-image="assets/images/fashion/3.jpg"
                                                             className="img-fluid w-100 image_zoom_cls-2 blur-up lazyload"
                                                             alt=""/>

                                                            <div className="label-tag">
                                                                <h6><i className="fas fa-star"></i> 4.8 <span
                                                                    className="font-light">120</span></h6>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="product-image-tag">
                                                        <img src="assets/images/fashion/4.jpg" id="zoom_04"
                                                             data-zoom-image="assets/images/fashion/4.jpg"
                                                             className="img-fluid w-100 image_zoom_cls-3 blur-up lazyload"
                                                             alt=""/>

                                                            <div className="label-tag">
                                                                <h6><i className="fas fa-star"></i> 4.8 <span
                                                                    className="font-light">120</span></h6>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="details-image-option black-slide mt-4 rounded">
                                                <div>
                                                    <img src="assets/images/fashion/1.jpg"
                                                         className="img-fluid blur-up lazyload" alt=""/>
                                                </div>
                                                <div>
                                                    <img src="assets/images/fashion/2.jpg"
                                                         className="img-fluid blur-up lazyload" alt=""/>
                                                </div>
                                                <div>
                                                    <img src="assets/images/fashion/3.jpg"
                                                         className="img-fluid blur-up lazyload" alt=""/>
                                                </div>
                                                <div>
                                                    <img src="assets/images/fashion/4.jpg"
                                                         className="img-fluid blur-up lazyload" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-7 col-md-6">
                                        <div className="cloth-details-size">
                                            <div className="product-count">
                                                <ul>
                                                    <li>
                                                        <img src="assets/images/gif/fire.gif"
                                                             className="img-fluid blur-up lazyload" alt="image"/>
                                                            <span className="p-counter">37</span>
                                                            <span className="lang">orders in last 24 hours</span>
                                                    </li>
                                                    <li>
                                                        <img src="assets/images/gif/person.gif"
                                                             className="img-fluid user_img" alt="image"/>
                                                            <span className="p-counter">44</span>
                                                            <span className="lang">active view this</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="details-image-concept">
                                                <h2>Brand New t-Shirt</h2>
                                            </div>

                                            <div className="label-section">
                                                <span className="badge badge-grey-color">#1 Best seller</span>
                                                <span className="label-text">in fashion</span>
                                            </div>

                                            <h3 className="price-detail">$32.96 <del>$459.00</del><span>55% off</span>
                                            </h3>

                                            <div className="color-image">
                                                <div className="image-select">
                                                    <h5>Color :</h5>
                                                    <ul className="image-section">
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <img src="assets/images/fashion/product/front/5.jpg"
                                                                     className="img-fluid blur-up lazyload" alt=""/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <img src="assets/images/fashion/product/front/6.jpg"
                                                                     className="img-fluid blur-up lazyload" alt=""/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <img src="assets/images/fashion/product/front/7.jpg"
                                                                     className="img-fluid blur-up lazyload" alt=""/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div id="selectSize"
                                                 className="addeffect-section product-description border-product">
                                                <h6 className="product-title size-text">select size
                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                       data-bs-target="#sizemodal">size chart</a>
                                                </h6>

                                                <h6 className="error-message">please select size</h6>

                                                <div className="size-box">
                                                    <ul>
                                                        <li>
                                                            <a href="javascript:void(0)">s</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">m</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">l</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">xl</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <h6 className="product-title product-title-2 d-block">quantity</h6>

                                                <div className="qty-box">
                                                    <div className="input-group">
                                                <span className="input-group-prepend">
                                                    <button type="button" className="btn quantity-left-minus"
                                                            data-type="minus" data-field="">
                                                        <i className="fas fa-minus"></i>
                                                    </button>
                                                </span>
                                                        <input type="text" name="quantity"
                                                               className="form-control input-number" value="1"/>
                                                <span className="input-group-prepend">
                                                    <button type="button" className="btn quantity-right-plus"
                                                            data-type="plus" data-field="">
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-buttons">
                                                <Link to="wishlist" className="btn btn-solid">
                                                    <i className="fa fa-bookmark fz-16 me-2"></i>
                                                    <span>Wishlist</span>
                                                </Link>
                                                <a href="javascript:void(0)" id="cartEffect"
                                                   className="btn btn-solid hover-solid btn-animation">
                                                    <i className="fa fa-shopping-cart"></i>
                                                    <span>Add To Cart</span>
                                                </a>
                                            </div>

                                            <ul className="product-count shipping-order">
                                                <li>
                                                    <img src="assets/images/gif/truck.png"
                                                         className="img-fluid blur-up lazyload" alt="image"/>
                                                        <span
                                                            className="lang">Free shipping for orders above $500 USD</span>
                                                </li>
                                            </ul>

                                            <div className="mt-2 mt-md-3 border-product">
                                                <h6 className="product-title hurry-title d-block">Hurry Up!
                                                    Left <span>10</span>
                                                    in
                                                    stock</h6>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar"
                                                         style="width: 78%"></div>
                                                </div>
                                                <div className="font-light timer-5">
                                                    <h5>Order in the next to get</h5>
                                                    <ul className="timer1">
                                                        <li className="counter">
                                                            <h5 id="days">&#9251;</h5> Days :
                                                        </li>
                                                        <li className="counter">
                                                            <h5 id="hours">&#9251;</h5> Hour :
                                                        </li>
                                                        <li className="counter">
                                                            <h5 id="minutes">&#9251;</h5> Min :
                                                        </li>
                                                        <li className="counter">
                                                            <h5 id="seconds">&#9251;</h5> Sec
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="border-product">
                                                <h6 className="product-title d-block">share it</h6>
                                                <div className="product-icon">
                                                    <ul className="product-social">
                                                        <li>
                                                            <a href="https://www.facebook.com/">
                                                                <i className="fab fa-facebook-f"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.google.com/">
                                                                <i className="fab fa-google-plus-g"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://twitter.com/">
                                                                <i className="fab fa-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.instagram.com/">
                                                                <i className="fab fa-instagram"></i>
                                                            </a>
                                                        </li>
                                                        <li className="pe-0">
                                                            <a href="https://www.google.com/">
                                                                <i className="fas fa-rss"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="cloth-review">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                                data-bs-target="#desc" type="button">Description
                                        </button>

                                        <button className="nav-link" id="nav-speci-tab" data-bs-toggle="tab"
                                                data-bs-target="#speci" type="button">Specifications
                                        </button>

                                        <button className="nav-link" id="nav-size-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-guide" type="button">Sizing Guide
                                        </button>

                                        <button className="nav-link" id="nav-question-tab" data-bs-toggle="tab"
                                                data-bs-target="#question" type="button">Q & A
                                        </button>

                                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                                data-bs-target="#review" type="button">Review
                                        </button>
                                    </div>
                                </nav>

                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="desc">
                                        <div className="shipping-chart">
                                            <div className="part">
                                                <h4 className="inner-title mb-2">Give you a complete account of the
                                                    system</h4>
                                                <p className="font-light">Nor again is there anyone who loves or pursues
                                                    or
                                                    desires
                                                    to
                                                    obtain pain of itself, because it is pain, but because occasionally
                                                    circumstances occur in which toil and pain can procure him some
                                                    great
                                                    pleasure.
                                                    To take a trivial example, which of us ever undertakes laborious
                                                    physical
                                                    exercise, except to obtain some advantage from it? But who has any
                                                    right
                                                    to
                                                    find
                                                    fault with a man who chooses to enjoy a pleasure that has no
                                                    annoying
                                                    consequences, or one who avoids a pain that produces no resultant
                                                    pleasure.
                                                </p>
                                            </div>

                                            <div className="row g-3 align-items-center">
                                                <div className="col-lg-8">
                                                    <p className="font-light">Lorem ipsum dolor sit amet, consectetur
                                                        adipisicing
                                                        elit.
                                                        Ab, autem nemo? Tempora vitae assumenda laudantium unde magni,
                                                        soluta
                                                        repudiandae quam, neque voluptate deleniti consequatur
                                                        laboriosam
                                                        veritatis?
                                                        Tempore dolor molestias voluptatum! Minima possimus, pariatur
                                                        sed,
                                                        quasi
                                                        provident dolorum unde molestias, assumenda consequuntur odit
                                                        magni
                                                        blanditiis obcaecati? Ea corporis odit dolorem fuga, fugiat
                                                        soluta
                                                        consequuntur magni.</p>

                                                    <div className="part mt-3">
                                                        <h5 className="inner-title mb-2">fabric:</h5>
                                                        <p className="font-light">Art silk is manufactured by synthetic
                                                            fibres
                                                            like
                                                            rayon. It's light in weight and is soft on the skin for
                                                            comfort
                                                            in
                                                            summers.Art silk is manufactured by synthetic fibres like
                                                            rayon.
                                                            It's
                                                            light in weight and is soft on the skin for comfort in
                                                            summers.
                                                        </p>
                                                        <p className="font-light">Lorem Ipsum is simply dummy text of
                                                            the
                                                            printing
                                                            and typesetting industry. Lorem Ipsum has been the
                                                            industry's
                                                            standard dummy text ever since the 1500s</p>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4">
                                                    <img src="assets/images/fashion/slider/1.jpg"
                                                         className="img-fluid rounded blur-up lazyload" alt=""/>
                                                </div>

                                                <div className="col-lg-8 order-lg-2 mt-4">
                                                    <p className="font-light">Lorem ipsum dolor sit amet, consectetur
                                                        adipisicing
                                                        elit.
                                                        Ab, autem nemo? Tempora vitae assumenda laudantium unde magni,
                                                        soluta
                                                        repudiandae quam, neque voluptate deleniti consequatur
                                                        laboriosam
                                                        veritatis?
                                                        Tempore dolor molestias voluptatum! Minima possimus, pariatur
                                                        sed,
                                                        quasi
                                                        provident dolorum unde molestias, assumenda consequuntur odit
                                                        magni
                                                        blanditiis obcaecati? Ea corporis odit dolorem fuga, fugiat
                                                        soluta
                                                        consequuntur magni.</p>
                                                    <div className="part mt-3">
                                                        <p className="font-light">Lorem ipsum, dolor sit amet
                                                            consectetur
                                                            adipisicing
                                                            elit. Odio repellat numquam perspiciatis eum quis ab, sed
                                                            dicta
                                                            tenetur
                                                            fugit culpa, aut distinctio deserunt quisquam ipsam
                                                            reprehenderit
                                                            iure?
                                                            Adipisci, optio enim? Voluptates voluptatum neque id ad
                                                            commodi
                                                            quisquam
                                                            dolorem vitae inventore quasi! Officiis facere, iusto
                                                            tempore
                                                            atque
                                                            magnam voluptas. Architecto laboriosam deleniti hic
                                                            veritatis
                                                            nesciunt.
                                                            Aut officia quasi inventore et. Debitis.</p>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 order-lg-0 mt-4">
                                                    <img src="assets/images/fashion/slider/2.jpg"
                                                         className="img-fluid rounded blur-up lazyload" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="speci">
                                        <div className="pro mb-4">
                                            <p className="font-light">The Model is wearing a white blouse from our
                                                stylist's
                                                collection, see the image for a mock-up of what the actual blouse would
                                                look
                                                like.it has text written on it in a black cursive language which looks
                                                great
                                                on a white color.</p>
                                            <div className="table-responsive">
                                                <table className="table table-part">
                                                    <tr>
                                                        <th>Product Dimensions</th>
                                                        <td>15 x 15 x 3 cm; 250 Grams</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Date First Available</th>
                                                        <td>5 April 2021</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Manufacturer‏</th>
                                                        <td>Aditya Birla Fashion and Retail Limited</td>
                                                    </tr>
                                                    <tr>
                                                        <th>ASIN</th>
                                                        <td>B06Y28LCDN</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Item model number</th>
                                                        <td>AMKP317G04244</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Department</th>
                                                        <td>Men</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Item Weight</th>
                                                        <td>250 G</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Item Dimensions LxWxH</th>
                                                        <td>15 x 15 x 3 Centimeters</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Net Quantity</th>
                                                        <td>1 U</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Included Components‏</th>
                                                        <td>1-T-shirt</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Generic Name</th>
                                                        <td>T-shirt</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade overflow-auto" id="nav-guide">
                                        <div className="table-responsive">
                                            <table className="table table-pane mb-0">
                                                <tbody>
                                                <tr className="bg-color">
                                                    <th className="my-2">US Sizes</th>
                                                    <td>6</td>
                                                    <td>6.5</td>
                                                    <td>7</td>
                                                    <td>8</td>
                                                    <td>8.5</td>
                                                    <td>9</td>
                                                    <td>9.5</td>
                                                    <td>10</td>
                                                    <td>10.5</td>
                                                    <td>11</td>
                                                </tr>

                                                <tr>
                                                    <th>Euro Sizes</th>
                                                    <td>39</td>
                                                    <td>39</td>
                                                    <td>40</td>
                                                    <td>40-41</td>
                                                    <td>41</td>
                                                    <td>41-42</td>
                                                    <td>42</td>
                                                    <td>42-43</td>
                                                    <td>43</td>
                                                    <td>43-44</td>
                                                </tr>

                                                <tr className="bg-color">
                                                    <th>UK Sizes</th>
                                                    <td>5.5</td>
                                                    <td>6</td>
                                                    <td>6.5</td>
                                                    <td>7</td>
                                                    <td>7.5</td>
                                                    <td>8</td>
                                                    <td>8.5</td>
                                                    <td>9</td>
                                                    <td>10.5</td>
                                                    <td>11</td>
                                                </tr>

                                                <tr>
                                                    <th>Inches</th>
                                                    <td>9.25"</td>
                                                    <td>9.5"</td>
                                                    <td>9.625"</td>
                                                    <td>9.75"</td>
                                                    <td>9.9735"</td>
                                                    <td>10.125"</td>
                                                    <td>10.25"</td>
                                                    <td>10.5"</td>
                                                    <td>10.765"</td>
                                                    <td>10.85</td>
                                                </tr>

                                                <tr className="bg-color">
                                                    <th>CM</th>
                                                    <td>23.5</td>
                                                    <td>24.1</td>
                                                    <td>24.4</td>
                                                    <td>25.4</td>
                                                    <td>25.7</td>
                                                    <td>26</td>
                                                    <td>26.7</td>
                                                    <td>27</td>
                                                    <td>27.3</td>
                                                    <td>27.5</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="question">
                                        <div className="question-answer">
                                            <ul>
                                                <li>
                                                    <div className="que">
                                                        <i className="fas fa-question"></i>
                                                        <div className="que-details">
                                                            <h6>Is it compatible with all WordPress themes?</h6>
                                                            <p className="font-light">If you want to see a demonstration
                                                                version of
                                                                the premium plugin, you can see that in this page. If
                                                                you want
                                                                to see a demonstration version of the premium plugin,
                                                                you can
                                                                see that in this page. If you want to see a
                                                                demonstration
                                                                version of the premium plugin, you can see that in this
                                                                page.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="que">
                                                        <i className="fas fa-question"></i>
                                                        <div className="que-details">
                                                            <h6>How can I try the full-featured plugin? </h6>
                                                            <p className="font-light">Compatibility with all themes is
                                                                impossible,
                                                                because they are too many, but generally if themes are
                                                                developed
                                                                according to WordPress and WooCommerce guidelines, YITH
                                                                plugins
                                                                are compatible with them. Compatibility with all themes
                                                                is
                                                                impossible, because they are too many, but generally if
                                                                themes
                                                                are developed according to WordPress and WooCommerce
                                                                guidelines,
                                                                YITH plugins are compatible with them.</p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="que">
                                                        <i className="fas fa-question"></i>
                                                        <div className="que-details">
                                                            <h6>Is it compatible with all WordPress themes?</h6>
                                                            <p className="font-light">If you want to see a demonstration
                                                                version of
                                                                the premium plugin, you can see that in this page. If
                                                                you want
                                                                to see a demonstration version of the premium plugin,
                                                                you can
                                                                see that in this page. If you want to see a
                                                                demonstration
                                                                version of the premium plugin, you can see that in this
                                                                page.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="review">
                                        <div className="row g-4">
                                            <div className="col-lg-4">
                                                <div className="customer-rating">
                                                    <h2>Customer reviews</h2>
                                                    <ul className="rating my-2 d-inline-block">
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

                                                    <div className="global-rating">
                                                        <h5 className="font-light">82 Ratings</h5>
                                                    </div>

                                                    <ul className="rating-progess">
                                                        <li>
                                                            <h5 className="me-3">5 Star</h5>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar"
                                                                     style="width: 78%" aria-valuenow="50"
                                                                     aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                            <h5 className="ms-3">78%</h5>
                                                        </li>
                                                        <li>
                                                            <h5 className="me-3">4 Star</h5>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar"
                                                                     style="width: 62%" aria-valuenow="50"
                                                                     aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                            <h5 className="ms-3">62%</h5>
                                                        </li>
                                                        <li>
                                                            <h5 className="me-3">3 Star</h5>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar"
                                                                     style="width: 44%" aria-valuenow="50"
                                                                     aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                            <h5 className="ms-3">44%</h5>
                                                        </li>
                                                        <li>
                                                            <h5 className="me-3">2 Star</h5>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar"
                                                                     style="width: 30%" aria-valuenow="50"
                                                                     aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                            <h5 className="ms-3">30%</h5>
                                                        </li>
                                                        <li>
                                                            <h5 className="me-3">1 Star</h5>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar"
                                                                     style="width: 18%" aria-valuenow="50"
                                                                     aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                            <h5 className="ms-3">18%</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-lg-8">
                                                <p className="d-inline-block me-2">Rating</p>
                                                <ul className="rating mb-3 d-inline-block">
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
                                                <div className="review-box">
                                                    <form className="row g-4">
                                                        <div className="col-12 col-md-6">
                                                            <label className="mb-1" htmlFor="name">Name</label>
                                                            <input type="text" className="form-control" id="name"
                                                                   placeholder="Enter your name" required=""/>
                                                        </div>

                                                        <div className="col-12 col-md-6">
                                                            <label className="mb-1" htmlFor="id">Email Address</label>
                                                            <input type="email" className="form-control" id="id"
                                                                   placeholder="Email Address" required=""/>
                                                        </div>

                                                        <div className="col-12">
                                                            <label className="mb-1" htmlFor="comments">Comments</label>
                                                            <textarea className="form-control"
                                                                      placeholder="Leave a comment here" id="comments"
                                                                      style="height: 100px" required=""></textarea>
                                                        </div>

                                                        <div className="col-12">
                                                            <button type="submit"
                                                                    className="btn default-light-theme default-theme default-theme-2">Submit
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            <div className="col-12 mt-4">
                                                <div className="customer-review-box">
                                                    <h4>Customer Reviews</h4>

                                                    <div className="customer-section">
                                                        <div className="customer-profile">
                                                            <img src="assets/images/inner-page/review-image/1.jpg"
                                                                 className="img-fluid blur-up lazyload" alt=""/>
                                                        </div>

                                                        <div className="customer-details">
                                                            <h5>Mike K</h5>
                                                            <ul className="rating my-2 d-inline-block">
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
                                                            <p className="font-light">I purchased my Tab S2 at Best Buy
                                                                but I
                                                                wanted
                                                                to
                                                                share my thoughts on Amazon. I'm not going to go over
                                                                specs
                                                                and
                                                                such
                                                                since you can read those in a hundred other places.
                                                                Though I
                                                                will
                                                                say that the "new" version is preloaded with Marshmallow
                                                                and
                                                                now
                                                                uses a Qualcomm octacore processor in place of the
                                                                Exynos
                                                                that
                                                                shipped with the first gen.</p>

                                                            <p className="date-custo font-light">- Sep 08, 2021</p>
                                                        </div>
                                                    </div>

                                                    <div className="customer-section">
                                                        <div className="customer-profile">
                                                            <img src="assets/images/inner-page/review-image/2.jpg"
                                                                 className="img-fluid blur-up lazyload" alt=""/>
                                                        </div>

                                                        <div className="customer-details">
                                                            <h5>Norwalker</h5>
                                                            <ul className="rating my-2 d-inline-block">
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
                                                            <p className="font-light">Pros: Nice large(9.7") screen.
                                                                Bright
                                                                colors.
                                                                Easy
                                                                to setup and get started. Arrived on time. Cons: a bit
                                                                slow
                                                                on
                                                                response, but expected as tablet is 2 generations old.
                                                                But
                                                                works
                                                                fine and good value for the money.</p>

                                                            <p className="date-custo font-light">- Sep 08, 2021</p>
                                                        </div>
                                                    </div>

                                                    <div className="customer-section">
                                                        <div className="customer-profile">
                                                            <img src="assets/images/inner-page/review-image/3.jpg"
                                                                 className="img-fluid blur-up lazyload" alt=""/>
                                                        </div>

                                                        <div className="customer-details">
                                                            <h5>B. Perdue</h5>
                                                            <ul className="rating my-2 d-inline-block">
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
                                                            <p className="font-light">Love the processor speed and the
                                                                sensitivity
                                                                of
                                                                the touch screen.</p>

                                                            <p className="date-custo font-light">- Sep 08, 2021</p>
                                                        </div>
                                                    </div>

                                                    <div className="customer-section">
                                                        <div className="customer-profile">
                                                            <img src="assets/images/inner-page/review-image/4.jpg"
                                                                 className="img-fluid blur-up lazyload" alt=""/>
                                                        </div>

                                                        <div className="customer-details">
                                                            <h5>MSL</h5>
                                                            <ul className="rating my-2 d-inline-block">
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
                                                            <p className="font-light">I purchased the Tablet May 2017
                                                                and now
                                                                April
                                                                2019
                                                                I have to charge it everyday. I don't watch movies on
                                                                it..just
                                                                play
                                                                a game or two while on lunch. I guess now I need to
                                                                power it
                                                                down
                                                                for future use.</p>

                                                            <p className="date-custo font-light">- Sep 08, 2021</p>
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
                </div>
            </section>

            <section className="ratio_asos section-b-space overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-lg-4 mb-3">Customers Also Bought These</h2>
                            <div className="product-wrapper product-style-2 slide-4 p-0 light-arrow bottom-space">
                                <div>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="#">
                                                    <img src="assets/images/fashion/product/front/1.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="#">
                                                    <img src="assets/images/fashion/product/back/1.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </a>
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
                                                        <Link to={"/compare"}>
                                                            <i data-feather="refresh-cw"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/wishlist"} className="wishlist">
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
                                                <a href="#" className="font-default">
                                                    <h5>Slim Fit Plastic Coat</h5>
                                                </a>
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

                                                <button onClick={"location.href = 'cart.html'"}
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
                                                <a href="#">
                                                    <img src="assets/images/fashion/product/front/2.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="#">
                                                    <img src="assets/images/fashion/product/back/2.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </a>
                                            </div>
                                            <div className="label-block">
                                                <span className="label label-black">New</span>
                                                <span className="label label-theme">50% Off</span>
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
                                                        <Link to={"/compare"}>
                                                            <i data-feather="refresh-cw"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/wishlist"} className="wishlist">
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
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main-price">
                                                <a href="#" className="font-default">
                                                    <h5>Blue Leather Jacket</h5>
                                                </a>
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
                                                <h3 className="theme-color">$60.00</h3>
                                                <button onClick={"location.href = 'cart.html'"}
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
                                                <a href="#">
                                                    <img src="assets/images/fashion/product/front/3.jpg/"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="#">
                                                    <img src="assets/images/fashion/product/back/3.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </a>
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
                                                        <Link to={"/compare"}>
                                                            <i data-feather="refresh-cw"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/wishlist"} className="wishlist">
                                                            <i data-feather="heart"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                        <div className="product-details">
                                            <div className="rating-details">
                                                <span className="font-light grid-content">Dress</span>
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
                                                <a href="#" className="font-default">
                                                    <h5>Military Ball Night Dress</h5>
                                                </a>
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
                                                <h3 className="theme-color">$85.00</h3>
                                                <button onClick={"location.href = 'cart.html'"}
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
                                                <a href="#">
                                                    <img src="assets/images/fashion/product/front/4.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="#">
                                                    <img src="assets/images/fashion/product/back/4.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </a>
                                            </div>
                                            <div className="label-block">
                                                <span className="label label-black">New</span>
                                                <span className="label label-theme">50% Off</span>
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
                                                        <Link to={"/compare"}>
                                                            <i data-feather="refresh-cw"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/wishlist"} className="wishlist">
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
                                                <a href="#" className="font-default">
                                                    <h5>Full Slive Yellow Jacket</h5>
                                                </a>
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
                                                <h3 className="theme-color">$69.00</h3>
                                                <button onClick={"location.href = 'cart.html'"}
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
                                                <a href="#">
                                                    <img src="assets/images/fashion/product/front/2.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="#">
                                                    <img src="assets/images/fashion/product/back/2.jpg"
                                                         className="bg-img blur-up lazyload" alt=""/>
                                                </a>
                                            </div>
                                            <div className="label-block">
                                                <span className="label label-black">New</span>
                                                <span className="label label-theme">50% Off</span>
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
                                                        <Link to={"/compare"}>
                                                            <i data-feather="refresh-cw"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/wishlist"} className="wishlist">
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
                                                <a href="#" className="font-default">
                                                    <h5>Blue Leather Jacket</h5>
                                                </a>
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
                                                <h3 className="theme-color">$60.00</h3>
                                                <button onClick={"location.href = 'cart.html'"}
                                                        className="btn listing-content">Add
                                                    To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ratio_asos section-b-space overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-lg-4 mb-3">Customers Also Bought These</h2>
                            <div className="product-wrapper product-style-2 slide-4 p-0 light-arrow bottom-space">
                                <Slider {...settings} >
                                    <div>
                                        <div className="product-box">
                                            <div className="img-wrapper">
                                                <div className="front">
                                                    <a href="product-left-sidebar.html">
                                                        <img src="assets/images/fashion/product/front/1.jpg"
                                                             className="bg-img blur-up lazyload" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="back">
                                                    <a href="product-left-sidebar.html">
                                                        <img src="assets/images/fashion/product/back/1.jpg"
                                                             className="bg-img blur-up lazyload" alt=""/>
                                                    </a>
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
                                                            <a href="compare.html">
                                                                <i data-feather="refresh-cw"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html" className="wishlist">
                                                                <i data-feather="heart"></i>
                                                            </a>
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
                                                    <a href="product-left-sidebar.html" className="font-default">
                                                        <h5>Slim Fit Plastic Coat</h5>
                                                    </a>
                                                    <div className="listing-content">
                                                        <span className="font-light">Regular Fit</span>
                                                        <p className="font-light">Lorem ipsum, dolor sit amet
                                                            consectetur
                                                            adipisicing
                                                            elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                                            aliquid
                                                            ab
                                                            ducimus eaque illum, quibusdam reiciendis id ad consectetur
                                                            quis, animi
                                                            qui, minus quidem eveniet! Dolorum magnam numquam,
                                                            asperiores
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
                                                    <a href="product-left-sidebar.html">
                                                        <img src="assets/images/fashion/product/front/2.jpg"
                                                             className="bg-img blur-up lazyload" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="back">
                                                    <a href="product-left-sidebar.html">
                                                        <img src="assets/images/fashion/product/back/2.jpg"
                                                             className="bg-img blur-up lazyload" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="label-block">
                                                    <span className="label label-black">New</span>
                                                    <span className="label label-theme">50% Off</span>
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
                                                            <a href="compare.html">
                                                                <i data-feather="refresh-cw"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html" className="wishlist">
                                                                <i data-feather="heart"></i>
                                                            </a>
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
                                                            <i className="fas fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="main-price">
                                                    <a href="product-left-sidebar.html" className="font-default">
                                                        <h5>Blue Leather Jacket</h5>
                                                    </a>
                                                    <div className="listing-content">
                                                        <span className="font-light">Regular Fit</span>
                                                        <p className="font-light">Lorem ipsum, dolor sit amet
                                                            consectetur
                                                            adipisicing
                                                            elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                                            aliquid
                                                            ab
                                                            ducimus eaque illum, quibusdam reiciendis id ad consectetur
                                                            quis, animi
                                                            qui, minus quidem eveniet! Dolorum magnam numquam,
                                                            asperiores
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
                                                    <a href="product-left-sidebar.html">
                                                        <img src="assets/images/fashion/product/front/3.jpg"
                                                             className="bg-img blur-up lazyload" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="back">
                                                    <a href="product-left-sidebar.html">
                                                        <img src="assets/images/fashion/product/back/3.jpg"
                                                             className="bg-img blur-up lazyload" alt=""/>
                                                    </a>
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
                                                            <a href="compare.html">
                                                                <i data-feather="refresh-cw"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html" className="wishlist">
                                                                <i data-feather="heart"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-details">
                                                <div className="rating-details">
                                                    <span className="font-light grid-content">Dress</span>
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
                                                    <a href="product-left-sidebar.html" className="font-default">
                                                        <h5>Military Ball Night Dress</h5>
                                                    </a>
                                                    <div className="listing-content">
                                                        <span className="font-light">Regular Fit</span>
                                                        <p className="font-light">Lorem ipsum, dolor sit amet
                                                            consectetur
                                                            adipisicing
                                                            elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                                            aliquid
                                                            ab
                                                            ducimus eaque illum, quibusdam reiciendis id ad consectetur
                                                            quis, animi
                                                            qui, minus quidem eveniet! Dolorum magnam numquam,
                                                            asperiores
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
                                                    <a href="product-left-sidebar.html">
                                                        <img src="assets/images/fashion/product/front/4.jpg"
                                                             className="bg-img blur-up lazyload" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="back">
                                                    <a href="product-left-sidebar.html">
                                                        <img src="assets/images/fashion/product/back/4.jpg"
                                                             className="bg-img blur-up lazyload" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="label-block">
                                                    <span className="label label-black">New</span>
                                                    <span className="label label-theme">50% Off</span>
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
                                                            <a href="compare.html">
                                                                <i data-feather="refresh-cw"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html" className="wishlist">
                                                                <i data-feather="heart"></i>
                                                            </a>
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
                                                    <a href="product-left-sidebar.html" className="font-default">
                                                        <h5>Full Slive Yellow Jacket</h5>
                                                    </a>
                                                    <div className="listing-content">
                                                        <span className="font-light">Regular Fit</span>
                                                        <p className="font-light">Lorem ipsum, dolor sit amet
                                                            consectetur
                                                            adipisicing
                                                            elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                                            aliquid
                                                            ab
                                                            ducimus eaque illum, quibusdam reiciendis id ad consectetur
                                                            quis, animi
                                                            qui, minus quidem eveniet! Dolorum magnam numquam,
                                                            asperiores
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
                                                    <a href="product-left-sidebar.html">
                                                        <img src="assets/images/fashion/product/front/2.jpg"
                                                             className="bg-img blur-up lazyload" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="back">
                                                    <a href="product-left-sidebar.html">
                                                        <img src="assets/images/fashion/product/back/2.jpg"
                                                             className="bg-img blur-up lazyload" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="label-block">
                                                    <span className="label label-black">New</span>
                                                    <span className="label label-theme">50% Off</span>
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
                                                            <a href="compare.html">
                                                                <i data-feather="refresh-cw"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html" className="wishlist">
                                                                <i data-feather="heart"></i>
                                                            </a>
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
                                                    <a href="product-left-sidebar.html" className="font-default">
                                                        <h5>Blue Leather Jacket</h5>
                                                    </a>
                                                    <div className="listing-content">
                                                        <span className="font-light">Regular Fit</span>
                                                        <p className="font-light">Lorem ipsum, dolor sit amet
                                                            consectetur
                                                            adipisicing
                                                            elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                                                            aliquid
                                                            ab
                                                            ducimus eaque illum, quibusdam reiciendis id ad consectetur
                                                            quis, animi
                                                            qui, minus quidem eveniet! Dolorum magnam numquam,
                                                            asperiores
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
                                </Slider>
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

            <div className="sticky-bottom-cart">
                <div className="container">
                    <div className="cart-content">
                        <div className="product-image">
                            <img src="assets/images/fashion/instagram/1.jpg" className="img-fluid blur-up lazyload"
                                 alt=""/>
                            <div className="content">
                                <h5>men yellow jacket</h5>
                                <h6>$32.96
                                    <del className="font-light">$459.00</del>
                                    <span>55% off</span></h6>
                            </div>
                        </div>
                        <div className="selection-section">
                            <div className="form-group mb-0">
                                <select id="inputState" className="form-control form-select">
                                    <option disabled="" selected="">Choose color...</option>
                                    <option>Pink</option>
                                    <option>Blue</option>
                                    <option>Grey</option>
                                    <option>Pink</option>
                                </select>
                            </div>
                            <div className="form-group mb-0">
                                <select id="input-state" className="form-control form-select">
                                    <option selected="" disabled="">Choose size...</option>
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                    <option>Extra Large</option>
                                </select>
                            </div>
                        </div>
                        <div className="add-btn">
                            <Link
                                className="btn default-light-theme default-theme default-theme-2 outline-button wishlist-btn"
                                to={"/wishlist"}><i className="fa fa-bookmark"></i> Wishlist</Link>
                            <Link className="btn default-light-theme default-theme default-theme-2 outline-button"
                                  to={"/cart"}><i className="fas fa-shopping-cart"></i> Add To Cart</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="recently-purchase d-md-flex d-none">
                <img src="assets/images/fashion/instagram/3.jpg" className="img-fluid blur-up lazyload" alt=""/>
                <div className="media-body">
                    <div>
                        <h4>Some recently purchase this item</h4>
                        <a href="javascript:void(0)">
                    <span className="product-name">
                        Floral Dress
                    </span>
                        </a>
                        <small className="timeAgo">50 minutes ago</small>
                    </div>
                </div>
                <a href="javascript:void(0)" className="close-popup fa fa-times"></a>
            </div>

            <div className="modal fade quick-view-modal" id="quick-view">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <div className="quick-view-image">
                                        <div className="quick-view-slider">
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
                                                <div>
                                                    <div className="product-box">
                                                        <div className="img-wrapper">
                                                            <div className="front">
                                                                <a href="#">
                                                                    <img src="assets/images/fashion/product/front/1.jpg"
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
                                                                    <img src="assets/images/fashion/product/front/2.jpg"
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
                                                                    <img src="assets/images/fashion/product/front/3.jpg"
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
                                                                    <img src="assets/images/fashion/product/front/4.jpg"
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal modal-size fade" id="sizemodal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src="assets/images/size-chart.jpg" alt="" className="img-fluid blur-up lazyload"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="added-notification">
                <img src="assets/images/fashion/banner/2.jpg" className="img-fluid blur-up lazyload" alt=""/>
                <h3>added to cart</h3>
            </div>


        </>
    );
}

export default SingleProduct;