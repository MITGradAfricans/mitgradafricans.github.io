import React from "react";
import TeamMember from "./TeamMember";
import { teamMembers } from "../constants/teamMembers";

const TeamMembers: React.FC = () => (
  <section id="team" className="content-section">
    <div className="breakdown-section-header">
      <h2 className="breakdown-section-title">Our Team</h2>
    </div>
    <div className="team-grid-container">
      {/* Team grid: first row */}
      <div className="team-grid">
        {teamMembers.slice(0, 3).map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
      {/* Team grid: second row (single/double) */}
      <div className="team-grid-single">
        {teamMembers.slice(3).map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamMembers;
