import React, { useEffect, useState } from "react";
import TeamMember from "./TeamMember";
import { teamMembers } from "../constants/teamMembers";

const TeamMembers: React.FC = () => (
  <section id="team" className="content-section">
    <div className="breakdown-section-header">
      <h2 className="breakdown-section-title">Your Team</h2>
    </div>
    <div className="team-grid-container">
      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
