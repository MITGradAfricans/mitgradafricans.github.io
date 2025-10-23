import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import PillarSection from "../components/PillarSection";
import StatsSection from "../components/StatsSection";
import TeamMembers from "../components/TeamMembers";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-dome.webp";
import aboutCommunityImage from "../assets/images/about-community.jpg";

function Home() {
  return (
    <div>
      <HeroSection
        backgroundImage={heroImage}
        backgroundAlt="Massachusetts Institute of Technology Great Dome"
      >
        <h2 className="hero-headline">
          Where <span className="highlight">African scholarship</span>,{" "}
          <span className="highlight-yellow">innovation </span>
          <br />
          and <span className="highlight-green">global influence</span>{" "}
          converge.
        </h2>
      </HeroSection>

      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-left">
            <h2 className="mission-title">
              Building African Excellence.
              <br />
              Creating lasting impact.
            </h2>
            <div style={{ marginTop: "2rem" }}>
              <Link to="/about" className="btn btn-learn-more">
                Learn More
              </Link>
            </div>
          </div>
          <div className="mission-right">
            <p className="mission-description">
              The MIT African Graduate Association (AGA) fosters a strong,
              supportive community for African graduate scholars, enriching them
              academically, professionally, and culturally. AGA amplifies
              African voices and contributions, connecting interdisciplinary
              African research talents with innovative initiatives to drive
              developmental and social change across the continent.
            </p>
          </div>
        </div>
      </section>
      <PillarSection />

      <main className="main-content">
        <section id="about" className="content-section">
          <div className="section-content">
            <div className="text-block">
              <h2>About Us</h2>
              <p>
                We are a vibrant community dedicated to supporting African
                graduate students at the Massachusetts Institute of Technology.
                We foster academic excellence, professional growth, and cultural
                exchange while building lasting connections within the MIT
                community and beyond.
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
        </section>

        <StatsSection />

        <TeamMembers />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
