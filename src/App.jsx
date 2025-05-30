import { Routes, Route, useLocation } from 'react-router-dom';
import PageLoader from './components/PageLoader';
import TrangChu from './pages/Home';
import CuaHang from './pages/Shop';
import ChiTietSanPham from './pages/ProductDetail';
import ThanhToan from './pages/Checkout';
import GioHang from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboardPage from './pages/AdminDashboardPage';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin/dashboard';

  return (
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<PageLoader><TrangChu /></PageLoader>} />
          <Route path="/shop" element={<PageLoader><CuaHang /></PageLoader>} />
          <Route path="/product/:id" element={<PageLoader><ChiTietSanPham /></PageLoader>} />
          <Route path="/cart" element={<PageLoader><GioHang /></PageLoader>} />
          <Route path="/checkout" element={<PageLoader><ThanhToan /></PageLoader>} />
          <Route path="/admin/dashboard" element={<PageLoader><AdminDashboardPage /></PageLoader>} />
          <Route path="/account" element={<PageLoader>{null}</PageLoader>} />
          <Route path="/login" element={<PageLoader><Login /></PageLoader>} />
          <Route path="/register" element={<PageLoader><Register /></PageLoader>} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
