import { useContext } from "react";
import { LanguageContext } from "../../../utiles/contexts/LanguageProvider";
import styles from "./EventDetails.module.css";

// the documentToReactComponents helps to display the reach text from Contentful efficiently.
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

//- - - - - - - - - - - - - - - - - - - - - - - - - - -
//Props come from the parent - EventDetailsProvider.jsx
//- - - - - - - - - - - - - - - - - - - - - - - - - - -

const EventDetails = ({ event }) => {
  // Languge selection ability:
  const { language } = useContext(LanguageContext);

  const languageOption = {
    swedish: {
      heading: event.headingSv,
      introText: event.introTextSv,
      description: event.descriptionSv,
    },
    english: {
      heading: event.headingEn,
      introText: event.introTextEn,
      description: event.descriptionEn,
    },
  };

  //Select the appropriate language content
  const { heading, introText, description } = languageOption[language];

  const hasImages =
    Array.isArray(event.eventImages) &&
    event.eventImages.some((img) => img?.file?.url);

  return (
    <article className={styles.EventDetails}>
      <h2>{heading}</h2>
      <h3>{introText}</h3>
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
        {documentToReactComponents(description)}
      </div>
    </article>
  );
};

export default EventDetails;
