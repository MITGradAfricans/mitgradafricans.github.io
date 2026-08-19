import React from "react";
import agaLogo from "../assets/images/aga-logo.png";
import mitLogo from "../assets/images/mit-logo-white.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={agaLogo} alt="MIT AGA Logo" className="footer-aga-logo" />
          <h3>MIT African Graduate Association</h3>
          <p>
            Where African scholarship, innovation and global influence converge.
          </p>
          <div className="social-links">
            <a
              href="https://twitter.com/mitaga"
              target="_blank"
              rel="noreferrer"
              aria-label="MIT AGA on Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/mit-aga/?viewAsMember=true"
              target="_blank"
              rel="noreferrer"
              aria-label="MIT AGA on LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/mit.aga.ig/"
              target="_blank"
              rel="noreferrer"
              aria-label="MIT AGA on Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <img src={mitLogo} alt="MIT Logo" className="footer-mit-logo" />
          <h3>Massachusetts Institute of Technology</h3>
          <p>77 Massachusetts Avenue, Cambridge, MA, USA</p>
          <a
            href="https://accessibility.mit.edu/"
            className="footer-accessibility"
            target="_blank"
            rel="noreferrer"
          >
            Accessibility
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2025 MIT African Graduate Association. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
