import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './productdetail.css';

const ProductDetail: React.FC = () => {
  useParams<{ id: string; }>();
  const [quantity, setQuantity] = useState(2); // Matches the '10' in your screenshot

  const [selectedSize, setSelectedSize] = useState<string>('M');

  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity(prev => prev + 1);

  return (
    <div className="product-detail-page">
    
      {/* --- BREADCRUMBS --- */}
      <div className="breadcrumbs-bar">
        <span className="breadcrumbs-text">FWAEH &gt; Product &gt; All &gt; Selected Item</span>
      </div>

      {/* --- MAIN DETAIL LAYOUT --- */}
      <main className="detail-layout">
        
        {/* LEFT COLUMN: Sidebar */}
        <aside className="sidebar">
          <h2 className="sidebar-title">Products:</h2>
          <ul className="sidebar-menu">
            <li className="active">All</li>
            <li>New Arrivals</li>
            <li>Tees</li>
            <li>Shoes</li>
            <li>Skate Deck</li>
          </ul>
        </aside>

        {/* RIGHT COLUMN: Everything else */}
        <div className="main-content-area">
          
          {/* Top Split: Images and Info */}
          <div className="product-top-split">
            
            {/* Image Gallery */}
            <div className="image-gallery">
              <div className="thumbnails">
                {[1, 2, 3].map((thumb) => (
                  <div className="thumb-box" key={thumb}>
                    <svg width="30" height="30" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="#E6E6E6" rx="4"></rect><path d="M20 75L40 50L60 65L80 40L90 55V75H20Z" fill="#CCCCCC"></path><circle cx="43" cy="40" r="10" fill="#CCCCCC"></circle></svg>
                  </div>
                ))}
              </div>
              <div className="main-image-box">
                 <svg width="100" height="100" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="#E6E6E6" rx="4"></rect><path d="M20 75L40 50L60 65L80 40L90 55V75H20Z" fill="#CCCCCC"></path><circle cx="43" cy="40" r="10" fill="#CCCCCC"></circle></svg>
              </div>
            </div>

            {/* Product Info & Actions */}
            <div className="product-info">
              <h1 className="product-title">ZERO X50 SKATE</h1>
              <br></br>
              <p className="product-desc">Description</p>
              
              <h2 className="product-price">MYR100</h2>
              
              <div className="size-selector">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                        key={size}
                        // If this box's size matches the selected state, add the 'active' class!
                        className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                        onClick={() => setSelectedSize(size)}
                    >
                        {size}
                    </button>
                    ))}
                </div>
              
              <button className="size-chart-btn">Size Chart</button>

              <div className="quantity-section">
                <label>Quantity</label>
                <div className="qty-controls">
                  <button className="qty-minus" onClick={handleDecrease}>−</button>
                  <span className="qty-value">{quantity}</span>
                  <button className="qty-plus" onClick={handleIncrease}>+</button>
                </div>
              </div>

              <div className="action-buttons">
                <button className="add-cart-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                  Add to Cart
                </button>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>

          </div> {/* End of Top Split */}

          {/* Bottom Split: YOU MIGHT LIKE SECTION (Now inside the right column!) */}
          <section className="you-might-like-section">
            <h3 className="section-title">You Might Like</h3>
            
            <div className="product-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Link to={`/product/related-${item}`} className="product-card" key={`related-${item}`}>
                  <div className="card-image-placeholder">
                    <svg width="40" height="40" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="#E6E6E6" rx="4"></rect><circle cx="43" cy="40" r="10" fill="#CCCCCC"></circle><path d="M20 75L40 50L60 65L80 40L90 55V75H20Z" fill="#CCCCCC"></path></svg>
                  </div>
                  <div className="card-details">
                    <p className="card-title">Lorem Psem<br/>Niger 1</p>
                    <span className="card-price">MYR100</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div> {/* End of Right Column */}
      </main>
    </div>
  );
};

export default ProductDetail;