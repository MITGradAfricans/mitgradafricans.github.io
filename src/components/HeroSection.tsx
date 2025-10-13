import React, { useEffect, useRef } from "react";
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const sectionClasses = ["hero-section", sectionClassName]
    .filter(Boolean)
    .join(" ")
    .trim();

  const contentClasses = ["hero-content", contentClassName]
    .filter(Boolean)
    .join(" ")
    .trim();

  useEffect(() => {
    const navEl = navRef.current;
    const sentinel = sentinelRef.current;
    if (!navEl || !sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          navEl.classList.remove("fixed");
        } else {
          navEl.classList.add("fixed");
        }
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={sectionClasses}>
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
      <Navbar ref={navRef} />
      <div className={contentClasses}>{children}</div>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        style={{ position: "absolute", bottom: 0, left: 0, height: 1, width: "100%" }}
      />
    </section>
  );
};

export default HeroSection;
