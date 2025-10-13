import React from "react";
import { Link } from "react-router-dom";
import agaLogo from "../assets/images/aga-logo.png";

type NavbarProps = React.HTMLAttributes<HTMLElement>;

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className = "", ...rest }, ref) => {
    const navClasses = ["hero-nav", className].filter(Boolean).join(" ");

    return (
      <nav ref={ref} className={navClasses} {...rest}>
        <div className="nav-brand">
          <img src={agaLogo} alt="MIT AGA Logo" className="nav-logo" />
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
  },
);

Navbar.displayName = "Navbar";

export default Navbar;
