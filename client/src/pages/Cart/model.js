import React from "react";
import Checkout from "./components/Checkout";
import ContinueShop from "./components/ContinueShop";
import Timer from "./components/Timer";
import CartTable from "./components/CartTable";
import Heading from "../../common/Heading";
import SubscribeOurNews from "../../common/SubscribeOurNews";

const Cart = () => {
  return (
    <>
      {/* Breadcrumb section start */}
      <Heading title1="Shopping Cart" title2="Cart" />
      {/* Breadcrumb section end */}

      <section className="cart-section section-b-space">
        <div className="container">
          <div className="row">
            <Timer />
            <CartTable />
            <ContinueShop />
            <Checkout />
          </div>
        </div>
      </section>

      {/* Subscribe Section Start */}
      <SubscribeOurNews/>
      {/* Subscribe Section End */}
    </>
  );
};

export default Cart;
