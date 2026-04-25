import React, { useState } from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  // State to manage which tab is currently active
  const [activeTab, setActiveTab] = useState<'general' | 'orders' | 'wishlist'>('general');

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
              {/* Placeholder for user avatar - could eventually be pulled from Supabase */}
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
                className={activeTab === 'general' ? 'tab-btn active' : 'tab-btn'}
                onClick={() => setActiveTab('general')}
              >
                General
              </button>
              <button 
                className={activeTab === 'orders' ? 'tab-btn active' : 'tab-btn'}
                onClick={() => setActiveTab('orders')}
              >
                Order History
              </button>
              <button 
                className={activeTab === 'wishlist' ? 'tab-btn active' : 'tab-btn'}
                onClick={() => setActiveTab('wishlist')}
              >
                Wishlist
              </button>
            </nav>

            {/* TAB CONTENT */}
            <div className="tab-body">
              
              {/* GENERAL TAB */}
              {activeTab === 'general' && (
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
                      <input type="text" placeholder="123 Skatepark Ave, KL, Malaysia" />
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
                        <input type="email" defaultValue="john.doe@example.com" disabled />
                      </div>
                      <div className="input-group">
                        <label>Password</label>
                        <input type="password" defaultValue="********" disabled />
                      </div>
                    </div>
                    <button className="text-link-btn">Change Password</button>
                  </div>

                  {/* Preferences Form */}
                  <div className="form-section">
                    <h4 className="section-title">Preferences</h4>
                    <label className="checkbox-label">
                      <input type="checkbox" className="custom-checkbox" defaultChecked />
                      <span className="checkbox-text">Receive monthly product updates and exclusive drops.</span>
                    </label>
                  </div>

                  <div className="form-actions">
                    <button className="save-btn">Save Information</button>
                  </div>
                </div>
              )}

              {/* ORDERS TAB (Placeholder for later) */}
              {activeTab === 'orders' && (
                <div className="tab-pane">
                  <h4 className="section-title">Order History</h4>
                  <div className="empty-state">
                    <p>You haven't placed any orders yet.</p>
                    <button className="shop-now-btn">Start Shopping</button>
                  </div>
                </div>
              )}

              {/* WISHLIST TAB (Placeholder for later) */}
              {activeTab === 'wishlist' && (
                <div className="tab-pane">
                  <h4 className="section-title">Your Wishlist</h4>
                  <div className="empty-state">
                    <p>Your wishlist is currently empty.</p>
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