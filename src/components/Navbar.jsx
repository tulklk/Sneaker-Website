import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, Bars3Icon, HeartIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          SneakerWeb
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Trang Chủ
          </Link>
          <Link to="/shop" className="nav-link">
            Cửa Hàng
          </Link>
          <Link to="/favorites" className="nav-link">
            <HeartIcon className="icon-size" />
          </Link>
          <Link to="/login" className="nav-link">
            <UserIcon className="icon-size" />
          </Link>
          <Link to="/cart" className="nav-link">
            <div style={{ position: 'relative' }}>
              <ShoppingCartIcon className="icon-size" />
              <span style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: '#ec4899', color: 'white', borderRadius: '9999px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>
                0
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button">
          <Bars3Icon className="icon-size" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 