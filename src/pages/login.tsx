import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  // 1. State for form inputs and error/loading handling
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // 2. Send the POST request to your Node.js backend
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Throw an error so the catch block handles it
        throw new Error(data.message || "Something went wrong");
      }

      // 3. Success! Save the token to localStorage
      console.log("Login successful:", data.user);
      localStorage.setItem("token", data.token);

      // 4. Trigger the parent function (e.g., redirect to dashboard)
      onLogin();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
     
      {/* MAIN CONTENT SECTION */}
      <main className="main-content">
        {/* Left Column: Login Form */}
        <div className="login-form-container">
          <h2>Log in.</h2>

          <form onSubmit={handleSubmit}>
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

            <span className="password-help">Password Help?</span>

            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <div className="signup-prompt">
            <span className="bold-italic">Don't have an account?</span>
            <Link to="/register" className="light-italic">
              Create One Now
            </Link>
          </div>
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

export default Login;
