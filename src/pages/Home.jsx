import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Nike Air Max 270',
      price: 150,
      image: 'https://via.placeholder.com/300x200?text=Nike+Air+Max',
      category: 'Chạy Bộ',
    },
    {
      id: 2,
      name: 'Adidas Ultraboost 22',
      price: 180,
      image: 'https://via.placeholder.com/300x200?text=Adidas+Ultraboost',
      category: 'Thời Trang',
    },
    {
      id: 3,
      name: 'New Balance 574',
      price: 100,
      image: 'https://via.placeholder.com/300x200?text=New+Balance',
      category: 'Cổ Điển',
    },
  ];

  const categories = [
    {
      title: 'Giày Chạy Bộ',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3',
    },
    {
      title: 'Giày Thời Trang',
      image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3',
    },
    {
      title: 'Giày Cổ Điển',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Khám Phá Bộ Sưu Tập Giày Mới Nhất</h1>
            <p className="hero-text">
              Tìm kiếm phong cách của riêng bạn với bộ sưu tập giày thể thao và thời trang cao cấp của chúng tôi
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link to="/shop" className="btn btn-primary">
                Mua Sắm Ngay
              </Link>
              <Link to="/shop" className="btn btn-outline">
                Xem Bộ Sưu Tập
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container section-padding">
        <h2 className="section-title">Danh Mục Nổi Bật</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              key={index}
              to="/shop"
              className="category-card"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="category-overlay" />
              <div className="category-content">
                <h3 className="category-title">{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container section-padding">
        <h2 className="section-title">
          Sản Phẩm Nổi Bật
        </h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div style={{ position: 'relative' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <span className="product-category-tag">
                  {product.category}
                </span>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">{product.price.toLocaleString('vi-VN')}đ</p>
                <Link
                  to={`/product/${product.id}`}
                  className="btn view-details-button"
                >
                  Xem Chi Tiết
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter section-padding">
        <div className="container">
          <h2 className="newsletter-title">Đăng Ký Nhận Tin</h2>
          <p className="newsletter-text">
            Đăng ký để nhận thông tin về các sản phẩm mới và ưu đãi đặc biệt
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Nhập địa chỉ email của bạn"
              className="newsletter-input"
            />
            <button type="submit" className="btn btn-primary">
              Đăng Ký
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home; 