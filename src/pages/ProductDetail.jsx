import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'; // Import icons
import { toast } from 'react-toastify'; // Import toast from react-toastify

function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for current image index

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: parseInt(id),
    name: 'Nike Air Max 270',
    brand: 'Nike',
    price: 150,
    description: 'Nike Air Max 270 mang đến cảm giác êm ái với lớp đệm lớn và cảm giác mềm mại. Giày có thiết kế ống lót co giãn tạo cảm giác ôm sát như mang tất.',
    images: [
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d03c7847-bf99-4c7b-a4d6-c1e959b63450/air-max-270-mens-shoes-KkLcGR.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ff6559f3-e12c-456a-8a09-a41d8e7f213b/air-max-270-mens-shoes-KkLcGR.png',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e879507b-b66d-45f1-b1d5-c8a31513338d/air-max-270-mens-shoes-KkLcGR.png',
    ], // Array of image URLs
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
  };

  // Mock related products data
  const relatedProducts = [
    {
      id: 101,
      name: 'Adidas Alphabounce',
      brand: 'Adidas',
      category: 'Chạy Bộ',
      price: 120,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b2053c343a3a45568406a96b00a85dfd_9366/Alphabounce+_Shoes_Black_B37368_01_standard.jpg',
    },
    {
      id: 102,
      name: 'Nike React Infinity Run',
      brand: 'Nike',
      category: 'Chạy Bộ',
      price: 160,
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f92a1a94-f8c8-4542-850b-314063ca563f/react-infinity-run-flyknit-2-mens-running-shoe-jmR31V.png',
    },
    {
      id: 103,
      name: 'New Balance Fresh Foam',
      brand: 'New Balance',
      category: 'Chạy Bộ',
      price: 130,
      image: 'https://nb.scene7.com/is/image/NB/m880g10_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440',
    },
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Vui lòng chọn kích thước');
      return;
    }
    toast.success(`Đã thêm ${quantity} x ${product.name} - ${selectedSize} vào giỏ hàng!`);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Navbar />
      <div className="container product-detail-page-container">
        <div className="product-detail-content-area">
          {/* Product Image */}
          <div className="product-image-container">
            <div className="main-image-wrapper">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="product-detail-image"
              />
              {/* Image Navigation Buttons */}
              <button
                onClick={handlePreviousImage}
                className="image-nav-button prev"
              >
                <ChevronLeftIcon className="icon-size-small" />
              </button>
              <button
                onClick={handleNextImage}
                className="image-nav-button next"
              >
                <ChevronRightIcon className="icon-size-small" />
              </button>
            </div>
            {/* Image Thumbnails */}
            <div className="thumbnail-gallery">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${index === currentImageIndex ? 'selected' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info-section">
            <div>
              <h1 className="product-detail-title">{product.name}</h1>
              <p className="product-detail-brand">{product.brand}</p>
              <p className="product-detail-price">{product.price.toLocaleString('vi-VN')}đ</p>
            </div>

            <div>
              <h2 className="product-info-heading">Mô Tả</h2>
              <p className="product-detail-description">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h2 className="product-info-heading">Chọn Kích Thước</h2>
              <div className="size-selection-grid">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h2 className="product-info-heading">Số Lượng</h2>
              <div className="quantity-controls">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-button"
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-button"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="btn btn-primary add-to-cart-button"
            >
              Thêm Vào Giỏ Hàng
            </button>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="container section-padding">
          <h2 className="section-title">Sản Phẩm Liên Quan</h2>
          <div className="product-grid"> {/* Reusing product-grid class */}
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="product-card"> {/* Reusing product-card class */}
                <div style={{ position: 'relative' }}>
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="product-image" // Reusing product-image class
                  />
                  <span className="product-category-tag"> {/* Reusing category tag class */}
                    {relatedProduct.category}
                  </span>
                </div>
                <div className="product-info"> {/* Reusing product-info class */}
                  <h3 className="product-title">{relatedProduct.name}</h3> {/* Reusing product-title class */}
                  <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>{relatedProduct.brand}</p>
                  <p className="product-price">{relatedProduct.price.toLocaleString('vi-VN')}đ</p> {/* Reusing product-price class */}
                  <Link
                    to={`/product/${relatedProduct.id}`}
                    className="btn view-details-button" // Reusing view-details button class
                  >
                    Xem Chi Tiết
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail; 