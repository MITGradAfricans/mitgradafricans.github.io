import { UpcomingEvent } from "../components/EventCard";

const CALENDAR_ID =
  "c4982583a55c936d9870f95ef5ec78c96157d1b73b9941a4d652a3f9142b0301@group.calendar.google.com";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY as string | undefined;

type GoogleCalendarEvent = {
  id?: string;
  summary?: string;
  description?: string;
  location?: string;
  organizer?: { displayName?: string };
  start?: { date?: string; dateTime?: string };
};

type GoogleCalendarResponse = {
  items?: GoogleCalendarEvent[];
};

const formatDateParts = (isoDate?: string) => {
  if (!isoDate) {
    return { day: "--", month: "" };
  }

  const parsedDate = new Date(isoDate);

  if (Number.isNaN(parsedDate.getTime())) {
    return { day: "--", month: "" };
  }

  return {
    day: String(parsedDate.getDate()).padStart(2, "0"),
    month: parsedDate.toLocaleString("en-US", { month: "short" }),
  };
};

const formatTime = (isoDate?: string) => {
  if (!isoDate) {
    return "";
  }

  const parsedDate = new Date(isoDate);

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return parsedDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
};

export async function fetchUpcomingEvents(): Promise<UpcomingEvent[]> {
  if (!API_KEY) {
    const error = new Error("Google Calendar API key is not configured.");
    error.name = "MissingGoogleApiKeyError";
    throw error;
  }

  const url = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
      CALENDAR_ID
    )}/events`
  );

  url.searchParams.set("key", API_KEY);
  url.searchParams.set("singleEvents", "true");
  url.searchParams.set("orderBy", "startTime");
  url.searchParams.set("timeMin", new Date().toISOString());
  url.searchParams.set("maxResults", "6");

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Google Calendar API error: ${response.status}`);
  }

  const data: GoogleCalendarResponse = await response.json();

  return (data.items ?? []).map((event) => {
    const startDate =
      event.start?.dateTime ?? event.start?.date ?? undefined;
    const { day, month } = formatDateParts(startDate);

    return {
      day,
      month,
      title: event.summary ?? "Untitled event",
      description: event.description ?? "Details coming soon.",
      time: formatTime(startDate),
      venue: event.location ?? "",
    };
  });
}
