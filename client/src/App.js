<<<<<<< HEAD
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
  );
}

export default App;
