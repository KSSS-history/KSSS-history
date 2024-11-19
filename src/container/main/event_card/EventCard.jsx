import ButtonCTA from "../../../components/buttons/ButtonCTA";
import styles from "./EventCard.module.css";

const EventCard = ({ event }) => {
  return (
    <article className={styles.EventCard}>
      <div className={styles.EventCard_year}>{event.fullYear}</div>
      <div className={styles.EventCard_content}>
        <h2>{event.headingSv}</h2>
        <h3>{event.introTextSv}</h3>
        <ButtonCTA />
      </div>
      {event.introImage?.file?.url && (
        <img
          className={styles.EventCard_image}
          src={event.introImage.file.url}
          alt={event.introImage.title || "The Event image"}
        />
      )}
    </article>
  );
};

export default EventCard;
