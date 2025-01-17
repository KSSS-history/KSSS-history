import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useContentful from "../datalayer/useContentful";

//Create the context for the context object
export const EventContext = createContext();

const DataProvider = ({ children }) => {
  const { getData } = useContentful();
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

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

        //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // useLocation hook -> to keep the decade and it events & the path on the reloading
        // //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        const decade = location.pathname.includes("decade")
          ? location.pathname.split("/").pop()
          : null;

        if (decade && !isNaN(parseInt(decade))) {
          const startYear = parseInt(decade);
          const endYear = startYear + 9;
          setFilteredEvents(
            allEvents.filter(
              (event) =>
                event.fullYear >= startYear && event.fullYear <= endYear
            )
          );
        } else {
          //- - - - - - - - - - - - - - - - - - - - - - - - - - - - -

          //- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          //Filter for current year as default on the firs loading
          //- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          const currentYearEvents = allEvents.filter(
            (event) => Number(event.fullYear) === currentYear
          );
          setFilteredEvents(currentYearEvents);
        }
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
  function filterByDecade(decade) {
    if (decade === "now" || decade === "nu") {
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
  }

  //- - - - - - - - - - - - - - - - - - - - - - - - - -
  //Get event by ID
  //- - - - - - - - - - - - - - - - - - - - - - - - - -
  function getEventById(id) {
    return events.find((event) => event.id === id);
  }

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
