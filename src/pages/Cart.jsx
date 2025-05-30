import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';

const Cart = () => {
  // Mock cart data - in a real app, this would come from a state management solution
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Nike Air Max 270',
      price: 150,
      size: 'US 9',
      quantity: 1,
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png',
    },
    {
      id: 2,
      name: 'Adidas Ultraboost 22',
      price: 180,
      size: 'US 10',
      quantity: 2,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/2c1a0a0a0a0a0a0a0a0a0a0a0a0a0a0a/ultraboost-22-shoes.jpg',
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar />
      <div className="container cart-page-container">
        <h1 className="section-title">Giỏ Hàng</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <p>Giỏ hàng của bạn đang trống</p>
            <Link
              to="/shop"
              className="btn btn-primary"
            >
              Tiếp Tục Mua Sắm
            </Link>
          </div>
        ) : (
          <div className="cart-content-area">
            {/* Cart Items */}
            <div className="cart-items-list">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="cart-item"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-info">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-size">Kích thước: {item.size}</p>
                      <p className="cart-item-price">{item.price.toLocaleString('vi-VN')}đ</p>
                    </div>
                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="quantity-button"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="quantity-button"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="remove-item-button"
                      >
                        <TrashIcon className="icon-size" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="order-summary">
              <h2 className="order-summary-title">Tổng Đơn Hàng</h2>
              <div className="order-summary-details">
                <div className="order-summary-line">
                  <span>Tạm tính</span>
                  <span>{subtotal.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="order-summary-line">
                  <span>Phí vận chuyển</span>
                  <span>{shipping.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="order-summary-total">
                  <div className="flex justify-between font-bold">
                    <span>Tổng cộng</span>
                    <span>{total.toLocaleString('vi-VN')}đ</span>
                  </div>
                </div>
              </div>
              <Link
                to="/checkout"
                className="btn btn-primary checkout-button"
              >
                Tiến Hành Thanh Toán
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart; 