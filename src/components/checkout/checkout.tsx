import React, { useState } from 'react';
import './checkout.css';
import { useCart } from '../../context/CartContext';


const Checkout: React.FC = () => {

  const [selectedDelivery, setSelectedDelivery] = useState('instant');
  
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = selectedDelivery === 'instant' ? 22 : 12;
  const discount = 15; // Hardcoded voucher for now
  const finalTotal = subtotal + deliveryFee - discount;

  return (
    <div className="checkout-page">
      
      {/* PAGE TITLE */}
      <h1 className="page-title">Ready To Checkout?</h1>

      {/* MAIN TWO-COLUMN CONTAINER */}
      <div className="checkout-container">
        
        {/* ========================================= */}
        {/* LEFT COLUMN (Section 1)                   */}
        {/* ========================================= */}
        <div className="checkout-left-column">
          
          {/* --- 1. ORDER SUMMARY --- */}
          <div className="checkout-box">
            <h2 className="box-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              Order summary
            </h2>
            
            <div className="table-header">
              <span className="col-name">Name</span>
              <span className="col-text">Price</span>
              <span className="col-qty">Quantity</span>
              <span className="col-total">Total</span>
              <span className="col-action"></span>
            </div>

            <div className="table-body">
              {cartItems.length === 0 ? (
                <p style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div className="table-row" key={item.cart_item_id}>
                    <div className="col-name item-info">
                      <div className="item-img-placeholder" style={{ overflow: 'hidden' }}>
                        {/* If you have a real image, it shows here! */}
                        {item.image ? <img src={item.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="product" /> : <svg width="24" height="24" viewBox="0 0 100 100" fill="none"><path d="M20 75L40 50L60 65L80 40L90 55V75H20Z" fill="#CCCCCC"></path></svg>}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>{item.name}</span>
                        <span style={{ fontSize: '0.75rem', color: '#888' }}>Size: {item.size}</span>
                      </div>
                    </div>
                    <span className="col-text">RM {item.price}</span>
                    
                    {/* Hooked up the dropdown to our global context! */}
                    <div className="col-qty">
                      <select 
                        className="qty-dropdown" 
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.cart_item_id, parseInt(e.target.value))}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    
                    <span className="col-total">RM {item.price * item.quantity}</span>
                    
                    {/* Hooked up the delete button! */}
                    <button className="col-action delete-btn" onClick={() => removeFromCart(item.cart_item_id)}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* --- 2. DELIVERY OPTIONS --- */}
          <div className="checkout-box">
            <h2 className="box-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              Delivery options
            </h2>

            <div className="courier-radios">
              <label><input type="radio" name="courier" /> PosLaju</label>
              <label><input type="radio" name="courier" /> ParcelHub</label>
              <label><input type="radio" name="courier" defaultChecked /> J&T</label>
            </div>

            <div className="delivery-cards">
              
              {/* INSTANT DELIVERY CARD */}
              <div 
                className={`del-card ${selectedDelivery === 'instant' ? 'active' : ''}`}
                onClick={() => setSelectedDelivery('instant')}
              >
                <div className="del-card-header">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <span className="del-price">RM22</span>
                </div>
                <p className="del-type">Instant delivery</p>
                <p className="del-est">Est. arrival: Today</p>
              </div>

              {/* STANDARD DELIVERY CARD */}
              <div 
                className={`del-card ${selectedDelivery === 'standard' ? 'active' : ''}`}
                onClick={() => setSelectedDelivery('standard')}
              >
                <div className="del-card-header">
                  {/* Note: Swapped stroke="#666" to "currentColor" so it adapts when active */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span className="del-price">RM12</span>
                </div>
                <p className="del-type">Standard delivery</p>
                <p className="del-est">Est. arrival: DD/MM</p>
              </div>

            </div>
          </div>

          {/* --- 3. CUSTOMER INFORMATION --- */}
          <div className="checkout-box">
            <h2 className="box-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Customer information
            </h2>

            <form className="customer-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Full name</label>
                  <input type="text" />
                </div>
                <div className="input-group">
                  <label>Phone number</label>
                  <input type="tel" />
                </div>
              </div>

              <div className="input-group">
                <label>Address</label>
                <input type="text" />
              </div>

              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                Save as default
              </label>

              <div className="delivery-note-box">
                <svg width="25" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                </svg>
                <div className="note-text">
                  <h4>Delivery note</h4>
                  <p>Please ensure your address is correct. You will not be able to change it after the order is placed.</p>
                </div>
              </div>
            </form>
          </div>

        </div>

        {/* ========================================= */}
        {/* RIGHT COLUMN (Placeholder for Section 2)  */}
        {/* ========================================= */}
        <div className="checkout-right-column">
          
          {/* We use 'checkout-box' to get the border, and 'summary-box' for internal layout */}
          <div className="checkout-box summary-box">

            {/* --- PAYMENT METHOD --- */}
            <div className="summary-section">
              <h2 className="summary-title">Payment method</h2>
              <span className="change-link">Change payment methods</span>
              
              <div className="payment-card-ui">
                <div className="card-brand">
                  {/* CSS-drawn Mastercard logo! */}
                  <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#FF5F00"></circle>
                    <circle cx="22" cy="10" r="10" fill="#EB001B" fillOpacity="0.8"></circle>
                  </svg>
                  <span>Mastercard</span>
                </div>
                <span className="card-digits">**** 5987</span>
              </div>
            </div>

            {/* --- VOUCHER --- */}
            <div className="summary-section">
              <h2 className="summary-title">Voucher</h2>
              <div className="voucher-input-group">
                <input type="text" placeholder="Enter code" defaultValue="$15 OFF" />
                <button className="apply-btn">Apply</button>
              </div>
              <div className="applied-voucher">
                <span className="voucher-tag">$15 Off</span>
              </div>
            </div>

            {/* --- SUMMARY MATH --- */}
            <div className="summary-section">
              <h2 className="summary-title">
                {/* svg */} Summary
              </h2>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span className="row-value">RM {subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Discount</span>
                <span className="row-value">-RM {discount.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee</span>
                <span className="row-value">RM {deliveryFee.toFixed(2)}</span>
              </div>
              
              <hr className="summary-divider" />
              
              <div className="summary-row total-row">
                <span>Total</span>
                <span>RM {Math.max(0, finalTotal).toFixed(2)}</span>
              </div>
            </div>
            {/* --- CHECKOUT BUTTON --- */}
            <button className="proceed-btn">Proceed to payment</button>
          </div>
        </div>
      </div>

      <div className="related-products-section">
        <h2 className="related-title">Related products</h2>
        
        <div className="related-grid">
          {[1, 2, 3, 4].map((item) => (
            <div className="related-card" key={`related-${item}`}>
              
              <div className="related-img-placeholder">
                <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
                  <rect width="100" height="100" fill="#E6E6E6" rx="4"></rect>
                  <circle cx="43" cy="40" r="10" fill="#CCCCCC"></circle>
                  <path d="M20 75L40 50L60 65L80 40L90 55V75H20Z" fill="#CCCCCC"></path>
                </svg>
              </div>

              <div className="related-details">
                <p className="related-name">Lorem Psem<br/>Niger {item}</p>
                <span className="related-price">MYR100</span>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;