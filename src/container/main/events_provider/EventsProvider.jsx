//

import { useContext } from "react";
import { EventContext } from "../../../utiles/contexts/DataProvider";

import FilteredEventsMessage from "../../../components/messages/FilteredEventsMessage";
import FallbackProvider from "../../../components/messages/fallback_provider/FallbackProvider";
import EventCard from "../event_card/EventCard";

// import FallbackProvider from "../../../components/messages/FallbackProvider";

const EventsProvider = () => {
  const { filteredEvents, loading, error } = useContext(EventContext);
  if (loading) return <div>Loading Hero....</div>;
  if (error) return <div>Error accured in Data Provider: {error.message}</div>;

  return (
    <>
      <FilteredEventsMessage />
      {filteredEvents.length === 0 ? (
        <FallbackProvider />
      ) : (
        <article>
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </article>
      )}
    </>
  );
};

export default EventsProvider;
