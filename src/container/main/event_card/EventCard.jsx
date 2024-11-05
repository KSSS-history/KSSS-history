import React from "react";
import styles from "./EventCard.module.css";

const EventCard = ({ event }) => {
  return (
    <article className={styles.EventCard}>
      <div className={styles.EventCard_header}>
        <div className={styles.EventCard_year}>{event.fullYear}</div>
        <h2>{event.headingSv}</h2>
      </div>
      <h3>{event.introTextSv}</h3>
      <button>read more</button>
      {event.eventImage?.file?.url && (
        <img
          className={styles.EventCard_image}
          src={event.eventImage.file.url}
          alt={event.eventImage.title || "The Event image"}
        />
      )}
    </article>
  );
};

export default EventCard;
