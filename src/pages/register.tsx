import React, { useState } from "react";
import "./register.css";

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
