<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react";
import Search from "./Components/Search/Search";
import UserDashboard from "./UserDashboard/UserDashboard";
import Wishlist from "./Wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      {/* <Search /> */}
      {/* <Wishlist /> */}
      {/* <UserDashboard /> */}
    </div>
=======
>>>>>>> e35fb92daf4536981acfe2bf2933ca0e2c5a1623
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./common/footer/Footer";
import Navbar from "./common/navbar/Navbar";
import Home from "./pages/home/model";
import PageNotFound from "./pages/404/PageNotFound";
import Login from "./common/login/login";
import SignUp from "./common/signUp/signUp";
import ForgotPassword from "./common/forgot/forgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgotPass" element={<ForgotPassword />} />
      </Routes>
      <Footer />
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <ForgotPassword /> */}
    </BrowserRouter>
<<<<<<< HEAD
=======
import React from "react";
import Search from "./Components/Search/Search";
import UserDashboard from "./UserDashboard/UserDashboard";
import Wishlist from "./Wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      {/* <Search /> */}
      {/* <Wishlist /> */}
      {/* <UserDashboard /> */}
    </div>
>>>>>>> asaddbek
=======
>>>>>>> 7fecf4d7396297c9dac4a036aa7570211e63e2f1
>>>>>>> e35fb92daf4536981acfe2bf2933ca0e2c5a1623
  );
}

export default App;
