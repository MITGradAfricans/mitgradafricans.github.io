import React from "react";

export interface PillarProps {
  icon: string;
  title: string;
  description: string;
  style: React.CSSProperties;
}

const Pillar: React.FC<PillarProps> = ({ icon, title, description, style }) => (
  <div style={style}>
    <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{icon}</div>
    <h3
      style={{
        fontSize: "2.5rem",
        fontWeight: 900,
        marginBottom: "1rem",
        fontFamily: "arbotek, sans-serif",
      }}
    >
      {title}
    </h3>
    <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.95 }}>{description}</p>
  </div>
);

export default Pillar;