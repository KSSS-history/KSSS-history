import { useEffect, useState } from "react";
import useContentful from "../../../helpers/useContentful";
import EventCard from "../event_card/EventCard";
import DecadeNavigation from "../decade_navigation/DecadeNavigation";

const EventsProvider = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedDecade, setSelectedDecade] = useState("");

  //get events from function getData
  const { getData } = useContentful();

  useEffect(() => {
    getData()
      .then((response) => {
        setEvents(response);
      })
      .catch((error) => confsole.error("Error retrievering data", error));
  }, []);

  //filtering events by decade:
  const currentYear = new Date().getFullYear();
  const filterEvents = (events, decade) => {
    if (decade === "now") {
      setFilteredEvents(
        events.filter(
          (event) => event.fullYear >= 2021 && event.fullYear <= currentYear
        )
      );
    } else {
      const startYear = parseInt(decade, 10);
      const endYear = startYear - 9;
      setFilteredEvents(
        events.filter(
          (event) => event.fullYear >= endYear && event.fullYear <= startYear
        )
      );
    }
  };

  //function for choosing decade
  const handleDecadeSelection = (decade) => {
    setSelectedDecade(decade);
    filterEvents(events, decade);
  };

  return (
    <section>
      <DecadeNavigation onSelectDecade={handleDecadeSelection} />
      <article>
        {filteredEvents.map((event, id) => (
          <EventCard key={id} event={event} />
        ))}
      </article>
    </section>
  );
};

export default EventsProvider;
