import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-section">
            <h3>Về Chúng Tôi</h3>
            <p className="footer-text">
              Điểm đến một cửa cho giày thể thao và thời trang đường phố cao cấp.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Hỗ Trợ</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about">Giới Thiệu</Link>
              </li>
              <li>
                <Link to="/careers">Tuyển Dụng</Link>
              </li>
              <li>
                <Link to="/contact">Liên Hệ</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h3>Chính Sách</h3>
            <ul className="footer-links">
              <li>
                <Link to="/shipping">Vận Chuyển</Link>
              </li>
              <li>
                <Link to="/returns">Đổi Trả</Link>
              </li>
              <li>
                <Link to="/faq">Câu Hỏi Thường Gặp</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3>Đăng Ký Nhận Tin</h3>
            <p className="footer-text newsletter-text-footer">
              Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt
            </p>
            <form className="newsletter-footer-form">
              <input
                type="email"
                placeholder="Email của bạn"
                className="newsletter-footer-input"
              />
              <button
                type="submit"
                className="newsletter-footer-button"
              >
                Đăng Ký
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 SneakerWeb. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 