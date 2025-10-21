import React, { useEffect, useState } from "react";
import TeamMember from "./TeamMember";
import { teamMembers } from "../constants/teamMembers";

const MOBILE_BREAKPOINT = 480;

const TeamMembers: React.FC = () => {
  const [showSocials, setShowSocials] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      setShowSocials(window.innerWidth < MOBILE_BREAKPOINT);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="team" className="content-section">
      <div className="breakdown-section-header">
        <h2 className="breakdown-section-title">Our Team</h2>
      </div>
      <div className="team-grid-container">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} showSocials={showSocials} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
