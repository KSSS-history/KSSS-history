import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

import { useContext } from "react";
import { LanguageContext } from "../../../utiles/contexts/LanguageProvider";
import ButtonCTA from "../../../components/buttons/ButtonCTA";
import styles from "./EventCard.module.css";

//- - - - - - - - - - - - - - - - - - - - - - - - - - -
//Props come from the parent - EventsProvider.jsx
//- - - - - - - - - - - - - - - - - - - - - - - - - - -

const EventCard = ({ event }) => {
  //Conditional appearence of the ButtonCTA.
  //If there are some more info to read, button will appeare.
  const hasDetails =
    event.descriptionEn || event.descriptionSv || event.eventImages;

  // Languge selection ability:
  const { language } = useContext(LanguageContext);

  const languageOption = {
    swedish: {
      heading: event.headingSv,
      introText: event.introTextSv,
    },
    english: {
      heading: event.headingEn,
      introText: event.introTextEn,
    },
  };

  //Select the appropriate language content
  const { heading, introText } = languageOption[language];

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.article
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={styles.EventCard}
        >
          <div className={styles.EventCard_year}>{event.fullYear}</div>
          <div className={styles.EventCard_content}>
            <h2>{heading}</h2>
            <h3>{introText}</h3>

            {hasDetails && <ButtonCTA eventId={event.id} />}
          </div>
          {event.introImage?.file?.url && (
            <div className={styles.EventCard_image_container}>
              <img
                className={styles.EventCard_image}
                src={event.introImage.file.url}
                alt={event.introImage.title || "The Event image"}
              />
            </div>
          )}
        </motion.article>
      </AnimatePresence>
    </>
  );
};

export default EventCard;
