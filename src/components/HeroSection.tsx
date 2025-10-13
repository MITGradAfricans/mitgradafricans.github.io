import React from "react";
import Navbar from "./Navbar";

interface HeroSectionProps {
  backgroundImage?: string;
  backgroundAlt?: string;
  overlay?: boolean;
  sectionClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  backgroundAlt = "",
  overlay = true,
  sectionClassName = "",
  contentClassName = "",
  children,
}) => {
  const sectionClasses = ["hero-section", sectionClassName]
    .filter(Boolean)
    .join(" ")
    .trim();

  const contentClasses = ["hero-content", contentClassName]
    .filter(Boolean)
    .join(" ")
    .trim();

  return (
    <section className={sectionClasses}>
      {backgroundImage ? (
        <div className="hero-background">
          <img
            src={backgroundImage}
            alt={backgroundAlt}
            className="hero-image"
          />
          {overlay ? <div className="hero-overlay"></div> : null}
        </div>
      ) : null}
      <Navbar />
      <div className={contentClasses}>{children}</div>
    </section>
  );
};

export default HeroSection;
