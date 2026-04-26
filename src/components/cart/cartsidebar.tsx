import React from 'react';
import './CartSidebar.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // Ensure this path is correct

// We no longer need props, because the Sidebar controls itself using the Context!
const CartSidebar: React.FC = () => {
  // 1. Pull everything we need from the global brain (Context)
  const { cartItems, isCartOpen, closeCart, removeFromCart, updateQuantity } = useCart();

  // 2. Calculate subtotal dynamically from real cart items
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      {/* Dark overlay backdrop that closes the cart when clicked */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`} 
        onClick={closeCart} 
      />

      {/* The sliding sidebar panel */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        
        <div className="cart-header">
          <h2>Your Cart.</h2>
          <button className="close-cart-btn" onClick={closeCart}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="cart-items-container">
          {/* 3. Show a friendly message if the cart is empty */}
          {cartItems.length === 0 ? (
            <p style={{ textAlign: 'center', marginTop: '2rem', color: '#888' }}>
              Your cart is currently empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.cart_item_id} className="cart-item">
                <div className="cart-item-img-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="cart-item-details">
                  <div className="cart-item-top">
                    <div>
                      <h4 className="cart-item-name">{item.name}</h4>
                      {/* Show the size we added in the context! */}
                      <span style={{ fontSize: '0.8rem', color: '#888' }}>Size: {item.size}</span>
                    </div>
                    {/* 4. Wire up the remove button */}
                    <button className="remove-item-btn" onClick={() => removeFromCart(item.cart_item_id)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                  
                  <p className="cart-item-price">RM {item.price.toFixed(2)}</p>
                  
                  <div className="cart-quantity-controls">
                    {/* 5. Wire up the minus and plus buttons */}
                    <button className="qty-btn" onClick={() => updateQuantity(item.cart_item_id, item.quantity - 1)}>-</button>
                    <span className="qty-number">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.cart_item_id, item.quantity + 1)}>+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 6. Only show the footer if there are actually items in the cart */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span className="subtotal-amount">RM {subtotal.toFixed(2)}</span>
            </div>
            <p className="shipping-note">Shipping & taxes calculated at checkout</p>
            
            {/* 7. Change Checkout button to a Link that routes to your checkout page */}
            <Link 
              to="/checkout" 
              className="checkout-btn" 
              onClick={closeCart} 
              style={{ display: 'block', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box' }}
            >
              Proceed to Checkout
            </Link>
          </div>
        )}

      </div>
    </>
  );
};

export default CartSidebar;