import React, { useState } from "react";
import MyDashboard from "./mydashboard";
import MyOrder from "./myorder";
import MyWishlist from './mywishlist';
import SaveAddres from './saveaddres';
import CardPayment from './cardpayment';
import MyProfile from './mypofile';
import DeleteYourAccount from './deleteyouraccount';

// UserDashboard css
import './userdashboard.css';

// Function css
import './index.css';

const Dashboard = () => {


  const [On, setOn] = useState(1);
    
  const Off=(index)=> {
    setOn(index);
  }
  


  return (
    
    <div>
      <section className="section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ul
                className="nav nav-tabs custome-nav-tabs flex-column category-option"
                id="myTab"
              >
                 <div className={On === 1 ? "tabs active-tabs":"tabs"} onClick={()=>Off(1)}><li  className="nav-item mb-2">
                  <button
                    className="nav-link font-light active"
                    id="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#dash"
                    type="button"
                  >
                    <i className="fas fa-angle-right"></i>Dashboard
                  </button>
                </li>
                </div>
                
                <div className={On ===1 ? "tabs active-tabs":"tabs"} onClick={()=>Off(2)}><li  className="nav-item mb-2">
                  <button
                    className="nav-link font-light"
                    id="1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#order"
                    type="button"
                  >
                    <i className="fas fa-angle-right"></i>Orders
                  </button>
                </li></div>
                
                <div className={On ===1 ? "tabs active-tabs":"tabs"} onClick={()=>Off(3)}> <li className="nav-item mb-2">
                  <button
                    className="nav-link font-light"
                    id="2-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#wishlist"
                    type="button"
                  >
                    <i className="fas fa-angle-right"></i>Wishlist
                  </button>
                </li></div>
               
                <div className={On ===1 ? "tabs active-tabs":"tabs"} onClick={()=>Off(4)}><li className="nav-item mb-2">
                  <button
                    className="nav-link font-light"
                    id="3-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#save"
                    type="button"
                  >
                    <i className="fas fa-angle-right"></i>Saved Address
                  </button>
                </li></div>
                
                <div className={On ===1 ? "tabs active-tabs":"tabs"} onClick={()=>Off(5)}><li className="nav-item mb-2">
                  <button
                    className="nav-link font-light"
                    id="4-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#pay"
                    type="button"
                  >
                    <i className="fas fa-angle-right"></i>Payment
                  </button>
                </li></div>
                
                <div className={On ===1 ? "tabs active-tabs":"tabs"} onClick={()=>Off(6)}> <li className="nav-item mb-2">
                  <button
                    className="nav-link font-light"
                    id="5-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                  >
                    <i className="fas fa-angle-right"></i>Profile
                  </button>
                </li></div>
               
                <div className={On ===1 ? "tabs active-tabs":"tabs"} onClick={()=>Off(7)}><li className="nav-item">
                  <button
                    className="nav-link font-light"
                    id="6-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#security"
                    type="button"
                  >
                    <i className="fas fa-angle-right"></i>Security
                  </button>
                </li></div>
                
              </ul>
            </div>

            <div className="col-lg-9">
              <div className="filter-button dash-filter dashboard">
                <button className="btn btn-solid-default btn-sm fw-bold filter-btn">
                  Show Menu
                </button>
              </div>

              <div className="tab-content" id="myTabContent">

             
              
              
              
             
              
              


    <div className={On ===1 ? "disc active-disc":"disc"}  id='a1'>< MyDashboard/></div>
    <div className={On ===2 ? "disc active-disc":"disc"} id='a2'><MyOrder/></div>
    <div className={On ===3 ? "disc active-disc":"disc"} id='a3'><MyWishlist/>    </div>
    <div className={On ===4 ? "disc active-disc":"disc"} id='a4'><SaveAddres/></div>
    <div className={On ===5 ? "disc active-disc":"disc"} id='a5'> <CardPayment/></div>
    <div className={On ===6 ? "disc active-disc":"disc"} id='a6'><MyProfile/></div>
    <div className={On ===7 ? "disc active-disc":"disc"} id='a7'><DeleteYourAccount/></div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* < />!-- user dashboard section end --> */}
    </div>
  );
};

export default Dashboard;
