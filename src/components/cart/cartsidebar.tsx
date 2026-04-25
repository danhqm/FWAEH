import React from 'react';
import './CartSidebar.css';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- HARDCODED MOCK DATA (Reflecting DB Schema) ---
const mockCartItems = [
  {
    cart_item_id: 'cart-1',
    product_id: 'prod-1',
    name: 'Vans Old Skool Pro',
    price: 299.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80'
  },
  {
    cart_item_id: 'cart-2',
    product_id: 'prod-3',
    name: 'FWAEH Classic Hoodie',
    price: 180.00,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80'
  }
];

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  // Calculate subtotal
  const subtotal = mockCartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      {/* Dark overlay backdrop that closes the cart when clicked */}
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose} 
      />

      {/* The sliding sidebar panel */}
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        
        <div className="cart-header">
          <h2>Your Cart.</h2>
          <button className="close-cart-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="cart-items-container">
          {mockCartItems.map((item) => (
            <div key={item.cart_item_id} className="cart-item">
              <div className="cart-item-img-wrapper">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="cart-item-details">
                <div className="cart-item-top">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <button className="remove-item-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
                
                <p className="cart-item-price">RM {item.price.toFixed(2)}</p>
                
                <div className="cart-quantity-controls">
                  <button className="qty-btn">-</button>
                  <span className="qty-number">{item.quantity}</span>
                  <button className="qty-btn">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="cart-subtotal">
            <span>Subtotal</span>
            <span className="subtotal-amount">RM {subtotal.toFixed(2)}</span>
          </div>
          <p className="shipping-note">Shipping & taxes calculated at checkout</p>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>

      </div>
    </>
  );
};

export default CartSidebar;