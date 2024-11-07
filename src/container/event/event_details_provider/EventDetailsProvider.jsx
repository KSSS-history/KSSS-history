import { useState, useEffect } from "react";
import useContentful from "../../../helpers/useContentful";
import EventDetails from "../event_details/EventDetails";

const EventDetailsProvider = () => {
  const [events, setEvents] = useState([]);

  //get events from function getData
  const { getData } = useContentful();

  useEffect(() => {
    getData()
      .then((response) => {
        console.log("Data retrived:", response);
        setEvents(response);
      })
      .catch((error) => confsole.error("Error retrievering data", error));
  }, []);

  return (
    <div>
      {events.map((event, id) => (
        <EventDetails key={id} event={event} />
      ))}
    </div>
  );
};

export default EventDetailsProvider;
