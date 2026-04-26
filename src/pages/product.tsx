import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './product.css';
import { useCart } from '../context/CartContext';

import guy from '../assets/guyskate.jpg';

const heroBg = "src/assets/skatepark.jpg";

const CATEGORIES = ['All', 'Limited Time', 'New Arrivals', 'Tees', 'Shoes', 'Skate Deck'];

const MOCK_PRODUCTS = [
  { id: 'top-1', title: 'Classic Logo Tee', price: 'MYR80', category: 'Tees' },
  { id: 'top-2', title: 'Pro Skate Deck', price: 'MYR150', category: 'Skate Deck' },
  { id: 'top-3', title: 'Canvas Sneakers', price: 'MYR200', category: 'Shoes' },
  { id: 'top-4', title: 'Limited Edition Hoodie', price: 'MYR250', category: 'Limited Time' },
  { id: 'bottom-1', title: 'Summer Graphic Tee', price: 'MYR90', category: 'Tees' },
  { id: 'bottom-2', title: 'Street Shoes V2', price: 'MYR220', category: 'Shoes' },
  { id: 'bottom-3', title: 'Blank Deck', price: 'MYR120', category: 'Skate Deck' },
  { id: 'bottom-4', title: 'New Arrival Beanie', price: 'MYR50', category: 'New Arrivals' },
];

const Product: React.FC = () => {

  const navigate = useNavigate();
  const { addToCart, closeCart } = useCart();

  const handleBannerBuyNow = () => {
    addToCart({
      product_id: 'feat-zero-x50', // A unique ID for this featured item
      name: 'ZERO X50 SKATE',
      price: 100, // Put the real price of the skate deck here!
      quantity: 1,
      image: 'your-banner-image-url.jpg', // The image you want to show in the cart
      size: 'M' 
    });

    closeCart(); // Keep the sidebar closed
    navigate('/checkout'); // Instantly jump to checkout
  };

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(product => product.category === activeCategory);

  const topProducts = filteredProducts.slice(0, 4); // Grabs the first 4 items (Index 0 to 3)
  const bottomProducts = filteredProducts.slice(4); // Grabs everything from index 4 onwards

  return (
    <div className="product-page">

      {/* --- BREADCRUMBS BAR --- */}
      <div className="breadcrumbs-bar">
        <span className="breadcrumbs-text">
          FWAEH &gt; Product &gt; {activeCategory}
        </span>
      </div>

      {/* --- MAIN PRODUCT CATALOG AREA --- */}
      <main className="product-catalog">
        
        {/* Left Sidebar */}
        <aside className="sidebar">
          <h2 className="sidebar-title">Products:</h2>
          <ul className="sidebar-menu">
            {CATEGORIES.map((category) => (
              <li 
                key={category}
                // If this category matches the state, give it the olive pill background
                className={activeCategory === category ? 'active' : ''}
                // When clicked, tell React to change the active category
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Content Area */}
        <section className="catalog-content">
          
          {/* Featured Banner */}
          <div className="featured-banner">
            <div className="banner-text-content">
              <h2 className="banner-title">NEW<br/>ZERO X50 SKATE</h2>
              <p className="banner-subtitle">Collaboration of FWAEH x ZERO</p>
              <button className="buy-now-btn" onClick={handleBannerBuyNow}>
                Buy Now
              </button>
            </div>
            <div className="banner-image-placeholder">
              {/* Image Icon SVG */}
              <img src={guy} alt="Zero X50 Skate Placeholder" className="banner-img" />
            </div>
          </div>

          {/* Limited Time Notice */}
          <div className="limited-time-notice">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>23:00:00 -- Limited Time!</span>
          </div>

          {/* Top Product Grid (Up to 4 items) */}
          <div className="product-grid">
            {topProducts.map((product) => (
              <Link to={`/product/${product.id}`} className="product-card" key={product.id}>
                <div className="card-image-placeholder">
                   <svg width="40" height="40" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="#E6E6E6" rx="4"></rect><circle cx="43" cy="40" r="10" fill="#CCCCCC"></circle><path d="M20 75L40 50L60 65L80 40L90 55V75H20Z" fill="#CCCCCC"></path></svg>
                </div>
                <div className="card-details">
                  <p className="card-title">{product.title}</p>
                  <span className="card-price">{product.price}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Only show the Discover More section IF there are more than 4 products! */}
          {bottomProducts.length > 0 && (
            <>
              <h3 className="discover-title">Discover More</h3>
              
              {/* Bottom Product Grid (The rest of the items) */}
              <div className="product-grid">
                {bottomProducts.map((product) => (
                  <Link to={`/product/${product.id}`} className="product-card" key={product.id}>
                    <div className="card-image-placeholder">
                      <svg width="40" height="40" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="#E6E6E6" rx="4"></rect><circle cx="43" cy="40" r="10" fill="#CCCCCC"></circle><path d="M20 75L40 50L60 65L80 40L90 55V75H20Z" fill="#CCCCCC"></path></svg>
                    </div>
                    <div className="card-details">
                      <p className="card-title">{product.title}</p>
                      <span className="card-price">{product.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* Optional: Show a message if a category is completely empty */}
          {filteredProducts.length === 0 && (
            <p style={{ textAlign: 'center', marginTop: '2rem', color: '#888' }}>
              No products found in this category yet.
            </p>
          )}

          {/* Pagination */}
          <div className="pagination">
            <button className="page-num active">1</button>
            <button className="page-num">2</button>
            <button className="page-num">3</button>
            <button className="page-num">4</button>
            <button className="page-num">5</button>
            <button className="page-num">6</button>
          </div>

        </section>
      </main>
    </div>
  );
};

export default Product;