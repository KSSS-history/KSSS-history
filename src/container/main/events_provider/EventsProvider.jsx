import { useEffect, useState } from "react";
import useContentful from "../../../helpers/useContentful";
import EventCard from "../event_card/EventCard";
import DecadeNavigation from "../decade_navigation/DecadeNavigation";

const EventsProvider = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedDecade, setSelectedDecade] = useState("nu");

  //get events from function getData
  const { getData } = useContentful();

  //get current year as the start point for the yers filtering
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    getData()
      .then((response) => {
        setEvents(response);

        //filtering events appearance by default -> current year events
        const filtered = response.filter(
          (event) => event.fullYear >= currentYear && event.fullYear
        );
        setFilteredEvents(filtered);
      })
      .catch((error) => confsole.error("Error retrievering data", error));
  }, []);

  //filtering events by decade:
  const filterEvents = (events, decade) => {
    if (decade === "nu") {
      setFilteredEvents(
        events.filter(
          (event) =>
            event.fullYear >= currentYear && event.fullYear <= currentYear
        )
      );
    } else {
      const startYear = parseInt(decade);
      const endYear = startYear + 9;
      setFilteredEvents(
        events.filter(
          (event) => event.fullYear >= startYear && event.fullYear <= endYear
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
