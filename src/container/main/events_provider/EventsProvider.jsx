import { useEffect, useState } from "react";
import useContentful from "../../../helpers/useContentful";
import EventCard from "../event_card/EventCard";

const EventsProvider = () => {
  const [events, setEvents] = useState([]);

  //get events from function getData
  const { getData } = useContentful();

  useEffect(() => {
    getData()
      .then((response) => {
        setEvents(response);
      })
      .catch((error) => confsole.error("Error retrievering data", error));
  }, []);

  return (
    <div>
      {events.map((event, id) => (
        <EventCard key={id} event={event} />
      ))}
    </div>
  );
};

export default EventsProvider;
