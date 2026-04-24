import React, { useState } from "react";
import "./register.css";
import { FwaehLogo } from "../icons/FwaehLogo";
import { Link } from "react-router-dom";

interface RegisterProps {
  onRegister: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  // 1. State for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 2. Frontend Validation
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    setIsLoading(true);

    try {
      // 3. Send the POST request to your Node.js backend
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }), // Note: We don't send confirmPassword to the backend
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // 4. Success! Save token and trigger redirect
      console.log("Registration successful:", data.user);
      localStorage.setItem("token", data.token);

      onRegister();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-page">
      {/* HEADER SECTION */}
      <header className="header">
        <div className="logo">
          <FwaehLogo width={120} color="#FFFF" />
          <span>©</span>
        </div>

        <nav className="nav-links">
          <a className="active">Home</a>
          <a>Product</a>
          <a>Contact</a>
        </nav>

        <div className="header-actions">
          <div className="search-bar">
            {/* Search Icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Search" />
          </div>

          {/* Heart/Wishlist Icon */}
          <button className="icon-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          {/* Bag/Cart Icon */}
          <button className="icon-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>

          {/* User Profile Icon */}
          <button className="icon-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </header>

      {/* MAIN CONTENT SECTION */}
      <main className="main-content">
        {/* Left Column: Register Form */}
        <div className="register-form-container">
          <h2>Create an Account.</h2>

          {/* Display Error Message */}
          {error && (
            <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="First Name *"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Last Name *"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email *"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Password *"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Eye Icon for Password */}
              <button type="button" className="eye-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Confirm Password *"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {/* Eye Icon for Password */}
              <button type="button" className="eye-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>

            <div className="opt-in-container">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  checked={newsletterOptIn}
                  onChange={(e) => setNewsletterOptIn(e.target.checked)}
                />
                <span className="checkbox-text">
                  Receive emails about new products, sales, and store events
                </span>
              </label>

              <p className="legal-text">
                Please view our{" "}
                <a href="/privacy-policy" target="_blank" rel="noreferrer">
                  Privacy Notice
                </a>{" "}
                and{" "}
                <a href="/financial-incentive" target="_blank" rel="noreferrer">
                  Notice of Financial Incentive
                </a>{" "}
                for more information.
              </p>
            </div>

            <button type="submit" className="register-btn" disabled={isLoading}>
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
        </div>

        {/* Right Column: Order Lookup Card */}
        <div className="order-lookup-card">
          <h3>Looking for your order?</h3>
          <p>
            See your order even if you are not a registered user. Enter the
            order number and your last name.
          </p>
          <button className="find-order-btn">Find Your Order</button>
        </div>
      </main>
    </div>
  );
};

export default Register;
