//

import { useContext } from "react";
import { EventContext } from "../../../helpers/contexts/DataProvider";
import EventCard from "../event_card/EventCard";
import DecadeNavigation from "../decade_navigation/DecadeNavigation";

const EventsProvider = () => {
  const { filteredEvents, filterByDecade, loading, error } =
    useContext(EventContext);
  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error accured: {error.message}</div>;

  //function to handle decade selection for onClick
  const handleDecadeSelection = (decade) => {
    filterByDecade(decade);
  };

  return (
    <section>
      <DecadeNavigation onSelectDecade={handleDecadeSelection} />
      <article>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </article>
    </section>
  );
};

export default EventsProvider;
