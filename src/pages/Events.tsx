import React, { useEffect, useState } from "react";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import heroImage from "../assets/images/hero-dome.webp";
import EventCard, { UpcomingEvent } from "../components/EventCard";
import { fetchUpcomingEvents } from "../services/googleCalendar";

function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchUpcomingEvents()
      .then((events) => {
        setUpcomingEvents(events);
      })
      .catch((error) => {
        let message = "We couldn't load events right now. Please try again later.";
        if (error instanceof Error && error.name === "MissingGoogleApiKeyError") {
          console.warn(error.message);
          message =
            "Our events calendar is being configured. Please check back soon.";
        } else {
          console.error("Failed to load Google Calendar events", error);
        }
        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
              {loading && (
                <p className="event-status-message">Loading events...</p>
              )}
              {!loading && error && (
                <p className="event-status-message">{error}</p>
              )}
              {!loading && !error && upcomingEvents.length === 0 && (
                <p className="event-status-message">
                  No upcoming events are scheduled yet. Please check back soon.
                </p>
              )}
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

            <div className="gallery-button-container">
              <a
                href="https://www.instagram.com/mitaga"
                className="btn btn-primary btn-gallery"
                target="_blank"
                rel="noreferrer"
              >
                View Our Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />

      <Footer />
    </div>
  );
}

export default Events;
