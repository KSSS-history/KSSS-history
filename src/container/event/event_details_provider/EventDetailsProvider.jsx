// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import useContenful from "../../../helpers/useContentful";
// import EventDetails from "../event_details/EventDetails";
// import EventNavBar from "../event_navbar/EventNavBar";
// import React from "react";

// const EventDetailsProvider = () => {
//   const { id } = useParams();
//   const { getData } = useContenful();
//   const [event, setEvent] = useState();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getEventDetais = async () => {
//       try {
//         const events = await getData(); // Fetch all events
//         const selectedEvent = events.find((event) => event.id === id);
//         setEvent(selectedEvent);
//       } catch (error) {
//         console.error("Error get the event details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getEventDetais();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!event) {
//     return <div>The Event not found</div>;
//   }

//   return (
//     <>
//       <EventNavBar event={event} />
//       <EventDetails event={event} />
//     </>
//   );
// };

// export default EventDetailsProvider;

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../../../helpers/contexts/DataProvider";
import EventNavBar from "../event_navbar/EventNavBar";
import EventDetails from "../event_details/EventDetails";

const EventDetailsProvider = () => {
  const { id } = useParams();
  const { getEventById, loading, error } = useContext(EventContext);
  const event = getEventById(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error accured: {error.message}</div>;
  if (!event) return <div>The Event not found.</div>;

  return (
    <>
      <EventNavBar event={event} />
      <EventDetails event={event} />
    </>
  );
};

export default EventDetailsProvider;
