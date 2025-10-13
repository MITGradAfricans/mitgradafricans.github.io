import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="hero-nav">
      <div className="nav-brand">
        <img
          src="./public/images/Asset 1.png"
          alt="MIT AGA Logo"
          className="nav-logo"
        />
        <h1 className="brand-name">
          MIT
          <br />
          <span className="brand-accent">A</span>frican
          <br />
          <span className="brand-accent-yellow">G</span>raduate
          <br />
          <span className="brand-accent-green">A</span>ssociation
        </h1>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link nav-red">
          Home
        </Link>
        <Link to="/about" className="nav-link nav-yellow">
          About Us
        </Link>
        <Link to="/blog" className="nav-link nav-green">
          Our Blog
        </Link>
        <Link to="/resources" className="nav-link nav-red">
          Resources
        </Link>
        <Link to="/events" className="nav-link nav-yellow">
          Our Events
        </Link>
        <Link to="/faq" className="nav-link nav-green">
          FAQ
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
