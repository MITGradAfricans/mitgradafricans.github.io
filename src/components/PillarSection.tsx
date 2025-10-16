import React from "react";
import Pillar from "./Pillar";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: "🎯",
    title: "Aim",
    description: "Cultivating Purposeful Vision",
    style: {
      background: "linear-gradient(135deg, var(--aga-red), #e63946)",
      padding: "clamp(1.25rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)",
      borderRadius: "20px",
      textAlign: "center" as const,
      color: "white",
      boxShadow: "0 20px 40px rgba(214, 40, 40, 0.3)",
      transition: "transform 0.3s ease",
    },
  },
  {
    icon: "⚡",
    title: "Act",
    description: "Driving Academic and Professional Impact",
    style: {
      background: "linear-gradient(135deg, var(--aga-yellow), #f8c95d)",
      padding: "clamp(1.25rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)",
      borderRadius: "20px",
      textAlign: "center" as const,
      color: "white",
      boxShadow: "0 20px 40px rgba(247, 179, 43, 0.3)",
      transition: "transform 0.3s ease",
    },
  },
  {
    icon: "🌍",
    title: "Africa",
    description: "Connecting to the Continent",
    style: {
      background: "linear-gradient(135deg, var(--aga-green), #4a9e4a)",
      padding: "clamp(1.25rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)",
      borderRadius: "20px",
      textAlign: "center" as const,
      color: "white",
      boxShadow: "0 20px 40px rgba(59, 134, 59, 0.3)",
      transition: "transform 0.3s ease",
    },
  },
];

const PillarSection: React.FC = () => (
  <section className="breakdown-section">
    <div className="breakdown-section-header">
      <h2 className="breakdown-section-title">Our Pillars</h2>
    </div>
    <div className="pillars-grid">
      {pillars.map((pillar) => (
        <Pillar key={pillar.title} {...pillar} />
      ))}
    </div>
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <Link
        to="/about"
        className="btn btn-learn-more"
        style={{ fontSize: "1.1rem", padding: "1.2rem 3rem" }}
      >
        Learn More
      </Link>
    </div>
  </section>
);

export default PillarSection;
