import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, Bars3Icon, HeartIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.css';
import { useUser } from '../contexts/UserContext';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const { user, logout } = useUser();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate('/login');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
          {user ? (
            <div className="nav-user-dropdown" ref={dropdownRef}>
              <button className="nav-user-info-toggle" onClick={toggleDropdown}>
                <span className="nav-username">Xin chào, {user.username}</span>
                {isDropdownOpen ? (
                  <ChevronUpIcon className="icon-size ml-1" />
                ) : (
                  <ChevronDownIcon className="icon-size ml-1" />
                )}
              </button>
              {isDropdownOpen && (
                <div className="nav-dropdown-menu">
                  <Link to="/profile" className="nav-dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                    Hồ sơ
                  </Link>
                  <button onClick={handleLogout} className="nav-dropdown-item">
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="nav-link">
              <UserIcon className="icon-size" />
            </Link>
          )}
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