import React from "react";

export type UpcomingEvent = {
  day: string;
  month: string;
  title: string;
  description: string;
  time: string;
  venue: string;
};

interface EventCardProps {
  event: UpcomingEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <div className="event-card">
    <div className="event-date">
      <span className="event-day">{event.day}</span>
      <span className="event-month">{event.month}</span>
    </div>
    <div className="event-details">
      <h3 className="event-title" style={{ color: "var(--aga-red)" }}>
        {event.title}
      </h3>
      <p className="event-description">{event.description}</p>
      <div className="event-meta">
        <span className="event-time" style={{ color: "var(--aga-green)" }}>
          <i
            className="fas fa-clock"
            style={{ color: "var(--aga-green)" }}
          ></i>
          {event.time}
        </span>
        <span className="event-venue" style={{ color: "var(--aga-green)" }}>
          <i
            className="fas fa-map-marker-alt"
            style={{ color: "var(--aga-green)" }}
          ></i>
          {event.venue}
        </span>
      </div>
    </div>
  </div>
);

export default EventCard;
