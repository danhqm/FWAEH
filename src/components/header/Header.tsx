import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FwaehLogo } from "../../assets/logo/FwaehLogo";
import { useCart } from '../../context/CartContext';
import "./Header.css";

const Header: React.FC = () => {
  // 1. Grab the global openCart function and cartItems from Context!
  const { openCart, cartItems } = useCart();

  // 2. Calculate how many total items are in the cart for the badge
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <FwaehLogo width={120} color="#FFFF" />
        <span>©</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="header-actions">
        {/* Heart/Wishlist Icon */}
        <Link to="/profile?tab=wishlist" className="icon-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </Link>

        {/* Bag/Cart Icon - Now triggers global openCart! */}
        <button 
          className="icon-btn" 
          onClick={openCart} 
          style={{ position: 'relative' }} // Added relative positioning for the badge
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          
          {/* Render the notification badge if there are items in the cart */}
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </button>

        {/* User Profile Icon */}
        <Link to="/profile" className="icon-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;