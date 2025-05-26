import { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container checkout-page-container">
      <h1 className="section-title">Thanh Toán</h1>

      <div className="checkout-content-area">
        {/* Shipping Information */}
        <div className="shipping-info-form">
          <h2 className="form-section-title">Thông Tin Giao Hàng</h2>
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group grid-col-2">
              <div>
                <label className="form-label">
                  Tên
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="form-label">
                  Họ
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Địa Chỉ
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group grid-col-3">
              <div>
                <label className="form-label">
                  Thành Phố
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="form-label">
                  Tỉnh/Thành
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="form-label">
                  Mã Bưu Điện
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <h2 className="form-section-title payment-info-title">Thông Tin Thanh Toán</h2>

            <div className="form-group">
              <label className="form-label">
                Số Thẻ
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Tên Trên Thẻ
              </label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group grid-col-2">
              <div>
                <label className="form-label">
                  Ngày Hết Hạn
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary place-order-button"
            >
              Đặt Hàng
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2 className="order-summary-title">Tổng Đơn Hàng</h2>
          <div className="order-summary-details">
            <div className="order-summary-line">
              <span>Tạm tính</span>
              <span>330.000đ</span>
            </div>
            <div className="order-summary-line">
              <span>Phí vận chuyển</span>
              <span>10.000đ</span>
            </div>
            <div className="order-summary-total">
              <div>
                <span>Tổng cộng</span>
                <span>340.000đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 