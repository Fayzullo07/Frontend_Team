import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./common/footer/Footer";
import Navbar from "./common/navbar/Navbar";
import Home from "./pages/home/model";
import PageNotFound from "./pages/404/PageNotFound";
import Login from "./common/login/login";
import SignUp from "./common/signUp/signUp";
import ForgotPassword from "./common/forgot/forgotPassword";
import OrderTracking from "./pages/orderTracking/OrderTracking";
import OrderSuccess from "./pages/orderSuccess/OrderSuccess";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Faq from "./pages/Faq/Faq";
import ContactUs from "./pages/ContactUs/ContactUs";
import Compare from "./pages/Compare/Compare";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SingleProduct />} />
        <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/forgotPass" element={<ForgotPassword />} />
          <Route path="/single_product" element={<SingleProduct />} />
          <Route path="/order_trackigng" element={<OrderTracking />} />
          {/*<Route path="/wishlist" element={<Wishlist />} />*/}
          {/*<Route path="/compare" element={<Compare />} />*/}
          {/*<Route path="/cart" element={<Cart />} />*/}
          {/*<Route path="/shop_list" element={<ShopList />} />*/}
        <Route path="/" element={<Compare />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
