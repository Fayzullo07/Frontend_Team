import { Route, Routes } from "react-router-dom";
import Footer from "./common/footer/Footer";
import Navbar from "./common/navbar/Navbar";
import Home from "./pages/home/model";
import PageNotFound from "./pages/404/PageNotFound";
import UserDeshboard from "./pages/UserDashboard/model";

function App() {
  return (
    
      <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="USD" element={<UserDeshboard />} />

      </Routes>
      <Footer />
      </div>
  
  );
}

export default App;
