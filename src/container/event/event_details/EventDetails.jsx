// the documentToReactComponents helps to display the reach text from Contentful efficiently.
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

//Props come from the parent - EventDetailsProvider.jsx
import styles from "./EventDetails.module.css";

const EventDetails = ({ event }) => {
  const hasImages =
    Array.isArray(event.eventImages) &&
    event.eventImages.some((img) => img?.file?.url);

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
      {hasImages && (
        <div className={styles.EventDetails_images_container}>
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
      )}
      {/* The reach text from Contentful MUST renders inside a <div>, 
      because text retrieves as separate <p> elements and it is prohibited to nestle <p> inside <p>. */}
      <div className={styles.EventDetails_description}>
        {documentToReactComponents(event.descriptionSv)}
      </div>
    </article>
  );
};

export default EventDetails;
