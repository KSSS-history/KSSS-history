import { useEffect, useState } from "react";
import useContentful from "../../../helpers/useContentful";
import EventCard from "../event_card/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);

  //get events from function getData
  const { getData } = useContentful();

  useEffect(() => {
    getData().then((response) => setEvents(response));
  }, []);

  return (
    <div>
      {events.map((event, id) => (
        <EventCard key={id} event={event} />
      ))}
    </div>

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //       or do this instead send data as props to EventCard.jsx
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // <section className={styles.section}>
    //   {events.map((event, id) => (
    //     <div key={id} className={styles.section_content}>
    //       <div>{event.fullYear}</div>
    //       <h2>{event.headingSv}</h2>

    //       <h3>{event.introTextSv}</h3>
    //       <button>read more</button>
    //       {event.eventImage?.file?.url && (
    //         <img
    //           className={styles.section_image}
    //           src={event.eventImage.file.url}
    //           alt={event.eventImage.title || "The Event image"}
    //         />
    //       )}
    //     </div>
    //   ))}
    // </section>
  );
};

export default Events;
