import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../services/UserService'; // 👈 Thêm dòng này
import Navbar from '../components/Navbar';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('❌ Mật khẩu không khớp');
      return;
    }

    try {
      const response = await registerUser({ username, email, password });
      console.log('Đăng ký thành công:', response.data);
      setSuccess('✅ Tạo tài khoản thành công!');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.error('Đăng ký thất bại:', err);
      setError('❌ Đăng ký thất bại. Vui lòng thử lại.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-container">
        <div className="auth-form-card">
          <h2 className="auth-title">Đăng Ký</h2>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="username" className="form-label">Tên đăng nhập:</label>
              <input
                type="text"
                id="username"
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
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
            <div className="form-group">
              <label htmlFor="confirm-password" className="form-label">Xác nhận mật khẩu:</label>
              <input
                type="password"
                id="confirm-password"
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            <button type="submit" className="btn btn-primary auth-button">Đăng Ký</button>
          </form>
          <p className="auth-switch-text">
            Đã có tài khoản? <Link to="/login" className="auth-switch-link">Đăng nhập ngay</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
