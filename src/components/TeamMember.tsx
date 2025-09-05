import React from "react";

export interface TeamMemberProps {
  name: string;
  role: string;
  dept: string;
  country: string;
  photo: string;
  email: string;
  linkedin: string;
  twitter?: string;
  instagram?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  dept,
  country,
  photo,
  email,
  linkedin,
  twitter,
  instagram,
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
        <a href={`mailto:${email}`} className="social-icon">
          <i className="fas fa-envelope"></i>
        </a>
        <a href={linkedin} className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        {twitter && (
          <a href={twitter} className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        )}
        {instagram && (
          <a href={instagram} className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        )}
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