import { createContext, useEffect, useState } from "react";
import useContentful from "../datalayer/useContentful";

//Create the context for the context object
export const EventContext = createContext();

const DataProvider = ({ children }) => {
  const { getData } = useContentful();
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Get current year as the start point for the sorting logic
  const currentYear = new Date().getFullYear();

  //- - - - - - - - - - - - - - - - - - - - - - - - - -
  //Fetch events only once when the context is mounted
  //- - - - - - - - - - - - - - - - - - - - - - - - - -
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const allEvents = await getData();
        setEvents(allEvents);

        //Filter for current year as default on the first
        const currentYearEvents = allEvents.filter(
          (event) => Number(event.fullYear) === currentYear
        );
        setFilteredEvents(currentYearEvents);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  //- - - - - - - - - - - - - - - - - - - - - - - - - -
  //Filter events by decade
  //- - - - - - - - - - - - - - - - - - - - - - - - - -
  const filterByDecade = (decade) => {
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

  //- - - - - - - - - - - - - - - - - - - - - - - - - -
  //Get event by ID
  //- - - - - - - - - - - - - - - - - - - - - - - - - -
  const getEventById = (id) => {
    return events.find((event) => event.id === id);
  };

  return (
    <EventContext.Provider
      value={{
        events,
        filteredEvents,
        loading,
        error,
        filterByDecade,
        getEventById,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default DataProvider;
