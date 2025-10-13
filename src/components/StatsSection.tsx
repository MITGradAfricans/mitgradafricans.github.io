import React from "react";

const stats = [
  { number: "60+", label: "Active Members" },
  { number: "15+", label: "Countries Represented" },
  { number: "20+", label: "Events Per Year" },
];

const StatsSection: React.FC = () => (
  <section className="stats-section">
    <div className="stats-container">
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
