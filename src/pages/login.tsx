import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(); 
  };

  return (
    <div className="login-page">
      
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
        
        {/* Left Column: Login Form */}
        <div className="login-form-container">
          <h2>Log in.</h2>
          
          <form onSubmit={handleSubmit}>
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

            <span className="password-help">Password Help?</span>
            
            <button type="submit" className="login-btn">Log in</button>
          </form>

          <div className="signup-prompt">
            <span className="bold-italic">Don't have an account?</span>
            <Link to="/register" className="light-italic">Create One Now</Link>
          </div>
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

export default Login;