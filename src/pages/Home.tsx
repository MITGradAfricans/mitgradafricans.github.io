import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TeamMembers from "../components/TeamMembers";
import StatsSection from "../components/StatsSection";
import PillarSection from "../components/PillarSection";
import React from "react";

function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-background">
          <img
            src="./images/Massachusetts-Institute-of-Technology-Great-Dome-Building-10-and-Barker-Library__4-060693_00_DOME_N189_lrg-2560x1777.7777777778-c-default.webp"
            alt="Massachusetts Institute of Technology Great Dome"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>

        <Navbar />

        <div className="hero-content">
          <h2 className="hero-headline">
            Where
            <span className="highlight">African scholarship</span> meets
            <br />
            <span className="highlight-yellow">innovation</span>
            and <span className="highlight-green">global influence</span>.
          </h2>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-left">
            <h2 className="mission-title">
              Building African Excellence.
              <br />
              Creating lasting impact.
            </h2>
            <div style={{ marginTop: "2rem" }}>
              <a href="#about" className="btn btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
          <div className="mission-right">
            <p className="mission-description">
              The MIT African Graduate Association (AGA) fosters a strong,
              supportive community for African graduate scholars, enriching them
              academically, professionally, and culturally. AGA amplifies
              African voices and contributions, connecting interdisciplinary
              African research talents with innovative initiatives to drive
              developmental and social change across the continent.
            </p>
          </div>
        </div>
      </section>

  <PillarSection />

      <main className="main-content">
        <section id="about" className="content-section">
          <div className="section-content">
            <div className="text-block">
              <h2>About Us</h2>
              <p>
                We are a vibrant community dedicated to supporting African
                graduate students at the Massachusetts Institute of Technology.
                We foster academic excellence, professional growth, and cultural
                exchange while building lasting connections within the MIT
                community and beyond.
              </p>
            </div>
            <div className="image-block">
              <img
                src="./images/about-image.jpg"
                alt="MIT AGA Community"
                className="section-image"
              />
            </div>
          </div>
        </section>

        <StatsSection />

        <TeamMembers />
        <CtaSection />
      </main>

      <Footer />

      <script src="script.js"></script>
    </div>
  );
}

export default Home;
