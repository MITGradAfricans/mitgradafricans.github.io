
import React, { useState } from "react";

const faqData = [
  {
    question: "Who can join the MIT African Graduate Association?",
    answer:
      "Membership is open to all MIT graduate students who identify with or are interested in Africa, regardless of nationality or background.",
  },
  {
    question: "How can I get involved in AGA?",
    answer: (
      <>
        Easy. Fill out {" "}
        <a
          href="https://forms.gle/agNbPNpu5UrkWhmw9"
          target="_blank"
          rel="noopener"
        >
          this form
        </a>
        , follow us on our socials and check our website for upcoming events and opportunities to participate!
      </>
    ),
  },
  {
    question: "Does AGA offer mentorship programs?",
    answer:
      "Yes! We have a mentorship program that connects new and prospective students with experienced members and alumni for guidance and support.",
  },
  {
    question: "How can I support AGA's mission?",
    answer:
      "You can support us by attending our events, volunteering your time, making a donation, or spreading awareness about our organization within the MIT community and beyond.",
  },
  {
    question: "How to make donations?",
    answer: (
      <>
        You can make donations {" "}
        <a href="#" target="_blank" rel="noopener">
          here
        </a>
        . Thanks for supporting us!
      </>
    ),
  },
];

function Faq() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFaq = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <div>
      {/* Hero Section with Navigation */}
      <section className="hero-section faq-hero">
        {/* Navigation (inline, not using Navbar component) */}
        <nav className="hero-nav">
          <div className="nav-brand">
            <img src="./images/Asset 1.png" alt="MIT AGA Logo" className="nav-logo" />
            <h1 className="brand-name">
              MIT<br />
              <span className="brand-accent">A</span>frican<br />
              <span className="brand-accent-yellow">G</span>raduate<br />
              <span className="brand-accent-green">A</span>ssociation
            </h1>
          </div>
          <div className="nav-links">
            <a href="index.html#home" className="nav-link">Home</a>
            <a href="about.html" className="nav-link">About Us</a>
            <a href="#blog" className="nav-link">Our Blog</a>
            <a href="resources.html" className="nav-link">Resources</a>
            <a href="events.html" className="nav-link">Our Events</a>
            <a href="faq.html" className="nav-link active">FAQ</a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="hero-content">
          <h2 className="hero-headline">Frequently Asked Questions</h2>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="faq-container">
          <div className="faq-list">
            {faqData.map((item, idx) => (
              <div className="faq-item" key={idx}>
                <button
                  className="faq-question"
                  aria-expanded={openIndexes.includes(idx)}
                  onClick={() => toggleFaq(idx)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="faq-bullet">&bull;</span> {item.question}
                  <span className="faq-arrow">
                    {openIndexes.includes(idx) ? "▲" : "▼"}
                  </span>
                </button>
                <div
                  className="faq-answer"
                  style={{ display: openIndexes.includes(idx) ? "block" : "none" }}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
          <div className="faq-contact">
            <p>
              If your question is not on the list, feel free to fill out this form
              to send us your specific question:
              <a
                href="https://forms.gle/agNbPNpu5UrkWhmw9"
                target="_blank"
                rel="noopener"
                className="faq-contact-link"
              >
                Contact Form
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <a href="#contact" className="btn btn-primary">Get Involved</a>
            <a href="about.html" className="btn btn-learn-more">Learn More</a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a
                href="https://www.linkedin.com/company/mit-african-graduate-association/?viewAsMember=true"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#"><i className="fab fa-instagram"></i></a>
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
            <a href="#" className="footer-accessibility">Accessibility</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2025 MIT African Graduate Association. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Faq;
