//

import { useContext } from "react";
import { EventContext } from "../../../utiles/contexts/DataProvider";
import EventCard from "../event_card/EventCard";

const EventsProvider = () => {
  const { filteredEvents, loading, error } = useContext(EventContext);
  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error accured in Data Provider: {error.message}</div>;

  //This is the optional UI
  let message = `Found ${filteredEvents.length} events`;
  switch (filteredEvents.length) {
    case 0:
      message = "No event found";
      break;
    case 1:
      message = "Found 1 event";
      break;
    default:
      break;
  }
  return (
    <>
      <div>{message} </div>
      <article>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </article>
    </>
  );
};

export default EventsProvider;
