import React from 'react';
import './contact.css';
import { FwaehLogo } from '../assets/logo/FwaehLogo';

// 1. IMPORT YOUR BACKGROUND IMAGE HERE
// Replace this URL with your local import later (e.g., import skatePark from '../assets/skatepark.jpg';)
const heroBg = "src/assets/skatepark.jpg";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">

      {/* CONTACT HERO SECTION */}
      <section 
        className="contact-hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* The dark overlay to make text readable */}
        <div className="hero-overlay"></div>

        <div className="contact-hero-content">
          
          {/* Invisible spacer to push the center text perfectly into the middle */}
          <div className="spacer"></div>

          {/* Center Main Text */}
          <div className="center-text-container">
            <h1 className="hero-title">Get In Touch With Us</h1>
            {/* The Stylized Brush Script Fallback */}
            <br></br>
            <FwaehLogo className='hero-script-logo' width={550} />
          </div>

          {/* Bottom Details Grid */}
          <div className="bottom-details-container">
            
            {/* Left Side: Franchise Info */}
            <div className="left-details">
              <p>Our Franchise Remain opens for<br/>inquiries, partnerships, and new ideas</p>
            </div>

            {/* Right Side: Email and Address */}
            <div className="right-details">
              <div className="detail-block">
                <h4>GENERAL INQUIRIES</h4>
                <p>test@gmail.com</p>
              </div>
              
              <div className="detail-block">
                <h4>ADDRESS</h4>
                <p>123 Playground Stret</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-container">
          
          {/* Left Column: Contact Info */}
          <div className="contact-info-col">
            <p className="info-subtitle">GENERAL INQUIRIES</p>
            <h2 className="info-email">TEST@GMAIL.COM</h2>
            <div className="info-hours">
              <span>AT YOUR SERVICE</span>
              <span>MON-FRI 10:00 - 18:00 UTC</span>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="contact-form-col">
            <form className="inquiry-form">
              
              {/* Row 1: Split Fields */}
              <div className="form-row split-row">
                <div className="form-group">
                  <label>FIRST NAME</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>LAST NAME</label>
                  <input type="text" required />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" required />
              </div>

              {/* Row 3: Location */}
              <div className="form-group">
                <label>WHERE ARE YOU LOCATED?</label>
                <input type="text" required />
              </div>

              {/* Row 4: Phone */}
              <div className="form-group">
                <label>CONTACT NUMBER</label>
                <input type="tel" required />
              </div>

              {/* Row 5: Inquiry Type */}
              <div className="form-group">
                <label>TYPE OF INQUIRIES</label>
                <input type="text" required />
              </div>

            </form>
          </div>

        </div>
      </section>
      
    </div>
  );
};

export default Contact;