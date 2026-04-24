import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

import decksImg from '../assets/decks.jpg';
import clothing from '../assets/clothing.jpg';

const featuredProducts = [
  { id: 1, name: "Zero X50 Skate", subtitle: "Deck Only", price: "MYR100", image: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Classic Grip", subtitle: "Black", price: "MYR35", image: "https://images.unsplash.com/photo-1564982752979-3f7ba97481c6?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Spitfire Wheels", subtitle: "52mm", price: "MYR120", image: "https://images.unsplash.com/photo-1498622205843-3b0ac17be8aa?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "FWAEH Bearings", subtitle: "ABEC 9", price: "MYR80", image: "https://images.unsplash.com/photo-1555580216-bd51df4bdf73?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "Vans Old Skool", subtitle: "Pro Edition", price: "MYR250", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=400" },
  { id: 6, name: "FWAEH Hoodie", subtitle: "Black/Red", price: "MYR180", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400" },
  { id: 7, name: "Skate Tool", subtitle: "All-in-One", price: "MYR50", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=400" },
  { id: 8, name: "Ricta Clouds", subtitle: "Soft Wheels", price: "MYR110", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400" },
  { id: 9, name: "Independent Trucks", subtitle: "Stage 11", price: "MYR150", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400" },
  { id: 10, name: "FWAEH Cap", subtitle: "Snapback", price: "MYR70", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=400" },
];

const Landing: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      if (maxScroll > 0) {
        setScrollProgress(scrollLeft / maxScroll); 
      }
    }
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        const scrollStep = 324; 

        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
      }
    }, 2500); 

    return () => clearInterval(interval);
  }, [isHovered]); 

  return (
    <div className="landing-page">
      
      {/* HEADER SECTION */}
      <header className="header">
        <div className="logo">
          <h1>FWAEH<span>©</span></h1>
        </div>
        
        <nav className="nav-links">
          <Link to="/" className="active">Home</Link>
          <Link to="/product">Product</Link>
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

      {/* HERO SECTION */}
      <section className="hero-full-width">
        <img src={decksImg} alt="FWAEH Hero Animation" className="hero-media-full" />
      </section>

      {/* FRESH AND HOT SECTION */}
      <section className="fresh-hot-section">
        
        <div className="fresh-hot-header">
          <h2 className="fresh-hot-title">🔥 FRESH AND HOT 🔥</h2>
          <div className="fresh-hot-timer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>23:00:00 — Grab while you can!</span>
          </div>
          <button className="view-more-btn">View More</button>
        </div>

        <div 
          className="product-cards-container" 
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {featuredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="card-image-placeholder">
                <img src={product.image} alt={product.name} className="product-card-img" />
              </div>
              <div className="card-details">
                <div className="card-text">
                  <span className="card-title">{product.name}</span>
                  <span className="card-subtitle">{product.subtitle}</span>
                </div>
                <span className="card-price">{product.price}</span>
              </div>
            </div>
          ))}

        </div>

        <div className="carousel-progress-bar">
          <div 
            className="progress-indicator"
            style={{ transform: `translateX(${scrollProgress * 300}%)` }}
          ></div>
        </div>

      </section>

      {/* DISCOVER MORE SECTION */}
      <section className="discover-more-section">
        <h2 className="section-heading-left">DISCOVER MORE</h2>
        
        <div className="discover-grid-container">
          
          <div className="discover-large-block">
            <img src={decksImg} alt="Discover Large" className="discover-img" />
            <button className="shop-now-btn">Shop Now</button>
          </div>

          <div className="discover-small-stack">
            
            <div className="discover-small-block">
              <img src={clothing} alt="Discover Small Top" className="discover-img" />
              <button className="shop-now-btn">Shop Now</button>
            </div>
            
            <div className="discover-small-block">
              <img src={decksImg} alt="Discover Small Bottom" className="discover-img" />
              <button className="shop-now-btn">Shop Now</button>
            </div>

          </div>
        </div>
      </section>

      {/* INFO STRIP SECTION */}
      <section className="info-strip-section">
        
        {/* Column 1: Shipping */}
        <div className="info-column">
          <div className="info-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <h4>WORLDWIDE SHIPPING</h4>
          <p>We ship to over 100 countries with fast and reliable delivery options. Track your order and get it wherever you are.</p>
          <Link to="/shipping">Shipping Details</Link>
        </div>

        {/* Column 2: Returns */}
        <div className="info-column">
          <div className="info-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              <path d="M16 10H8.5"></path>
              <polyline points="11 7.5 8.5 10 11 12.5"></polyline>
            </svg>
          </div>
          <h4>30-Days Free Returns</h4>
          <p>Not the right fit? Return or exchange your order for free within 30 days, T&C applied.</p>
          <Link to="/returns">Return Policy</Link>
        </div>

        {/* Column 3: Support */}
        <div className="info-column">
          <div className="info-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
          </div>
          <h4>24/7 Customer Support</h4>
          <p>Our team is available around the clock to help with orders, returns, and any question you have.</p>
          <Link to="/contact">24/7 Customer Support</Link>
        </div>

      </section>

      {/* UPCOMING TRENDS SECTION */}
      <section className="upcoming-trends-section">
        
        {/* Left Column: Text */}
        <div className="trends-text">
          <h2 className="trends-heading">UPCOMING<br/>TRENDS</h2>
          <p className="trends-subtext">Stay tuned!</p>
        </div>

        {/* Right Column: Images */}
        <div className="trends-image-grid">
          <div className="trend-image-wrapper">
            {/* Replace this src with your own imported image later! */}
            <img src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&q=80&w=800" alt="Upcoming Trend 1" className="trend-img" />
          </div>
          <div className="trend-image-wrapper">
            {/* Replace this src with your own imported image later! */}
            <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=400" alt="Upcoming Trend 2" className="trend-img" />
          </div>
        </div>

      </section>

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

export default Landing;