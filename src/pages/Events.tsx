import React from "react";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/images/hero-dome.webp";
import EventCard, { UpcomingEvent } from "../components/EventCard";

const upcomingEvents: UpcomingEvent[] = [
  {
    day: "15",
    month: "Jan",
    title: "African Innovation Workshop",
    partner: "Partner: MIT Innovation Initiative",
    description:
      "Join us for an interactive workshop exploring African innovation ecosystems and opportunities for collaboration.",
    time: "2:00 PM - 4:00 PM",
    venue: "Building 10, Room 105",
  },
  {
    day: "18",
    month: "Jan",
    title: "Networking Mixer",
    partner: "Partner: MIT African Students Association",
    description:
      "Connect with fellow African students, alumni, and professionals in a relaxed networking environment.",
    time: "6:00 PM - 8:00 PM",
    venue: "Student Center, Room 407",
  },
  {
    day: "22",
    month: "Jan",
    title: "Career Development Seminar",
    partner: "Partner: MIT Career Services",
    description:
      "Learn about career opportunities in Africa and strategies for professional development in STEM fields.",
    time: "3:00 PM - 5:00 PM",
    venue: "Building 3, Room 270",
  },
];

function Events() {
  return (
    <div>
      <HeroSection
        backgroundImage={heroImage}
        backgroundAlt="Massachusetts Institute of Technology Great Dome"
        sectionClassName="faq-hero"
      >
        <h2 className="hero-headline">Our Events</h2>
      </HeroSection>

      <section className="about-content">
        <div className="about-container">
          <div className="about-section">
            <div className="text-block">
              <p>
                Join us for cultural celebrations, professional development
                workshops, and networking opportunities that bring our community
                together.
              </p>
            </div>

            <div className="upcoming-events-section">
              <h2 className="section-title">Upcoming Events</h2>
              <div className="upcoming-events-grid">
                {upcomingEvents.map((event) => (
                  <EventCard
                    key={`${event.month}-${event.day}-${event.title}`}
                    event={event}
                  />
                ))}
              </div>
            </div>

            <div className="calendar-container">
              <div className="calendar-wrapper">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=c4982583a55c936d9870f95ef5ec78c96157d1b73b9941a4d652a3f9142b0301%40group.calendar.google.com&ctz=America%2FNew_York"
                  style={{ border: 0 }}
                  width="100%"
                  height="700"
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
      <CtaSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Events;
