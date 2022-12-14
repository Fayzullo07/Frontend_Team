import React from 'react';

function Faq(props) {
    return (
        <>
            {/*<a> teglaridagi href ni to'g'irlash kerak.
            Xamma Componentlar bajarib bo'lingandan so'ng yana qaytattan
            xamma <a> teglari ko'rib chiqilib href lari to'g'ri
            linkga yo'naltirilishi kerak.
            */}


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
                        <div className="col-12 search-section">
                            <h3>How can we help you?</h3>
                            <div className="search-bar">
                                <div className="input-group search-bar">
                                    <input type="search" className="form-control" placeholder="Search"/>
                                        <button className="input-group-text" id="basic-addon3">
                                            <i className="fas fa-search"></i>
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq-section pt-0">
                <div className="container">
                    <div className="row g-lg-5 g-4">
                        <div className="col-md-4 zi-1">
                            <div className="faq-contain">
                                <div className="faq-image">
                                    <img src="assets/images/inner-page/faq/guides.png"
                                         className="img-fluid blur-up lazyload" alt=""/>
                                </div>
                                <h2>Guides</h2>
                                <h5>Guides related to buying products, latest trends, upcoming products.</h5>
                            </div>
                        </div>

                        <div className="col-md-4 zi-1">
                            <div className="faq-contain">
                                <div className="faq-image">
                                    <img src="assets/images/inner-page/faq/faq.png"
                                         className="img-fluid blur-up lazyload" alt=""/>
                                </div>
                                <h2>FAQ</h2>
                                <h5>Need some help with your order or gor a question that you need answered.</h5>
                            </div>
                        </div>

                        <div className="col-md-4 zi-1">
                            <div className="faq-contain">
                                <div className="faq-image">
                                    <img src="assets/images/inner-page/faq/community.png"
                                         className="img-fluid blur-up lazyload" alt=""/>
                                </div>
                                <h2>Community</h2>
                                <h5>Join our large community who will help you in any query.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq-details section-b-space">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="faq-link-box">
                                <ul>
                                    <li>
                                        <a href="#1">
                                            <h4>1.</h4>
                                            <h5>How does it work?</h5>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#2">
                                            <h4>2.</h4>
                                            <h5>Another very important question in FAQ?</h5>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#3">
                                            <h4>3.</h4>
                                            <h5>Another important quesstion in FAQ?</h5>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#4">
                                            <h4>4.</h4>
                                            <h5>Another question in FAQ?</h5>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#5">
                                            <h4>5.</h4>
                                            <h5>Another very important question in FAQ?</h5>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#6">
                                            <h4>6.</h4>
                                            <h5>Another question in FAQ?</h5>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-8">
                            <div className="faq-heading" id="1">
                                <i data-feather="help-circle" className="theme-color"></i>
                                <div className="faq-option">
                                    <h3>How does it work?</h3>
                                    <h6 className="font-light">When choosing a static caravan you will probably look for
                                        the holiday
                                        park which meets
                                        your requirements and the move onto the caravan selection the right holiday park
                                        is
                                        vital to ensure a long term ownership.</h6>
                                </div>
                            </div>

                            <div className="faq-heading" id="2">
                                <i data-feather="help-circle" className="theme-color"></i>
                                <div className="faq-option">
                                    <h3>Another very important question in FAQ?</h3>
                                    <h6 className="font-light">Now for yhe caravan and looking for the right caravan to
                                        suit your
                                        needs. Most of the
                                        parks will deal with majority of the manufactures. If buying directly from the
                                        park you
                                        will probably deal with a salesperson instead of direct with the manufactures.
                                        You Can
                                        collect brochures direct from the manufactures. you can collect brochures direct
                                        from
                                        the manufactures to research all the models and specifications which will not
                                        only
                                        ensure you choose the correct model but also help you to understand what to look
                                        for and
                                        choice of different modals. To see the caravan you can vixit them at key caravan
                                        exhibitions as most top manufactures will display there, see events.</h6>
                                </div>
                            </div>

                            <div className="faq-heading" id="3">
                                <i data-feather="help-circle" className="theme-color"></i>
                                <div className="faq-option">
                                    <h3>Another important quesstion in FAQ?</h3>
                                    <h6 className="font-light">The static holiday caravan has been designed for holiday
                                        use instead
                                        of full time
                                        living. With its modern construction and use of high quality materials the
                                        static
                                        caravan should be built to British and European standard: BS EN 1647 but some
                                        luxury
                                        caravans are built to BS 3632 confirming to residential standards.</h6>
                                </div>
                            </div>

                            <div className="faq-heading" id="4">
                                <i data-feather="help-circle" className="theme-color"></i>
                                <div className="faq-option">
                                    <h3>Another question in FAQ?</h3>
                                    <h6 className="font-light">Normal static caravan can come in either one or two
                                        sectiond with
                                        width up to 22ft and
                                        60ft long. If you have a one piece model this is a single unit and the two piece
                                        is
                                        known as a twin and usually assembled on site.</h6>
                                </div>
                            </div>

                            <div className="faq-heading" id="5">
                                <i data-feather="help-circle" className="theme-color"></i>
                                <div className="faq-option">
                                    <h3>Another very important question in FAQ?</h3>
                                    <h6 className="font-light">Decide on how many bedrooms you require as most caravans
                                        can be from
                                        2 to 4 bedrooms but
                                        up to eight berths. manufactures will normally have their own layout but will
                                        offer but
                                        will a number of ranges depending on your budget.</h6>
                                </div>
                            </div>

                            <div className="faq-heading" id="6">
                                <i data-feather="help-circle" className="theme-color"></i>
                                <div className="faq-option">
                                    <h3>Another question in FAQ?</h3>
                                    <h6 className="font-light">The static holiday caravan has been designed for holiday
                                        use instead
                                        of full time
                                        living. With its modern construction and use of high quality materials the
                                        static
                                        caravan should be built to British and European standard: BS EN 1647 but some
                                        luxury
                                        caravans are built to BS 3632 confirming to residential standards.</h6>
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


        </>
    );
}

export default Faq;