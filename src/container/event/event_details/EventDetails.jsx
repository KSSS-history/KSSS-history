//Props come from the parent - EventDetailsProvider.jsx
import styles from "./EventDetails.module.css";

const EventDetails = ({ event }) => {
  return (
    <article className={styles.EventDetails}>
      <h2>{event.headingSv}</h2>
      <h3>{event.introTextSv}</h3>
      {event.introImage?.file?.url && (
        <img
          className={styles.EventDetails_image}
          src={event.introImage.file.url}
          alt={event.introImage.title || "The Event image"}
        />
      )}
      <div className={styles.EventDetails_image_container}>
        {/* Render each image in eventImages if eventImages is an array and has elements */}
        {Array.isArray(event.eventImages) &&
          event.eventImages.length > 0 &&
          event.eventImages.map(
            (img, index) =>
              img?.file?.url && ( // Additional null check for img
                <img
                  key={index}
                  className={styles.EventDetails_images}
                  src={img.file.url}
                  alt={img.title || "The Event image"}
                />
              )
          )}
      </div>

      <p>{event.descriptionSv}</p>
    </article>
  );
};

export default EventDetails;
