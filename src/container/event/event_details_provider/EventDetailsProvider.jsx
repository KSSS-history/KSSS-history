import { useParams } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../../../utiles/contexts/DataProvider";
import EventNavBar from "../event_navbar/EventNavBar";
import EventDetails from "../event_details/EventDetails";

const EventDetailsProvider = () => {
  const { id } = useParams();
  const { getEventById, loading, error } = useContext(EventContext);
  const event = getEventById(id);

  if (loading) return <div>Loading Details...</div>;
  if (error)
    return <div>Error accured in Event Details Provider: {error.message}</div>;
  if (!event) return <div>The Event not found.</div>;

  return (
    <>
      <EventNavBar event={event} />
      <EventDetails event={event} />
    </>
  );
};

export default EventDetailsProvider;
