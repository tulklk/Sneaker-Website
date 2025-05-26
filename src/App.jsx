import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TrangChu from './pages/Home';
import CuaHang from './pages/Shop';
import ChiTietSanPham from './pages/ProductDetail';
import ThanhToan from './pages/Checkout';
import GioHang from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<TrangChu />} />
            <Route path="/shop" element={<CuaHang />} />
            <Route path="/product/:id" element={<ChiTietSanPham />} />
            <Route path="/cart" element={<GioHang />} />
            <Route path="/checkout" element={<ThanhToan />} />
            <Route path="/account" element={null} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
