import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Support.css';

// --- CUSTOM SKATEBOARD/STREETWEAR FAQ DATA ---
const faqData = [
  {
    id: 1,
    question: "When will my order ship?",
    answer: "All orders are processed within 24 hours. Local Malaysian shipments take 2-3 business days. International orders typically arrive within 7-14 business days, depending on customs."
  },
  {
    id: 2,
    question: "Can I return a deck I've already skated?",
    answer: "No. Decks must be completely un-skated, un-gripped, and still in their original shrink wrap to be eligible for a return. Once you grip it or rip it, it's yours."
  },
  {
    id: 3,
    question: "Will you restock limited edition drops?",
    answer: "FWAEH thrives on exclusivity. Limited runs are usually one-and-done. However, keep an eye on our 'Fresh & Hot' section on the homepage for surprise vault releases."
  },
  {
    id: 4,
    question: "What size skateboard deck should I get?",
    answer: "It depends on your shoe size and riding style. 8.0\" to 8.25\" is the modern standard for street skating. If you ride pools or transition, you might want to size up to an 8.5\" or larger."
  },
  {
    id: 5,
    question: "Do your shoes fit true to size?",
    answer: "Yes, our skate shoes fit true to size. They feature a reinforced toe box, so they might feel slightly snug out of the box, but they will break in perfectly after a few sessions."
  }
];

const Support: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'faq';
  
  // State specifically for handling the FAQ accordion open/close logic
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleTabChange = (tabName: string) => {
    setSearchParams({ tab: tabName });
    // Reset accordion when switching tabs just to be clean
    setExpandedFaq(null); 
  };

  const toggleFaq = (id: number) => {
    if (expandedFaq === id) {
      setExpandedFaq(null); // Close it if it's already open
    } else {
      setExpandedFaq(id); // Open the clicked one
    }
  };

  return (
    <div className="support-page">

      <main className="support-main">
        <div className="support-header">
          <h2>Support & Policies.</h2>
        </div>

        <div className="support-container">
          
          {/* LEFT SIDEBAR: Navigation */}
          <aside className="support-sidebar">
            <h3 className="sidebar-title">Directory</h3>
            <nav className="support-tabs-vertical">
              <button 
                className={activeTab === 'faq' ? 'tab-btn active' : 'tab-btn'}
                onClick={() => handleTabChange('faq')}
              >
                FAQ
              </button>
              <button 
                className={activeTab === 'shipping' ? 'tab-btn active' : 'tab-btn'}
                onClick={() => handleTabChange('shipping')}
              >
                Shipping & Returns
              </button>
              <button 
                className={activeTab === 'terms' ? 'tab-btn active' : 'tab-btn'}
                onClick={() => handleTabChange('terms')}
              >
                Terms & Conditions
              </button>
              <button 
                className={activeTab === 'disclaimer' ? 'tab-btn active' : 'tab-btn'}
                onClick={() => handleTabChange('disclaimer')}
              >
                Disclaimer
              </button>
              <button 
                className={activeTab === 'cookies' ? 'tab-btn active' : 'tab-btn'}
                onClick={() => handleTabChange('cookies')}
              >
                Cookie Statement
              </button>
            </nav>
          </aside>

          {/* RIGHT CONTENT: Tab Data */}
          <section className="support-content">
            
            {/* --- FAQ TAB --- */}
            {activeTab === 'faq' && (
              <div className="tab-pane fade-in">
                <h3 className="content-title">Frequently Asked Questions</h3>
                <div className="faq-accordion">
                  {faqData.map((faq) => (
                    <div 
                      key={faq.id} 
                      className={`faq-item ${expandedFaq === faq.id ? 'open' : ''}`}
                    >
                      <button 
                        className="faq-question" 
                        onClick={() => toggleFaq(faq.id)}
                      >
                        {faq.question}
                        <span className="faq-icon">
                          {expandedFaq === faq.id ? '−' : '+'}
                        </span>
                      </button>
                      <div className="faq-answer-wrapper">
                        <p className="faq-answer">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* --- SHIPPING TAB --- */}
            {activeTab === 'shipping' && (
              <div className="tab-pane fade-in text-content">
                <h3 className="content-title">Shipping & Returns</h3>
                <h4>Worldwide Shipping</h4>
                <p>We ship to over 100 countries. Standard processing time is 1-2 business days. Tracking information will be emailed to you as soon as your order leaves our warehouse.</p>
                <h4>30-Day Free Returns</h4>
                <p>Not the right fit? Return or exchange your apparel and shoes for free within 30 days. Hardgoods (decks, wheels, bearings) must be unopened and unused to qualify for a refund.</p>
              </div>
            )}

            {/* --- TERMS TAB --- */}
            {activeTab === 'terms' && (
              <div className="tab-pane fade-in text-content">
                <h3 className="content-title">Terms and Conditions</h3>
                <p>Welcome to FWAEH. By accessing our website, you agree to these Terms and Conditions. We reserve the right to refuse service to anyone for any reason at any time.</p>
                <p>All content included on this site, such as text, graphics, logos, and images, is the property of FWAEH and protected by international copyright laws. Unauthorized reproduction is strictly prohibited.</p>
              </div>
            )}

            {/* --- DISCLAIMER TAB --- */}
            {activeTab === 'disclaimer' && (
              <div className="tab-pane fade-in text-content">
                <h3 className="content-title">Disclaimer</h3>
                <p>Skateboarding is an inherently dangerous activity. FWAEH is not responsible for any injuries, damages, or death resulting from the use of our hardgoods or apparel.</p>
                <p>Ride within your limits, wear appropriate safety gear when necessary, and always inspect your equipment before dropping in.</p>
              </div>
            )}

            {/* --- COOKIES TAB --- */}
            {activeTab === 'cookies' && (
              <div className="tab-pane fade-in text-content">
                <h3 className="content-title">Cookie Statement</h3>
                <p>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.</p>
                <p>Essential cookies are required to allow you to add items to your cart and complete the checkout process securely.</p>
              </div>
            )}

          </section>
        </div>
      </main>
    </div>
  );
};

export default Support;