import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./common/footer/Footer";
import Navbar from "./common/navbar/Navbar";
import Home from "./pages/home/model";
import PageNotFound from "./pages/404/PageNotFound";
import Cart from "./pages/Cart/model";
import Wishlist from "./pages/Wishlist/model";
import Compare from "./pages/Compare/model";
import Checkout from "./pages/Checkout/model";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
