import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img
            src="./images/Asset 1.png"
            alt="MIT AGA Logo"
            className="footer-aga-logo"
          />
          <h3>MIT African Graduate Association</h3>
          <p>
            Where African scholarship meets innovation and global influence.
          </p>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/mit-african-graduate-association/?viewAsMember=true">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <img
            src="./images/mit_logo_std_rgb_white.png"
            alt="MIT Logo"
            className="footer-mit-logo"
          />
          <h3>Massachusetts Institute of Technology</h3>
          <p>77 Massachusetts Avenue, Cambridge, MA, USA</p>
          <a href="#" className="footer-accessibility">
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
