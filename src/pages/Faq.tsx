import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import React, { useState } from "react";
import heroImage from "../assets/images/hero-dome.webp";

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
        <a href="https://giving.mit.edu/search/node/2861476" target="_blank" rel="noopener">
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
      <HeroSection
        backgroundImage={heroImage}
        backgroundAlt="Massachusetts Institute of Technology Great Dome"
        sectionClassName="faq-hero"
      >
        <h2 className="hero-headline">Frequently Asked Questions</h2>
      </HeroSection>

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
                  {item.question}
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
              form to send us your specific question:<span>{ }</span>
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
      <CtaSection />
      <Footer />
    </div>
  );
}

export default Faq;
