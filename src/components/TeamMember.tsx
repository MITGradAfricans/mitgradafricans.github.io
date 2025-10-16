import React from "react";

export interface TeamMemberProps {
  name: string;
  role: string;
  dept: string;
  country: string;
  photo: string;
  email: string;
  linkedin: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  dept,
  country,
  photo,
  email,
  linkedin,
}) => (
  <div className="team-member">
    <div className="member-photo">
      <img src={photo} alt={name} />
    </div>
    <div className="member-info">
      <h3>{name}</h3>
      <p className="member-role">{role}</p>
      <p className="member-dept">{dept}</p>
      <p className="member-country">{country}</p>
      <div className="member-socials">
        <a href={`mailto:${email}`} className="social-icon" aria-label={`Email ${name}`}>
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href={linkedin}
          className="social-icon"
          target="_blank"
          rel="noreferrer"
          aria-label={`${name}'s LinkedIn`}
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
    <div className="member-quick-links">
      <a href={`mailto:${email}`} className="quick-link">
        <i className="fas fa-envelope"></i>
      </a>
      <a href={linkedin} className="quick-link">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </div>
);

export default TeamMember;
