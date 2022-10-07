import React from "react";
import Heading from "../../common/Heading";
import SubscribeOurNews from "../../common/SubscribeOurNews";
import WishListTable from "./components/WishListTable";

const Wishlist = () => {
  return (
    <>
      {/* Breadcrumb section start */}
      <Heading title1="Wishlist" />
      {/* Breadcrumb section end */}

      {/* Cart Section Start */}
      <section className="wish-list-section section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 table-responsive">
              <WishListTable />
            </div>
          </div>
        </div>
      </section>
      {/* Cart Section End */}

      {/* Subscribe Section Start */}
      <SubscribeOurNews />
      {/* Subscribe Section End */}
    </>
  );
};

export default Wishlist;
