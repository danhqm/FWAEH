import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';
import { FwaehLogo } from '../icons/FwaehLogo';

// 1. IMPORT YOUR BACKGROUND IMAGE HERE
// Replace this URL with your local import later (e.g., import skatePark from '../assets/skatepark.jpg';)
const heroBg = "src/assets/skatepark.jpg";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      
      {/* HEADER SECTION */}
      <header className="header">
        <div className="logo">
          <FwaehLogo width={120} color="#FFFF" />
        </div>
        
        <nav className="nav-links">
                  <Link to="/landing">Home</Link>
                  <Link to="/product">Product</Link>
                  <Link to="/contact" className="active">Contact</Link>
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

      {/* CONTACT HERO SECTION */}
      <section 
        className="contact-hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* The dark overlay to make text readable */}
        <div className="hero-overlay"></div>

        <div className="contact-hero-content">
          
          {/* Invisible spacer to push the center text perfectly into the middle */}
          <div className="spacer"></div>

          {/* Center Main Text */}
          <div className="center-text-container">
            <h1 className="hero-title">Get In Touch With Us</h1>
            {/* The Stylized Brush Script Fallback */}
            <br></br>
            <FwaehLogo className='hero-script-logo' width={550} />
          </div>

          {/* Bottom Details Grid */}
          <div className="bottom-details-container">
            
            {/* Left Side: Franchise Info */}
            <div className="left-details">
              <p>Our Franchise Remain opens for<br/>inquiries, partnerships, and new ideas</p>
            </div>

            {/* Right Side: Email and Address */}
            <div className="right-details">
              <div className="detail-block">
                <h4>GENERAL INQUIRIES</h4>
                <p>test@gmail.com</p>
              </div>
              
              <div className="detail-block">
                <h4>ADDRESS</h4>
                <p>123 Playground Stret</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-container">
          
          {/* Left Column: Contact Info */}
          <div className="contact-info-col">
            <p className="info-subtitle">GENERAL INQUIRIES</p>
            <h2 className="info-email">TEST@GMAIL.COM</h2>
            <div className="info-hours">
              <span>AT YOUR SERVICE</span>
              <span>MON-FRI 10:00 - 18:00 UTC</span>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="contact-form-col">
            <form className="inquiry-form">
              
              {/* Row 1: Split Fields */}
              <div className="form-row split-row">
                <div className="form-group">
                  <label>FIRST NAME</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>LAST NAME</label>
                  <input type="text" required />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" required />
              </div>

              {/* Row 3: Location */}
              <div className="form-group">
                <label>WHERE ARE YOU LOCATED?</label>
                <input type="text" required />
              </div>

              {/* Row 4: Phone */}
              <div className="form-group">
                <label>CONTACT NUMBER</label>
                <input type="tel" required />
              </div>

              {/* Row 5: Inquiry Type */}
              <div className="form-group">
                <label>TYPE OF INQUIRIES</label>
                <input type="text" required />
              </div>

            </form>
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

export default Contact;