import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-light">
      <div className="footer-col">
        <h4>CUSTOMER SERVICE</h4>
        <ul>
          <li><Link to="/support?tab=faq">FAQ</Link></li>
          <li><Link to="/support?tab=shipping">Shipping & Returns</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><Link to="/support?tab=disclaimer">Disclaimer</Link></li>
          <li><Link to="/support?tab=cookies">Cookie Statement</Link></li>
          <li><Link to="/support?tab=terms">Terms and Conditions</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Account</h4>
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/profile?tab=orders">My Orders</Link></li>
        </ul>
      </div>

      <div className="footer-col footer-newsletter">
        <h4>News Letter</h4>
        <p>Subscribe to our newsletter and stay updated on the latest collections and special offers</p>
        <div className="newsletter-input-group">
          <input type="email" placeholder="Join our mailing list" />
          <button type="submit">SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;