import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AdjustmentsHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';

const Shop = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('none'); // 'none', 'priceAsc', 'priceDesc'

  const productsPerPage = 10;

  // Generate 30 placeholder products
  const allProducts = useMemo(() => {
    const generatedProducts = [];
    const categories = ['Chạy Bộ', 'Thời Trang', 'Cổ Điển'];
    const brands = ['Nike', 'Adidas', 'New Balance', 'Puma', 'Converse'];
    for (let i = 1; i <= 30; i++) {
      const category = categories[i % categories.length];
      const brand = brands[i % brands.length];
      const price = Math.floor(Math.random() * 200) + 50; // Price between 50 and 250
      generatedProducts.push({
        id: i,
        name: `Giày Mẫu ${i}`,
        brand: brand,
        category: category,
        price: price,
        image: `https://via.placeholder.com/300x200?text=Giay+Mau+${i}`,
      });
    }
    return generatedProducts;
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      const priceMatch =
        priceRange === 'all' ||
        (priceRange === 'under100' && product.price < 100) ||
        (priceRange === '100to200' && product.price >= 100 && product.price <= 200) ||
        (priceRange === 'over200' && product.price > 200);
      return brandMatch && priceMatch && categoryMatch;
    });

    // Apply sorting
    if (sortOrder === 'priceAsc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'priceDesc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [allProducts, selectedBrand, priceRange, selectedCategory, sortOrder]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const FilterSidebar = () => (
    <div className="filter-sidebar">
      <div className="filter-sidebar-header">
        <h2>Bộ Lọc</h2>
        <button
          onClick={() => setShowFilters(false)}
          className="filter-close-button"
        >
          <XMarkIcon className="icon-size" />
        </button>
      </div>

      <div className="filter-options">
        <div>
          <h3>Danh Mục</h3>
          <div className="filter-group">
            {['all', 'Chạy Bộ', 'Thời Trang', 'Cổ Điển'].map((category) => (
              <label key={category} className="filter-label">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e) => setCurrentPage(1) || setSelectedCategory(e.target.value)}
                  style={{ accentColor: '#0ea5e9' }}
                />
                <span>{category === 'all' ? 'Tất Cả' : category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3>Thương Hiệu</h3>
          <div className="filter-group">
            {['all', 'Nike', 'Adidas', 'New Balance', 'Puma', 'Converse'].map((brand) => (
              <label key={brand} className="filter-label">
                <input
                  type="radio"
                  name="brand"
                  value={brand}
                  checked={selectedBrand === brand}
                  onChange={(e) => setCurrentPage(1) || setSelectedBrand(e.target.value)}
                  style={{ accentColor: '#0ea5e9' }}
                />
                <span>{brand === 'all' ? 'Tất Cả' : brand}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3>Khoảng Giá</h3>
          <div className="filter-group">
            {[
              { value: 'all', label: 'Tất Cả Giá' },
              { value: 'under100', label: 'Dưới 100.000đ' },
              { value: '100to200', label: '100.000đ - 200.000đ' },
              { value: 'over200', label: 'Trên 200.000đ' },
            ].map((range) => (
              <label key={range.value} className="filter-label">
                <input
                  type="radio"
                  name="price"
                  value={range.value}
                  checked={priceRange === range.value}
                  onChange={(e) => setCurrentPage(1) || setPriceRange(e.target.value)}
                  style={{ accentColor: '#0ea5e9' }}
                />
                <span>{range.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3>Sắp xếp theo giá</h3>
          <div className="filter-group">
            <label className="filter-label">
              <input
                type="radio"
                name="sortOrder"
                value="none"
                checked={sortOrder === 'none'}
                onChange={(e) => setSortOrder(e.target.value)}
                style={{ accentColor: '#0ea5e9' }}
              />
              <span>Mặc định</span>
            </label>
            <label className="filter-label">
              <input
                type="radio"
                name="sortOrder"
                value="priceAsc"
                checked={sortOrder === 'priceAsc'}
                onChange={(e) => setCurrentPage(1) || setSortOrder(e.target.value)}
                style={{ accentColor: '#0ea5e9' }}
              />
              <span>Giá: Thấp đến Cao</span>
            </label>
            <label className="filter-label">
              <input
                type="radio"
                name="sortOrder"
                value="priceDesc"
                checked={sortOrder === 'priceDesc'}
                onChange={(e) => setCurrentPage(1) || setSortOrder(e.target.value)}
                style={{ accentColor: '#0ea5e9' }}
              />
              <span>Giá: Cao đến Thấp</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="shop-header">
        <h1 className="section-title">Cửa Hàng</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="filter-toggle-button"
        >
          <AdjustmentsHorizontalIcon className="icon-size-small" />
          <span>Bộ Lọc</span>
        </button>
      </div>

      <div className="shop-content-area">
        <div className={`filter-sidebar-wrapper ${showFilters ? 'show' : ''}`}>
          <FilterSidebar />
        </div>

        <div className="product-list-area">
          <div className="product-grid">
            {currentProducts.map((product) => (
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
                  <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>{product.brand}</p>
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

          <div className="pagination-controls">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              Trang Trước
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={
                  `pagination-button ${currentPage === index + 1 ? 'active' : ''}`
                }
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-button"
            >
              Trang Sau
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop; 