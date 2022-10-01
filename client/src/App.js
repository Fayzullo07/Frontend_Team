import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./common/footer/Footer";
import Navbar from "./common/navbar/Navbar";
import Home from "./pages/home/model";
import PageNotFound from './pages/404/PageNotFound'
import Login from "./common/login/login";
import SignUp from "./common/signUp/signUp";
import ForgotPassword from "./common/forgot/forgotPassword";
import Faq from "./pages/Faq/Faq";
import ContactUs from "./pages/ContactUs/ContactUs";
import Compare from "./pages/Compare/Compare";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Compare />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
          {/* <Login/>
    <SignUp/> */}
    {/* <ForgotPassword/> */}
    </BrowserRouter>

  );
}

export default App;
