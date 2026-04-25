import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import { FwaehLogo } from '../icons/FwaehLogo';
import guy from '../assets/guyskate.jpg';

const heroBg = "src/assets/skatepark.jpg";

const Product: React.FC = () => {
  return (
    <div className="product-page">
      
      {/* HEADER SECTION */}
            <header className="header">
              <div className="logo">
                <FwaehLogo width={120} color="#FFFF" />
              </div>
              
              <nav className="nav-links">
                <Link to="/landing">Home</Link>
                <Link to="/product" className="active">Product</Link>
                <Link to="/contact">Contact</Link>
              </nav>
      
              <div className="header-actions">
                <div className="search-bar">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  <input type="text" placeholder="Search" />
                </div>
                <button className="icon-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
                <button className="icon-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></button>
                <button className="icon-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></button>
              </div>
            </header>

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
              <div className="product-card" key={`top-${item}`}>
                <div className="card-image-placeholder">
                   <svg width="40" height="40" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="#E6E6E6" rx="4"></rect><circle cx="43" cy="40" r="10" fill="#CCCCCC"></circle><path d="M20 75L40 50L60 65L80 40L90 55V75H20Z" fill="#CCCCCC"></path></svg>
                </div>
                <div className="card-details">
                  <p className="card-title">Lorem Psem<br/>Niger 1</p>
                  <span className="card-price">MYR100</span>
                </div>
              </div>
            ))}
          </div>

          {/* Discover More Section */}
          <h3 className="discover-title">Discover More</h3>
          
          {/* Bottom Product Grid (8 items) */}
          <div className="product-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div className="product-card" key={`bottom-${item}`}>
                <div className="card-image-placeholder">
                  <svg width="40" height="40" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="#E6E6E6" rx="4"></rect><circle cx="43" cy="40" r="10" fill="#CCCCCC"></circle><path d="M20 75L40 50L60 65L80 40L90 55V75H20Z" fill="#CCCCCC"></path></svg>
                </div>
                <div className="card-details">
                  <p className="card-title">Lorem Psem<br/>Niger 1</p>
                  <span className="card-price">MYR100</span>
                </div>
              </div>
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

      {/* FOOTER SECTION */}
            <footer className="footer-light">
              
              {/* Column 1: Customer Service */}
              <div className="footer-col">
                <h4>CUSTOMER SERVICE</h4>
                <ul>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/shipping">Shipping & Returns</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
      
              {/* Column 2: Company */}
              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><Link to="/disclaimer">Disclaimer</Link></li>
                  <li><Link to="/cookies">Cookie Statement</Link></li>
                  <li><Link to="/terms">Terms and Conditions</Link></li>
                </ul>
              </div>
      
              {/* Column 3: Account */}
              <div className="footer-col">
                <h4>Account</h4>
                <ul>
                  <li><Link to="/register">Register</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/orders">My Orders</Link></li>
                </ul>
              </div>
      
              {/* Column 4: Newsletter */}
              <div className="footer-col footer-newsletter">
                <h4>News Letter</h4>
                <p>Subscribe to our newsletter and stay updated on the latest collections and special offers</p>
                <div className="newsletter-input-group">
                  <input type="email" placeholder="Join our mailing list" />
                  <button type="submit">SUBSCRIBE</button>
                </div>
              </div>
      
            </footer>

    </div>
  );
};

export default Product;