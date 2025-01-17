//

import { useContext } from "react";
import { EventContext } from "../../../utiles/contexts/DataProvider";
import EventCard from "../event_card/EventCard";
import FilteredEventsMessage from "../../../components/messages/FilteredEventsMessage";

const EventsProvider = () => {
  const { filteredEvents, loading, error } = useContext(EventContext);
  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error accured in Data Provider: {error.message}</div>;

  return (
    <>
      <FilteredEventsMessage />

      <article>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </article>
    </>
  );
};

export default EventsProvider;
