import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Thêm logic đăng xuất ở đây nếu cần (ví dụ: xóa token, clear state)
    navigate('/'); // Quay về trang chủ
  };

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-menu">
          <ul>
            <li className="active">
              <button onClick={() => navigate('/admin/dashboard')}>
                <i className="fas fa-home"></i>
                Dashboard
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/admin/customers')}>
                <i className="fas fa-users"></i>
                Khách hàng
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/admin/orders')}>
                <i className="fas fa-shopping-cart"></i>
                Đơn hàng
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/admin/products')}>
                <i className="fas fa-shoe-prints"></i>
                Sản phẩm
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/admin/categories')}>
                <i className="fas fa-tags"></i>
                Danh mục
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/admin/settings')}>
                <i className="fas fa-cog"></i>
                Cài đặt
              </button>
            </li>
            {/* Logout Button */}
            <li>
              <button onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i>
                Đăng xuất
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content-area">
        <div className="admin-content">
          {/* QUICK ACTIONS */}
          <div className="admin-section">
            <h2>Chức năng nhanh</h2>
            <div className="action-buttons">
              <button onClick={() => navigate('/admin/customers')}>Quản lý khách hàng</button>
              <button onClick={() => navigate('/admin/orders')}>Quản lý đơn hàng</button>
            </div>
          </div>

          {/* STATISTICS */}
          <div className="admin-section">
            <h2>Thống kê</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Tổng khách hàng</h3>
                <p>0</p>
              </div>
              <div className="stat-card">
                <h3>Tổng đơn hàng</h3>
                <p>0</p>
              </div>
              <div className="stat-card">
                <h3>Đơn thành công</h3>
                <p>0</p>
              </div>
              <div className="stat-card">
                <h3>Doanh thu</h3>
                <p>₫0</p>
              </div>
            </div>
          </div>

          {/* TABLE PLACEHOLDER */}
          <div className="admin-section">
            <h2>Danh sách khách hàng</h2>
            <div className="placeholder-table">Hiển thị danh sách khách hàng tại đây</div>
          </div>

          <div className="admin-section">
            <h2>Danh sách đơn hàng</h2>
            <div className="placeholder-table">Hiển thị danh sách đơn hàng tại đây</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
