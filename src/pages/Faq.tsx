import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
        Easy. Fill out{" "}
        <a
          href="https://forms.gle/agNbPNpu5UrkWhmw9"
          target="_blank"
          rel="noopener"
        >
          this form
        </a>
        , follow us on our socials and check our website for upcoming events and
        opportunities to participate!
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
        You can make donations{" "}
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
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx],
    );
  };

  return (
    <div>
      {/* Hero Section with Navigation */}
      <section className="hero-section faq-hero">
        {/* Navigation (inline, not using Navbar component) */}
        <Navbar />

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
                  style={{
                    display: openIndexes.includes(idx) ? "block" : "none",
                  }}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
          <div className="faq-contact">
            <p>
              If your question is not on the list, feel free to fill out this
              form to send us your specific question:
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
            <a href="#contact" className="btn btn-primary">
              Get Involved
            </a>
            <a href="about.html" className="btn btn-learn-more">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Faq;
