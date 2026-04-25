import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import guy from '../assets/guyskate.jpg';

const heroBg = "src/assets/skatepark.jpg";

const Product: React.FC = () => {
  return (
    <div className="product-page">

      {/* --- BREADCRUMBS BAR --- */}
      <div className="breadcrumbs-bar">
        <span className="breadcrumbs-text">FWAEH &gt; Product &gt; All</span>
      </div>

      {/* --- MAIN PRODUCT CONTENT AREA (PLACEHOLDER) --- */}
      <main className="product-content">
        <div className="placeholder-image-container">
          {/* Mimic standard placeholder graphic (mountain & sun) */}
          <img src={heroBg} alt="Product Placeholder" className="placeholder-image" />
        </div>
      </main>

      {/* --- MAIN PRODUCT CATALOG AREA --- */}
      <main className="product-catalog">
        
        {/* Left Sidebar */}
        <aside className="sidebar">
          <h2 className="sidebar-title">Products:</h2>
          <ul className="sidebar-menu">
            {/* The 'active' class adds that khaki/olive background pill */}
            <li className="active">All</li>
            <li>New Arrivals</li>
            <li>Tees</li>
            <li>Shoes</li>
            <li>Skate Deck</li>
          </ul>
        </aside>

        {/* Right Content Area */}
        <section className="catalog-content">
          
          {/* Featured Banner */}
          <div className="featured-banner">
            <div className="banner-text-content">
              <h2 className="banner-title">NEW<br/>ZERO X50 SKATE</h2>
              <p className="banner-subtitle">Collaboration of FWAEH x ZERO</p>
              <button className="buy-now-btn">Buy Now</button>
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

          {/* Top Product Grid (4 items) */}
          <div className="product-grid">
            {[1, 2, 3, 4].map((item) => (
              <Link to={`/product/top-${item}`} className="product-card" key={`top-${item}`}>
                <div className="card-image-placeholder">
                   <svg width="40" height="40" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="#E6E6E6" rx="4"></rect><circle cx="43" cy="40" r="10" fill="#CCCCCC"></circle><path d="M20 75L40 50L60 65L80 40L90 55V75H20Z" fill="#CCCCCC"></path></svg>
                </div>
                <div className="card-details">
                  <p className="card-title">Lorem Psem<br/>Niger 1</p>
                  <span className="card-price">MYR100</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Discover More Section */}
          <h3 className="discover-title">Discover More</h3>
          
          {/* Bottom Product Grid (8 items) */}
          <div className="product-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Link to={`/product/bottom-${item}`} className="product-card" key={`bottom-${item}`}>
                <div className="card-image-placeholder">
                  <svg width="40" height="40" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="#E6E6E6" rx="4"></rect><circle cx="43" cy="40" r="10" fill="#CCCCCC"></circle><path d="M20 75L40 50L60 65L80 40L90 55V75H20Z" fill="#CCCCCC"></path></svg>
                </div>
                <div className="card-details">
                  <p className="card-title">Lorem Psem<br/>Niger 1</p>
                  <span className="card-price">MYR100</span>
                </div>
              </Link>
            ))}
          </div>

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