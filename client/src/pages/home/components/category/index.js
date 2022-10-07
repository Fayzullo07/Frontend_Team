import React from 'react'

const index = () => {
  return (
    <>  
    <section class="timer-banner-style-2">
        <div class="container">
            <div class="row gy-3">
                <div class="col-lg-12">
                    <div class="discount-image-details discount-spacing">
                        <img src="assets/images/fashion/banner/8.jpg" class="bg-img blur-up lazyload" alt=""/>

                        <div class="discunt-details">
                            <div>
                                <div class="heart-button heart-button-2">
                                    <i class="fas fa-heart theme-color"></i>
                                </div>

                                <h5 class="mt-3">Special Discount <span class="theme-color">70% OFF</span></h5>
                                <h2 class="my-3 deal-text">Deal Of The Day <br/> from <span class="theme-color">$75</span>
                                </h2>
                                <div class="timer-style-2 mt-xl-1 my-2 justify-content-center d-flex">
                                    <ul>
                                        <li>
                                            <div class="counter">
                                                <div>
                                                    <h2 id="days1" class="theme-color"></h2>Days
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="counter">
                                                <div>
                                                    <h2 id="hours1" class="theme-color"></h2>Hour
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="counter">
                                                <div>
                                                    <h2 id="minutes1" class="theme-color"></h2>Min
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="counter">
                                                <div>
                                                    <h2 id="seconds1" class="theme-color"></h2>Sec
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <button onclick="location.href = 'shop-left-sidebar.html';" type="button" class="btn default-light-theme default-theme mt-2">Shop
                                    Now</button>

                                <div class="timer-bg timer-bg-center d-lg-block d-none">
                                    <h3 class="mt-0">Latest Jacket</h3>
                                    <span>BUY ONE GET ONE FREE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default index