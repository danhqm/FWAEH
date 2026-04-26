import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

import landingGif from "../assets/landing-gif.gif";
import decksImg from "../assets/decks.jpg";
import clothing from "../assets/clothing.jpg";
import skate1 from "../assets/skate1.jpg";
import deck1 from "../assets/deck1.png";

const featuredProducts = [
  { id: 1, name: "Wave Deck", subtitle: "Deck", price: "MYR100", image: deck1 },
  {
    id: 2,
    name: "Classic Grip",
    subtitle: "Deck",
    price: "MYR35",
    image: skate1,
  },
  {
    id: 3,
    name: "Spitfire Wheels",
    subtitle: "Clothing",
    price: "MYR120",
    image: clothing,
  },
  {
    id: 4,
    name: "FWAEH Bearings",
    subtitle: "Clothing",
    price: "MYR80",
    image: decksImg,
  },
  {
    id: 5,
    name: "Vans Old Skool",
    subtitle: "Shoes",
    price: "MYR250",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 6,
    name: "FWAEH Hoodie",
    subtitle: "Shoes",
    price: "MYR180",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 7,
    name: "Skate Tool",
    subtitle: "Deck",
    price: "MYR50",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 8,
    name: "Ricta Clouds",
    subtitle: "Deck",
    price: "MYR110",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 9,
    name: "Independent Trucks",
    subtitle: "Clothing",
    price: "MYR150",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 10,
    name: "FWAEH Cap",
    subtitle: "Clothing",
    price: "MYR70",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=400",
  },
];

