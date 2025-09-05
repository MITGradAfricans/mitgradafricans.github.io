import React from "react";

function Navbar() {
  return (
    <nav className="hero-nav">
      <div className="nav-brand">
        <img
          src="./images/Asset 1.png"
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
        <a href="#home" className="nav-link nav-red">
          Home
        </a>
        <a href="about.html" className="nav-link nav-yellow">
          About Us
        </a>
        <a href="#blog" className="nav-link nav-green">
          Our Blog
        </a>
        <a href="resources.html" className="nav-link nav-red">
          Resources
        </a>
        <a href="events.html" className="nav-link nav-yellow">
          Our Events
        </a>
        <a href="faq.html" className="nav-link nav-green">
          FAQ
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
