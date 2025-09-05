import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Resources() {
  return (
    <div>
      {/* Hero Section with Navigation */}
      <section className="hero-section faq-hero">
        {/* Navigation (inline, not using Navbar component) */}
        <Navbar />

        {/* Hero Content */}
        <div className="hero-content">
          <h2 className="hero-headline">Resources &amp; Support</h2>
        </div>
      </section>

      {/* Resources Content */}
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
              <a href="about.html" className="btn btn-learn-more">
                Learn More
              </a>
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
              <a href="about.html" className="btn btn-learn-more">
                Learn More
              </a>
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
              <a href="about.html" className="btn btn-learn-more">
                Learn More
              </a>
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
              <a href="about.html" className="btn btn-learn-more">
                Learn More
              </a>
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
              <a href="about.html" className="btn btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="city-scroll-container">
          <div className="city-scroll-border">
            <div className="city-scroll-content">
              <span>Lagos</span>
              <span>Nairobi</span>
              <span>Cairo</span>
              <span>Johannesburg</span>
              <span>Accra</span>
              <span>Addis Ababa</span>
              <span>Casablanca</span>
              <span>Dar es Salaam</span>
              <span>Kinshasa</span>
              <span>Algiers</span>
              <span>Lagos</span>
              <span>Nairobi</span>
              <span>Cairo</span>
              <span>Johannesburg</span>
              <span>Accra</span>
              <span>Addis Ababa</span>
              <span>Casablanca</span>
              <span>Dar es Salaam</span>
              <span>Kinshasa</span>
              <span>Algiers</span>
            </div>
          </div>
        </div>
        <div className="cta-content">
          <h2>Join Our Community</h2>
          <p>
            Just click below and connect with us to start your journey with MIT
            AGA.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              Get Involved
            </a>
            <a href="about.html" className="btn btn-learn-more">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Resources;
