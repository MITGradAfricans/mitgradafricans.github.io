import React from "react";
import { Link } from "react-router-dom";

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="city-scroll-container">
        <div className="city-scroll-border">
          <div className="city-scroll-content">
            <span>Lagos</span>
            <span>Nairobi</span>
            <span>Cairo</span>
            <span>Johannesburg</span>
            <span>Accra</span>
            <span>Addis Ababa</span>
            <span>Casablanca</span>
            <span>Dar es Salaam</span>
            <span>Kinshasa</span>
            <span>Algiers</span>
            <span>Lagos</span>
            <span>Nairobi</span>
            <span>Cairo</span>
            <span>Johannesburg</span>
            <span>Accra</span>
            <span>Addis Ababa</span>
            <span>Casablanca</span>
            <span>Dar es Salaam</span>
            <span>Kinshasa</span>
            <span>Algiers</span>
          </div>
        </div>
      </div>
      <div className="cta-content">
        <h2>Join Our Community</h2>
        <p>
          Just click below and connect with us to start your journey with MIT
          AGA.
        </p>
        <div className="cta-buttons">
          <Link to="/faq" className="btn btn-primary">
            Get Involved
          </Link>
          <Link to="/about" className="btn btn-learn-more">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
