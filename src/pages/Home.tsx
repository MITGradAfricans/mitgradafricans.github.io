import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TeamMembers from "../components/TeamMembers";
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

      <section className="breakdown-section">
        <div className="breakdown-section-header">
          <h2 className="breakdown-section-title">Our Pillars</h2>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            marginTop: "4rem",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, var(--aga-red), #e63946)",
              padding: "3rem 2rem",
              borderRadius: "20px",
              textAlign: "center",
              color: "white",
              boxShadow: "0 20px 40px rgba(214, 40, 40, 0.3)",
              transition: "transform 0.3s ease",
            }}
          >
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎯</div>
            <h3
              style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                marginBottom: "1rem",
                fontFamily: "arbotek, sans-serif",
              }}
            >
              Aim
            </h3>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.95 }}>
              Cultivating Purposeful Vision
            </p>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, var(--aga-yellow), #f8c95d)",
              padding: "3rem 2rem",
              borderRadius: "20px",
              textAlign: "center",
              color: "white",
              boxShadow: "0 20px 40px rgba(247, 179, 43, 0.3)",
              transition: "transform 0.3s ease",
            }}
          >
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>⚡</div>
            <h3
              style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                marginBottom: "1rem",
                fontFamily: "arbotek, sans-serif",
              }}
            >
              Act
            </h3>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.95 }}>
              Driving Academic and Professional Impact
            </p>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, var(--aga-green), #4a9e4a)",
              padding: "3rem 2rem",
              borderRadius: "20px",
              textAlign: "center",
              color: "white",
              boxShadow: "0 20px 40px rgba(59, 134, 59, 0.3)",
              transition: "transform 0.3s ease",
            }}
          >
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🌍</div>
            <h3
              style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                marginBottom: "1rem",
                fontFamily: "arbotek, sans-serif",
              }}
            >
              Africa
            </h3>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.95 }}>
              Connecting to the Continent
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <a
            href="about.html"
            className="btn btn-learn-more"
            style={{ fontSize: "1.1rem", padding: "1.2rem 3rem" }}
          >
            Learn More
          </a>
        </div>
      </section>

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

        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">60+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Countries Represented</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Events Per Year</div>
            </div>
          </div>
        </section>

  <TeamMembers />
  <CtaSection />
      </main>

      <Footer />

      <script src="script.js"></script>
    </div>
  );
}

export default Home;
