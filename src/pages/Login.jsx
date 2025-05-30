import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/UserService';
import { useUser } from '../contexts/UserContext';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(email, password);
      const { user } = response.data;

      // Lưu user và token nếu có
      login(user);
      localStorage.setItem('user', JSON.stringify(user)); // lưu toàn bộ user
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // nếu bạn dùng JWT sau này
      }

      toast.success(`✅ Xin chào ${user.username}!`);
      
      // Kiểm tra role và chuyển hướng
      if (user.role === 'admin') {
        setTimeout(() => navigate('/admin/dashboard'), 1000);
      } else {
        setTimeout(() => navigate('/'), 1000);
      }
    } catch (err) {
      console.error('Đăng nhập thất bại:', err);
      toast.error('❌ Email hoặc mật khẩu không đúng!');
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-container">
        <div className="auth-form-card">
          <h2 className="auth-title">Đăng Nhập</h2>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Mật khẩu:</label>
              <input
                type="password"
                id="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary auth-button">Đăng Nhập</button>
          </form>
          <p className="auth-switch-text">
            Chưa có tài khoản? <Link to="/register" className="auth-switch-link">Đăng ký ngay</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
