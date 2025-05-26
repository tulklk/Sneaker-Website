import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: parseInt(id),
    name: 'Nike Air Max 270',
    brand: 'Nike',
    price: 150,
    description: 'Nike Air Max 270 mang đến cảm giác êm ái với lớp đệm lớn và cảm giác mềm mại. Giày có thiết kế ống lót co giãn tạo cảm giác ôm sát như mang tất.',
    image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png',
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Vui lòng chọn kích thước');
      return;
    }
    // Add to cart logic here
    console.log('Added to cart:', { ...product, size: selectedSize, quantity });
  };

  return (
    <div className="container product-detail-page-container">
      <div className="product-detail-content-area">
        {/* Product Image */}
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-image"
          />
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
    </div>
  );
};

export default ProductDetail; 