const Landing: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll > 0) {
        setScrollProgress(scrollLeft / (maxScroll / 2));
      }
    }
  };

  // The Infinite Auto-Scroll Logic
  useEffect(() => {
    let animationFrameId: number;

    const scrollLoop = () => {
      if (scrollRef.current && isPlaying) {
        scrollRef.current.scrollLeft += 0.5; // Adjust this number to change scroll speed

        // Infinite loop magic: If we scroll past the first set of items, silently snap back to the start
        const halfWidth = scrollRef.current.scrollWidth / 2;
        if (scrollRef.current.scrollLeft >= halfWidth) {
          scrollRef.current.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scrollLoop);
    };
    if (isPlaying) {
      animationFrameId = requestAnimationFrame(scrollLoop);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying]);

  // Observer for the Discover More animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the viewport, set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing once it animates in so it doesn't repeat
          if (headingRef.current) observer.unobserve(headingRef.current);
        }
      },
      { threshold: 0.2 }, // Triggers when 20% of the heading is visible
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <div className="landing-page">
      {/* HERO SECTION */}
      <section className="hero-full-width">
        <img
          src={landingGif}
          alt="FWAEH Welcome Animation"
          className="hero-media-full"
        />
        {/* Adds the grainy film effect */}
        <div className="hero-grain-overlay"></div>

        {/* Welcoming Message */}
        <div className="hero-welcome-text">
          <h1 className="hero-title-main">EMBRACE THE STREETS.</h1>
          <p className="hero-subtitle">FWAEH style bruv.</p>
        </div>
      </section>

      {/* FRESH AND HOT SECTION */}
      <section className="fresh-hot-section">
        <div className="fresh-hot-header">
          <h2 className="fresh-hot-title">🔥 FRESH AND HOT 🔥</h2>
          <div className="fresh-hot-timer">
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
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>23:00:00 — Grab while you can!</span>
          </div>
          {/* Enhancement 1: Route to Product page with a state indicating "Limited Time" */}
          <Link
            to="/product"
            state={{ filter: "Limited Time" }}
            className="view-more-btn"
            style={{ textDecoration: "none" }}
          >
            View More
          </Link>
        </div>
        {/* Enhancement 2: Click to toggle play/pause */}
        <div
          className="product-cards-container"
          ref={scrollRef}
          onScroll={handleScroll}
          onClick={() => setIsPlaying(!isPlaying)}
          style={{ cursor: "pointer" }}
        >
          {/* We map the array TWICE to create a seamless infinite scroll illusion */}
          {[...featuredProducts, ...featuredProducts].map((product, index) => (
            /* The Link REPLACES the outer div! */
            <Link
              to="/product"
              className="product-card"
              key={`${product.id}-${index}`}
              onClick={(e) => e.stopPropagation()} // Stops the carousel from pausing
              style={{ textDecoration: "none" }} // Prevents text from being underlined
            >
              <div className="card-image-placeholder">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card-img"
                />
              </div>
              <div className="card-details">
                <div className="card-text">
                  <span className="card-title">{product.name}</span>
                  <span className="card-subtitle">{product.subtitle}</span>
                </div>
                <span className="card-price">{product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DISCOVER MORE SECTION */}
      <section className="discover-more-section">
        <h2
          ref={headingRef}
          className={`section-heading-left ${isVisible ? "slide-in-right" : ""}`}
        >
          DISCOVER MORE
        </h2>

        <div className="discover-grid-container">
          {/* Enhancement 3: Shop Now buttons lead to specific product categories */}
          <div className="discover-large-block">
            <img src={decksImg} alt="Discover Large" className="discover-img" />
            <Link
              to="/product/Skate%20Deck"
              className="shop-now-btn"
              style={{ textDecoration: "none" }}
            >
              Shop Now
            </Link>
          </div>

          <div className="discover-small-stack">
            <div className="discover-small-block">
              <img
                src={clothing}
                alt="Discover Small Top"
                className="discover-img"
              />
              <Link
                to="/product/Skate%20Deck"
                className="shop-now-btn"
                style={{ textDecoration: "none" }}
              >
                Shop Now
              </Link>
            </div>

            <div className="discover-small-block">
              <img
                src={skate1}
                alt="Discover Small Bottom"
                className="discover-img"
              />
              <Link
                to="/product/Skate%20Deck"
                className="shop-now-btn"
                style={{ textDecoration: "none" }}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INFO STRIP SECTION */}
      <section className="info-strip-section">
        {/* Column 1: Shipping */}
        <div className="info-column">
          <div className="info-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <h4>WORLDWIDE SHIPPING</h4>
          <p>
            We ship to over 100 countries with fast and reliable delivery
            options. Track your order and get it wherever you are.
          </p>
          <Link to="/support?tab=shipping">Shipping Details</Link>
        </div>

        {/* Column 2: Returns */}
        <div className="info-column">
          <div className="info-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              <path d="M16 10H8.5"></path>
              <polyline points="11 7.5 8.5 10 11 12.5"></polyline>
            </svg>
          </div>
          <h4>30-Days Free Returns</h4>
          <p>
            Not the right fit? Return or exchange your order for free within 30
            days, T&C applied.
          </p>
          <Link to="/support?tab=shipping">Return Policy</Link>
        </div>

        {/* Column 3: Support */}
        <div className="info-column">
          <div className="info-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
          </div>
          <h4>24/7 Customer Support</h4>
          <p>
            Our team is available around the clock to help with orders, returns,
            and any question you have.
          </p>
          <Link to="/contact">24/7 Customer Support</Link>
        </div>
      </section>

      {/* UPCOMING TRENDS SECTION */}
      <section className="upcoming-trends-section">
        {/* Left Column: Text */}
        <div className="trends-text">
          <h2 className="trends-heading">
            UPCOMING
            <br />
            TRENDS
          </h2>
          <p className="trends-subtext">Stay tuned!</p>
        </div>

        {/* Right Column: Images */}
        <div className="trends-image-grid">
          <div className="trend-image-wrapper">
            {/* Replace this src with your own imported image later! */}
            <img
              src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&q=80&w=800"
              alt="Upcoming Trend 1"
              className="trend-img"
            />
          </div>
          <div className="trend-image-wrapper">
            {/* Replace this src with your own imported image later! */}
            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=400"
              alt="Upcoming Trend 2"
              className="trend-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
