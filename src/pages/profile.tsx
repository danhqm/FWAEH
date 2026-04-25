import React from "react";
import { useSearchParams } from "react-router-dom";
import "./Profile.css";

const Profile: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("tab") || "general";

  const handleTabChange = (tabName: string) => {
    setSearchParams({ tab: tabName });
  };

  // --- HARDCODED MOCK DATA ---
  const mockOrders = [
    {
      order_id: "ORD-8F92A",
      order_date: "2026-04-10",
      total_amount: 240.0,
      delivery_status: "delivered",
      items: [
        { name: "FWAEH Classic Hoodie", quantity: 1, price: 180.0 },
        { name: "FWAEH Skate Socks", quantity: 1, price: 60.0 },
      ],
    },
    {
      order_id: "ORD-3C41B",
      order_date: "2026-04-22",
      total_amount: 150.0,
      delivery_status: "pending",
      items: [{ name: "Independent Trucks Set", quantity: 1, price: 150.0 }],
    },
  ];

  const mockWishlist = [
    {
      product_id: "prod-1",
      name: "Vans Old Skool Pro",
      price: 299.0,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80",
    },
    {
      product_id: "prod-2",
      name: 'FWAEH Signature Deck 8.25"',
      price: 220.0,
      image:
        "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?w=400&q=80",
    },
  ];

  return (
    <div className="profile-page">
      <main className="profile-main">
        <div className="profile-header">
          <h2>My Account.</h2>
        </div>

        <div className="profile-container">
          {/* LEFT SIDEBAR: User Summary */}
          <aside className="profile-sidebar">
            <div className="avatar-container">
              <div className="avatar-circle">
                <span className="avatar-initials">JD</span>
              </div>
            </div>
            <h3 className="sidebar-name">John Doe</h3>
            <p className="sidebar-email">john.doe@example.com</p>

            <button className="sign-out-btn">Sign Out</button>
          </aside>

          {/* RIGHT CONTENT: Tabs and Forms */}
          <section className="profile-content">
            {/* Custom Tab Navigation */}
            <nav className="profile-tabs">
              <button
                className={
                  activeTab === "general" ? "tab-btn active" : "tab-btn"
                }
                onClick={() => handleTabChange("general")}
              >
                General
              </button>
              <button
                className={
                  activeTab === "orders" ? "tab-btn active" : "tab-btn"
                }
                onClick={() => handleTabChange("orders")}
              >
                Order History
              </button>
              <button
                className={
                  activeTab === "wishlist" ? "tab-btn active" : "tab-btn"
                }
                onClick={() => handleTabChange("wishlist")}
              >
                Wishlist
              </button>
            </nav>

            {/* TAB CONTENT */}
            <div className="tab-body">
              {/* GENERAL TAB */}
              {activeTab === "general" && (
                <div className="tab-pane">
                  {/* Profile Form */}
                  <div className="form-section">
                    <h4 className="section-title">Profile</h4>
                    <div className="form-row">
                      <div className="input-group">
                        <label>First Name</label>
                        <input type="text" defaultValue="John" />
                      </div>
                      <div className="input-group">
                        <label>Last Name</label>
                        <input type="text" defaultValue="Doe" />
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Shipping Address</label>
                      <input
                        type="text"
                        placeholder="123 Skatepark Ave, KL, Malaysia"
                      />
                    </div>
                    <div className="input-group">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+60 12-345 6789" />
                    </div>
                  </div>

                  {/* Account Form */}
                  <div className="form-section">
                    <h4 className="section-title">Account</h4>
                    <div className="form-row">
                      <div className="input-group">
                        <label>Email</label>
                        <input
                          type="email"
                          defaultValue="john.doe@example.com"
                          disabled
                        />
                      </div>
                      <div className="input-group">
                        <label>Password</label>
                        <input
                          type="password"
                          defaultValue="********"
                          disabled
                        />
                      </div>
                    </div>
                    <button className="text-link-btn">Change Password</button>
                  </div>

                  {/* Preferences Form */}
                  <div className="form-section">
                    <h4 className="section-title">Preferences</h4>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        defaultChecked
                      />
                      <span className="checkbox-text">
                        Receive monthly product updates and exclusive drops.
                      </span>
                    </label>
                  </div>

                  <div className="form-actions">
                    <button className="save-btn">Save Information</button>
                  </div>
                </div>
              )}

              {/* ORDERS TAB */}
              {activeTab === "orders" && (
                <div className="tab-pane">
                  <h4 className="section-title">Order History</h4>
                  <div className="orders-list">
                    {mockOrders.map((order) => (
                      <div key={order.order_id} className="order-card">
                        <div className="order-header">
                          <div className="order-info">
                            <span className="order-id">
                              Order #{order.order_id}
                            </span>
                            <span className="order-date">
                              {order.order_date}
                            </span>
                          </div>
                          <div
                            className={`order-status ${order.delivery_status}`}
                          >
                            {order.delivery_status.toUpperCase()}
                          </div>
                        </div>

                        <div className="order-items">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="order-item-row">
                              <span>
                                {item.quantity}x {item.name}
                              </span>
                              <span>RM {item.price.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>

                        <div className="order-footer">
                          <span className="total-label">Total Amount</span>
                          <span className="total-amount">
                            RM {order.total_amount.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* WISHLIST TAB */}
              {activeTab === "wishlist" && (
                <div className="tab-pane">
                  <h4 className="section-title">Your Wishlist</h4>
                  <div className="wishlist-grid">
                    {mockWishlist.map((item) => (
                      <div key={item.product_id} className="wishlist-card">
                        <div className="wishlist-img-wrapper">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="wishlist-img"
                          />
                          <button className="remove-wishlist-btn">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                        </div>
                        <div className="wishlist-details">
                          <h5 className="wishlist-name">{item.name}</h5>
                          <p className="wishlist-price">
                            RM {item.price.toFixed(2)}
                          </p>
                          <button className="add-to-cart-btn">
                            Move to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;
