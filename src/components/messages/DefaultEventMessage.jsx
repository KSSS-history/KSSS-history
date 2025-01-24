import { useContext } from "react";
import { LanguageContext } from "../../utiles/contexts/LanguageProvider";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import image from "../../assets/ksss_flag.webp";
import IntroImage from "../ui/IntroImage";
import ContainerStyle from "../ui/ContainerStyle";

const DefaultEventMessage = () => {
  const { language } = useContext(LanguageContext);

  // Languge selection ability:
  const languageOption = {
    swedish: {
      line1: "Inom KSSS breda verksamhet skapas ständigt ny historia.",
      line2:
        "Vi inbjuder er att här utforska KSSS historiska tidslinje eller söka efter en specifik händelse i vår rika historia som går tillbaka till 1830.",
      line3: "För aktuella händelser för året, hänvisas till ",
      link: "KSSS hemsida.",
    },
    english: {
      line1:
        "Within KSSS's broad activities, new history is constantly being created.",
      line2:
        "We invite you to explore the KSSS historical timeline here or search for a specific event in our rich history dating back to 1830.",
      line3: "For current events for the year, please refer to the ",
      link: "KSSS website.",
    },
  };

  //Select the appropriate language content
  const { line1, line2, line3, link } = languageOption[language];

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.article
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ContainerStyle>
            <IntroImage src={image} alt="the image of the KSSS flag" />
            <h2>{line1}</h2>
            <h3>{line2}</h3>
            <h3>
              {line3}
              <a
                style={{ color: "var(--clr-primary-focused)" }}
                href="https://www.ksss.se/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link}
              </a>
            </h3>
          </ContainerStyle>
        </motion.article>
      </AnimatePresence>
    </>
  );
};

export default DefaultEventMessage;
