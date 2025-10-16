import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/images/hero-dome.webp";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <div>
      <HeroSection
        backgroundImage={heroImage}
        backgroundAlt="Massachusetts Institute of Technology Great Dome"
        sectionClassName="faq-hero"
      >
        <h2 className="hero-headline">Resources &amp; Support</h2>
      </HeroSection>

      <section className="about-content">
        <div className="about-container">
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Academic Resources</h3>
              <p>
                Access study materials, research papers, and academic support
                resources tailored for African graduate students.
              </p>
              <Link to="/about" className="btn btn-learn-more">
                Learn More
              </Link>
            </div>
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Career Development</h3>
              <p>
                Explore career opportunities, networking events, and
                professional development resources for African professionals.
              </p>
              <Link to="/about" className="btn btn-learn-more">
                Learn More
              </Link>
            </div>
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community Support</h3>
              <p>
                Connect with fellow African students, alumni, and community
                members for mentorship and support.
              </p>
              <Link to="/about" className="btn btn-learn-more">
                Learn More
              </Link>
            </div>
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-globe-africa"></i>
              </div>
              <h3>African Initiatives</h3>
              <p>
                Discover opportunities to contribute to African development
                projects and initiatives.
              </p>
              <Link to="/about" className="btn btn-learn-more">
                Learn More
              </Link>
            </div>
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3>Events &amp; Activities</h3>
              <p>
                Stay updated on upcoming events, workshops, and cultural
                activities organized by AGA.
              </p>
              <Link to="/events" className="btn btn-learn-more">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />

      <Footer />
    </div>
  );
}

export default Resources;
