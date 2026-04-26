import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './productdetail.css';

const CATEGORIES = ['All', 'Limited Time', 'New Arrivals', 'Tees', 'Shoes', 'Skate Deck'];

const MOCK_RELATED = [
  { id: 'rel-1', title: 'Classic Logo Tee', price: 'MYR80', category: 'Tees' },
  { id: 'rel-2', title: 'Pro Skate Deck', price: 'MYR150', category: 'Skate Deck' },
  { id: 'rel-3', title: 'Canvas Sneakers', price: 'MYR200', category: 'Shoes' },
  { id: 'rel-4', title: 'Limited Edition Hoodie', price: 'MYR250', category: 'Limited Time' },
  { id: 'rel-5', title: 'Summer Graphic Tee', price: 'MYR90', category: 'Tees' },
  { id: 'rel-6', title: 'Street Shoes V2', price: 'MYR220', category: 'Shoes' },
  { id: 'rel-7', title: 'Blank Deck', price: 'MYR120', category: 'Skate Deck' },
  { id: 'rel-8', title: 'New Arrival Beanie', price: 'MYR50', category: 'New Arrivals' },
];

const ProductDetail: React.FC = () => {
  useParams<{ id: string; }>();

  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(2); // Matches the '10' in your screenshot

  const [selectedSize, setSelectedSize] = useState<string>('M');

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredRelated = activeCategory === 'All' 
    ? MOCK_RELATED 
    : MOCK_RELATED.filter(product => product.category === activeCategory);

  const { addToCart, closeCart } = useCart();

  const handleBuyNow = () => {
    handleAddToCart(); // Add the item to the global cart
    closeCart();       // Ensure the sidebar doesn't pop open
    navigate('/checkout'); // Instantly jump to the checkout page!
  };

  const handleAddToCart = () => {
    addToCart({
      product_id: id || 'unknown',
      name: 'ZERO X50 SKATE', // In a real app, you'd fetch this based on the ID
      price: 100,
      quantity: quantity,
      image: 'your-image-url-here.jpg', // Put your actual guy.png image here
      size: selectedSize
    });
  };

  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity(prev => prev + 1);

  return (
    <div className="product-detail-page">
    
      {/* --- BREADCRUMBS --- */}
      <div className="breadcrumbs-bar">
        <span className="breadcrumbs-text">
          FWAEH &gt; Product &gt; {activeCategory} &gt; Selected 
        </span>
      </div>

      {/* --- MAIN DETAIL LAYOUT --- */}
      <main className="detail-layout">
        
        {/* 1. Sidebar */}
        <aside className="sidebar">
          <h2 className="sidebar-title">Products:</h2>
          <ul className="sidebar-menu">
            {CATEGORIES.map((category) => (
              <li 
                key={category}
                className={activeCategory === category ? 'active' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </li>
            ))}
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
                <button className="add-cart-btn" onClick={handleAddToCart}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                  Add to Cart
                </button>
                <button className="buy-btn" onClick={handleBuyNow}>
                  Buy Now
                </button>
              </div>
            </div>

          </div> {/* End of Top Split */}

         {/* Bottom Split: YOU MIGHT LIKE SECTION */}
          <section className="you-might-like-section">
            <h3 className="section-title">You Might Like</h3>
            
            <div className="product-grid">
              {filteredRelated.map((product) => (
                <Link to={`/product/${product.id}`} className="product-card" key={product.id}>
                  <div className="card-image-placeholder">
                    <svg width="40" height="40" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="#E6E6E6" rx="4"></rect><circle cx="43" cy="40" r="10" fill="#CCCCCC"></circle><path d="M20 75L40 50L60 65L80 40L90 55V75H20Z" fill="#CCCCCC"></path></svg>
                  </div>
                  <div className="card-details">
                    <p className="card-title">{product.title}</p>
                    <span className="card-price">{product.price}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Message if no related products exist for that category */}
            {filteredRelated.length === 0 && (
              <p style={{ textAlign: 'center', marginTop: '2rem', color: '#888' }}>
                No related products found in this category.
              </p>
            )}
          </section>

        </div> {/* End of Right Column */}
      </main>
    </div>
  );
};

export default ProductDetail;