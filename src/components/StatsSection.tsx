import React, { useEffect, useMemo, useRef, useState } from "react";

type Stat = {
  target: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { target: 60, suffix: "+", label: "Active Members" },
  { target: 15, suffix: "+", label: "Countries Represented" },
  { target: 20, suffix: "+", label: "Events Per Year" },
];

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [values, setValues] = useState<number[]>(() => stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const easeOutCubic = useMemo(
    () => (t: number) => 1 - Math.pow(1 - t, 3),
    [],
  );

  useEffect(() => {
    if (!hasAnimated) return;

    let frameId: number;
    const duration = 2000;
    const start = performance.now();

    const tick = () => {
      const now = performance.now();
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(progress);

      setValues(stats.map((stat) => Math.round(stat.target * eased)));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [hasAnimated, easeOutCubic]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        {stats.map((stat, index) => {
          const current = hasAnimated ? values[index] : 0;
          const display =
            hasAnimated && isCloseToTarget(current, stat.target)
              ? `${stat.target}${stat.suffix ?? ""}`
              : `${current}${stat.suffix ?? ""}`;

          return (
            <div className="stat-item" key={stat.label}>
              <div className="stat-number">{display}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const isCloseToTarget = (value: number, target: number) =>
  Math.abs(value - target) <= 1;

export default StatsSection;
