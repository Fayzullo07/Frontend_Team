import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import PageNotFound from "./pages/404/PageNotFound";
import Home from "./pages/home/model";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
