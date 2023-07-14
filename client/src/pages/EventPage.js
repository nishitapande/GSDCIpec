import React from "react";
import EventsDetails from "../components/events/event-page-components/EventsDetails";
import PastEvents from "../components/events/event-page-components/PastEvents";

function EventPage() {
  return (
    <>
      <EventsDetails />
      <PastEvents />
    </>
  );
}

export default EventPage;
