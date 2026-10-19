import React from "react";
import TeamMember from "./TeamMember";
import { pastTeamMembers, teamMembers } from "../constants/teamMembers";

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

      {pastTeamMembers.length > 0 && (
        <div className="past-team">
          <h3 className="past-team-title">Past Exec Members</h3>
          <div className="team-grid team-grid--past">
            {pastTeamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      )}
    </div>
  </section>
);

export default TeamMembers;
