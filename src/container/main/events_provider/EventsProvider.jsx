//

import { useContext } from "react";
import { EventContext } from "../../../utiles/contexts/DataProvider";

import FilteredEventsMessage from "../../../components/messages/FilteredEventsMessage";
import DefaultEventMessage from "../../../components/messages/DefaultEventMessage";
import EventCard from "../event_card/EventCard";

const EventsProvider = () => {
  const { filteredEvents, loading, error } = useContext(EventContext);
  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error accured in Data Provider: {error.message}</div>;

  return (
    <>
      <FilteredEventsMessage />
      {filteredEvents.length === 0 ? (
        <DefaultEventMessage />
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
