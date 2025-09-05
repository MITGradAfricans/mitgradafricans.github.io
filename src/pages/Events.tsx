import Navbar from "../components/Navbar";

function Events() {
  return (
    <div>
      {/* Hero Section with Navigation */}
      <section className="hero-section faq-hero">
        {/* Navigation */}
        <Navbar />
        {/* Hero Content */}
        <div className="hero-content">
          <h2 className="hero-headline">Our Events</h2>
        </div>
      </section>

      {/* Events Content */}
      <section className="about-content">
        <div className="about-container">
          {/* Events Section */}
          <div className="about-section">
            <div className="text-block">
              <p>
                Join us for cultural celebrations, professional development
                workshops, and networking opportunities that bring our community
                together.
              </p>
            </div>

            {/* Upcoming Events Section */}
            <div className="upcoming-events-section">
              <h2 className="section-title">Upcoming Events</h2>
              <div className="upcoming-events-grid">
                {/* Event Card 1 */}
                <div className="event-card">
                  <div className="event-date">
                    <span className="event-day">15</span>
                    <span className="event-month">Jan</span>
                  </div>
                  <div className="event-details">
                    <h3
                      className="event-title"
                      style={{ color: "var(--aga-red)" }}
                    >
                      African Innovation Workshop
                    </h3>
                    <p className="event-partner">
                      Partner: MIT Innovation Initiative
                    </p>
                    <p className="event-description">
                      Join us for an interactive workshop exploring African
                      innovation ecosystems and opportunities for collaboration.
                    </p>
                    <div className="event-meta">
                      <span
                        className="event-time"
                        style={{ color: "var(--aga-green)" }}
                      >
                        <i
                          className="fas fa-clock"
                          style={{ color: "var(--aga-green)" }}
                        ></i>
                        2:00 PM - 4:00 PM
                      </span>
                      <span
                        className="event-venue"
                        style={{ color: "var(--aga-green)" }}
                      >
                        <i
                          className="fas fa-map-marker-alt"
                          style={{ color: "var(--aga-green)" }}
                        ></i>
                        Building 10, Room 105
                      </span>
                    </div>
                  </div>
                </div>

                {/* Event Card 2 */}
                <div className="event-card">
                  <div className="event-date">
                    <span className="event-day">18</span>
                    <span className="event-month">Jan</span>
                  </div>
                  <div className="event-details">
                    <h3
                      className="event-title"
                      style={{ color: "var(--aga-red)" }}
                    >
                      Networking Mixer
                    </h3>
                    <p className="event-partner">
                      Partner: MIT African Students Association
                    </p>
                    <p className="event-description">
                      Connect with fellow African students, alumni, and
                      professionals in a relaxed networking environment.
                    </p>
                    <div className="event-meta">
                      <span
                        className="event-time"
                        style={{ color: "var(--aga-green)" }}
                      >
                        <i
                          className="fas fa-clock"
                          style={{ color: "var(--aga-green)" }}
                        ></i>
                        6:00 PM - 8:00 PM
                      </span>
                      <span
                        className="event-venue"
                        style={{ color: "var(--aga-green)" }}
                      >
                        <i
                          className="fas fa-map-marker-alt"
                          style={{ color: "var(--aga-green)" }}
                        ></i>
                        Student Center, Room 407
                      </span>
                    </div>
                  </div>
                </div>

                {/* Event Card 3 */}
                <div className="event-card">
                  <div className="event-date">
                    <span className="event-day">22</span>
                    <span className="event-month">Jan</span>
                  </div>
                  <div className="event-details">
                    <h3
                      className="event-title"
                      style={{ color: "var(--aga-red)" }}
                    >
                      Career Development Seminar
                    </h3>
                    <p className="event-partner">
                      Partner: MIT Career Services
                    </p>
                    <p className="event-description">
                      Learn about career opportunities in Africa and strategies
                      for professional development in STEM fields.
                    </p>
                    <div className="event-meta">
                      <span
                        className="event-time"
                        style={{ color: "var(--aga-green)" }}
                      >
                        <i
                          className="fas fa-clock"
                          style={{ color: "var(--aga-green)" }}
                        ></i>
                        3:00 PM - 5:00 PM
                      </span>
                      <span
                        className="event-venue"
                        style={{ color: "var(--aga-green)" }}
                      >
                        <i
                          className="fas fa-map-marker-alt"
                          style={{ color: "var(--aga-green)" }}
                        ></i>
                        Building 3, Room 270
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Calendar Embed */}
            <div className="calendar-container">
              <div className="calendar-wrapper">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=c4982583a55c936d9870f95ef5ec78c96157d1b73b9941a4d652a3f9142b0301%40group.calendar.google.com&ctz=America%2FNew_York"
                  style={{ border: 0 }}
                  width="100%"
                  height="700"
                  frameBorder="0"
                  scrolling="no"
                  title="MIT AGA Events Calendar"
                ></iframe>
              </div>
            </div>

            {/* View Gallery Button */}
            <div className="gallery-button-container">
              <a href="#" className="btn btn-primary btn-gallery">
                View Our Gallery
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
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img
              src="./images/Asset 1.png"
              alt="MIT AGA Logo"
              className="footer-aga-logo"
            />
            <h3>MIT African Graduate Association</h3>
            <p>
              Where African scholarship meets innovation and global influence.
            </p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/mit-african-graduate-association/?viewAsMember=true">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <img
              src="./images/mit_logo_std_rgb_white.png"
              alt="MIT Logo"
              className="footer-mit-logo"
            />
            <h3>Massachusetts Institute of Technology</h3>
            <p>77 Massachusetts Avenue, Cambridge, MA, USA</p>
            <a href="#" className="footer-accessibility">
              Accessibility
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2025 MIT African Graduate Association. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Events;
