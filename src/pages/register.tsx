import React from 'react';
import { useState } from 'react';
import './register.css';

interface RegisterProps {
  onRegister: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {

    const [newsletterOptIn, setNewsletterOptIn] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onRegister(); 
    };
  return (
    <div className="register-page">
      
      {/* HEADER SECTION */}
      <header className="header">
        <div className="logo">
          <h1>FWAEH<span>©</span></h1>
        </div>
        
        <nav className="nav-links">
          <a className="active">Home</a>
          <a>Product</a>
          <a>Contact</a>
        </nav>

        <div className="header-actions">
          <div className="search-bar">
            {/* Search Icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Search" />
          </div>
          
          {/* Heart/Wishlist Icon */}
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          
          {/* Bag/Cart Icon */}
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
          
          {/* User Profile Icon */}
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </header>

      {/* MAIN CONTENT SECTION */}
      <main className="main-content">
        
        {/* Left Column: Register Form */}
        <div className="register-form-container">
          <h2>Create an Account.</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" placeholder="First Name *" required />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Last Name *" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email *" required />
            </div>
            
            <div className="input-group">
              <input type="password" placeholder="Password *" required />
              {/* Eye Icon for Password */}
              <button type="button" className="eye-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>

            <div className="input-group">
              <input type="password" placeholder="Confirm Password *" required />
              {/* Eye Icon for Password */}
              <button type="button" className="eye-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>

            <div className="opt-in-container">
                <label className="checkbox-label">
                    <input 
                    type="checkbox" 
                    className="custom-checkbox"
                    checked={newsletterOptIn}
                    onChange={(e) => setNewsletterOptIn(e.target.checked)}
                    />
                    <span className="checkbox-text">
                    Receive emails about new products, sales, and store events
                    </span>
                </label>
                
                <p className="legal-text">
                    Please view our <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Notice</a> and <a href="/financial-incentive" target="_blank" rel="noreferrer">Notice of Financial Incentive</a> for more information.
                </p>
            </div>
            
            <button type="submit" className="register-btn">Create Account</button>
          </form>

        </div>

        {/* Right Column: Order Lookup Card */}
        <div className="order-lookup-card">
          <h3>Looking for your order?</h3>
          <p>
            See your order even if you are not a registered user. Enter the order number and your last name.
          </p>
          <button className="find-order-btn">Find Your Order</button>
        </div>

      </main>
    </div>
  );
};

export default Register;