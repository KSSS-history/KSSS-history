//

import { useContext } from "react";
import { EventContext } from "../../../utiles/contexts/DataProvider";
import EventCard from "../event_card/EventCard";

const EventsProvider = () => {
  const { filteredEvents, loading, error } = useContext(EventContext);
  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error accured: {error.message}</div>;

  return (
    <>
      <article>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </article>
    </>
  );
};

export default EventsProvider;
