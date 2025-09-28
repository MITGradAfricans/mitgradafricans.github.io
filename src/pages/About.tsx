import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

function About() {
  return (
    <div>
      {/* Hero Section with Navigation */}
      <section className="hero-section faq-hero">
        {/* Navigation */}
        <Navbar />
        {/* Hero Content */}
        <div className="hero-content">
          <h2 className="hero-headline">About Us</h2>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-container">
          {/* Mission Section */}
          <div className="about-section">
            <div className="section-content">
              <div className="text-block">
                <p>
                  The MIT African Graduate Association (AGA) fosters a strong,
                  supportive community for African graduate scholars, enriching
                  them academically, professionally, and culturally. AGA
                  amplifies African voices and contributions, connecting
                  interdisciplinary African research talents with innovative
                  initiatives to drive developmental and social change across
                  the continent.
                </p>
                <p>
                  We are a vibrant community dedicated to supporting African
                  graduate students at the Massachusetts Institute of
                  Technology. We foster academic excellence, professional
                  growth, and cultural exchange while building lasting
                  connections within the MIT community and beyond.
                </p>
              </div>
              <div className="image-block">
                <img
                  src="./public/images/about-image.jpg"
                  alt="MIT AGA Community"
                  className="section-image"
                />
              </div>
            </div>
          </div>

          {/* Our Pillars Section */}
          <div className="about-section">
            <div className="breakdown-section-header">
              <h2 className="breakdown-section-title">Our Pillars</h2>
            </div>

            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 2rem",
                marginBottom: "4rem",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: 1.7,
                  color: "var(--dark-gray)",
                  textAlign: "center",
                }}
              >
                The MIT African Graduate Association (AGA) is committed to
                advancing the United Nations Sustainable Development Goals
                (SDGs) through our three core pillars. By fostering African
                scholarship, driving innovation, and connecting talent to the
                continent, we align with multiple SDGs including quality
                education (SDG 4), decent work and economic growth (SDG 8),
                reduced inequalities (SDG 10), and partnerships for the goals
                (SDG 17). Our pillars—Aim, Act, and Africa—represent our
                strategic approach to creating lasting impact that benefits both
                our community and the broader African continent.
              </p>
            </div>

            {/* AIM Pillar */}
            <div className="breakdown-item">
              <div className="breakdown-image">
                <img
                  src="./public/images/aim-pillar.jpg"
                  alt="AIM - Cultivating Purposeful Vision"
                />
              </div>
              <div className="breakdown-content">
                <h3 className="breakdown-title">Aim</h3>
                <p className="breakdown-text">
                  represents the shared ambition, identity, and potential of
                  African scholars. It is rooted in the belief that building
                  community begins with recognizing who we are and why we are
                  here. Through this pillar, AGA inspires purpose and belonging,
                  fostering an environment where African students can connect
                  with one another, celebrate their heritage, and feel empowered
                  to lead with vision.
                </p>
              </div>
            </div>

            {/* ACT Pillar */}
            <div className="breakdown-item reverse">
              <div className="breakdown-image">
                <img
                  src="./public/images/act-pillar.jpg"
                  alt="ACT - Driving Academic and Professional Impact"
                />
              </div>
              <div className="breakdown-content">
                <h3 className="breakdown-title">Act</h3>
                <p className="breakdown-text">
                  embodies the momentum of translating purpose into progress. It
                  champions leadership, innovation, and excellence by equipping
                  African scholars with the tools to turn ideas into action.
                  This pillar drives forward academic achievement, professional
                  development, and tangible contributions to research,
                  entrepreneurship, and global problem-solving.
                </p>
              </div>
            </div>

            {/* AFRICA Pillar */}
            <div className="breakdown-item">
              <div className="breakdown-image">
                <img
                  src="./public/images/africa-pillar.jpg"
                  alt="AFRICA - Connecting to the Continent"
                />
              </div>
              <div className="breakdown-content">
                <h3 className="breakdown-title">Africa</h3>
                <p className="breakdown-text">
                  anchors AGA's work in the broader context of the continent's
                  growth and potential. It symbolizes partnership, development,
                  and global relevance—connecting the brilliance of MIT's
                  African students with initiatives that matter at home. This
                  pillar is a commitment to working with and for Africa,
                  creating pathways for collaboration, innovation, and sustained
                  impact.
                </p>
              </div>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="about-section">
            <div className="breakdown-section-header">
              <h2 className="breakdown-section-title">Our Team</h2>
            </div>
            <div className="team-grid-container">
              <div className="team-grid">
                <div className="team-member">
                  <div className="member-photo">
                    <img src="./public/images/team/placeholder.jpg" alt="Abimbola" />
                  </div>
                  <div className="member-info">
                    <h3>Abimbola</h3>
                    <p className="member-role">Co-President</p>
                    <p className="member-dept">Mechanical Engineering</p>
                    <p className="member-country">🇳🇬 Nigeria</p>
                    <div className="member-socials">
                      <a href="mailto:abimbola@mit.edu" className="social-icon">
                        <i className="fas fa-envelope"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/mit-african-graduate-association/?viewAsMember=true"
                        className="social-icon"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-quick-links">
                    <a href="mailto:abimbola@mit.edu" className="quick-link">
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/mit-african-graduate-association/?viewAsMember=true"
                      className="quick-link"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="team-member">
                  <div className="member-photo">
                    <img src="./public/images/AdobeStock_218066202.jpeg" alt="Jonas" />
                  </div>
                  <div className="member-info">
                    <h3>Jonas</h3>
                    <p className="member-role">Co-President</p>
                    <p className="member-dept">Mechanical Engineering</p>
                    <p className="member-country">🇹🇬 Togo</p>
                    <div className="member-socials">
                      <a href="mailto:jonas@mit.edu" className="social-icon">
                        <i className="fas fa-envelope"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/mit-african-graduate-association/?viewAsMember=true"
                        className="social-icon"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-quick-links">
                    <a href="mailto:jonas@mit.edu" className="quick-link">
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/mit-african-graduate-association/?viewAsMember=true"
                      className="quick-link"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="team-member">
                  <div className="member-photo">
                    <img src="./public/images/team/placeholder.jpg" alt="Naomi" />
                  </div>
                  <div className="member-info">
                    <h3>Naomi</h3>
                    <p className="member-role">Treasurer</p>
                    <p className="member-dept">
                      Electrical Engineering & Computer Science
                    </p>
                    <p className="member-country">🇰🇪 Kenya</p>
                    <div className="member-socials">
                      <a href="mailto:naomi@mit.edu" className="social-icon">
                        <i className="fas fa-envelope"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/mit-african-graduate-association/?viewAsMember=true"
                        className="social-icon"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-quick-links">
                    <a href="mailto:naomi@mit.edu" className="quick-link">
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/mit-african-graduate-association/?viewAsMember=true"
                      className="quick-link"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-grid-single">
                <div className="team-member">
                  <div className="member-photo">
                    <img src="./public/images/team/placeholder.jpg" alt="Aka" />
                  </div>
                  <div className="member-info">
                    <h3>Aka</h3>
                    <p className="member-role">Secretary</p>
                    <p className="member-dept">
                      History, Anthropology, Science, Technology & Society
                    </p>
                    <p className="member-country">🇳🇬 Nigeria</p>
                    <div className="member-socials">
                      <a href="mailto:aka@mit.edu" className="social-icon">
                        <i className="fas fa-envelope"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/mit-african-graduate-association/?viewAsMember=true"
                        className="social-icon"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-quick-links">
                    <a href="mailto:aka@mit.edu" className="quick-link">
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/mit-african-graduate-association/?viewAsMember=true"
                      className="quick-link"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="team-member">
                  <div className="member-photo">
                    <img src="./public/images/team/placeholder.jpg" alt="Gianna" />
                  </div>
                  <div className="member-info">
                    <h3>Gianna</h3>
                    <p className="member-role">Webmaster</p>
                    <p className="member-dept">
                      Electrical Engineering & Computer Science
                    </p>
                    <p className="member-country">🇬🇭 Ghana</p>
                    <div className="member-socials">
                      <a href="mailto:gianna@mit.edu" className="social-icon">
                        <i className="fas fa-envelope"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/mit-african-graduate-association/?viewAsMember=true"
                        className="social-icon"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-quick-links">
                    <a href="mailto:gianna@mit.edu" className="quick-link">
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/mit-african-graduate-association/?viewAsMember=true"
                      className="quick-link"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
