import React, { useMemo } from "react";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TeamMembers from "../components/TeamMembers";
import heroImage from "../assets/images/hero-dome.webp";
import aboutCommunityImage from "../assets/images/about-community.jpg";
import pillarAimImage from "../assets/images/pillar-aim.jpeg";
import pillarActImage from "../assets/images/pillar-act.jpeg";
import pillarAfricaImage from "../assets/images/pillar-africa.jpeg";

function About() {
  const pillars = useMemo(
    () => [
      {
        title: "Aim",
        copy: `represents the shared ambition, identity, and potential of African scholars. It is rooted in the belief that building community begins with recognizing who we are and why we are here. Through this pillar, AGA inspires purpose and belonging, fostering an environment where African students can connect with one another, celebrate their heritage, and feel empowered to lead with vision.`,
        image: pillarAimImage,
        alt: "AIM - Cultivating Purposeful Vision",
        reverse: false,
        accent: "aga-red",
      },
      {
        title: "Act",
        copy: `embodies the momentum of translating purpose into progress. It champions leadership, innovation, and excellence by equipping African scholars with the tools to turn ideas into action. This pillar drives forward academic achievement, professional development, and tangible contributions to research, entrepreneurship, and global problem-solving.`,
        image: pillarActImage,
        alt: "ACT - Driving Academic and Professional Impact",
        reverse: true,
        accent: "aga-yellow",
      },
      {
        title: "Africa",
        copy: `anchors AGA's work in the broader context of the continent's growth and potential. It symbolizes partnership, development, and global relevance—connecting the brilliance of MIT's African students with initiatives that matter at home. This pillar is a commitment to working with and for Africa, creating pathways for collaboration, innovation, and sustained impact.`,
        image: pillarAfricaImage,
        alt: "AFRICA - Connecting to the Continent",
        reverse: false,
        accent: "aga-green",
      },
    ],
    [],
  );

  return (
    <div>
      {/* Hero Section with Navigation */}
      <HeroSection
        backgroundImage={heroImage}
        backgroundAlt="Massachusetts Institute of Technology Great Dome"
        sectionClassName="about-hero"
      >
        <h2 className="hero-headline">About Us</h2>
      </HeroSection>

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
                  src={aboutCommunityImage}
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

            <div className="about-pillars-intro">
              <p>
                The MIT African Graduate Association (AGA) is committed to
                advancing the United Nations Sustainable Development Goals (SDGs)
                through our three core pillars. By fostering African scholarship,
                driving innovation, and connecting talent to the continent, we
                align with SDGs such as quality education, decent work, reduced
                inequalities, and global partnerships.
              </p>
            </div>

            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`breakdown-item${pillar.reverse ? " reverse" : ""}`}
              >
                <div className="breakdown-image">
                  <img src={pillar.image} alt={pillar.alt} />
                </div>
                <div className="breakdown-content">
                  <h3 className={`breakdown-title breakdown-title-${pillar.accent}`}>
                    {pillar.title}
                  </h3>
                  <p className="breakdown-text">{pillar.copy}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Our Team Section */}
          <div className="about-section">
            <div className="breakdown-section-header">
              <h2 className="breakdown-section-title">Our Team</h2>
            </div>
            <TeamMembers />
          </div>
        </div>
      </section>
      <CtaSection />
      <Footer />
    </div>
  );
}

export default About;
