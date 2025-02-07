//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//This message will appear in case there is no event in DB for the period,
//instead of an empty space in UI
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

import { useContext } from "react";
import { LanguageContext } from "../../../utiles/contexts/LanguageProvider";
import IntroImage from "../../ui/IntroImage";
import ContainerStyle from "../../ui/ContainerStyle";
import ReachTextStyle from "../../ui/ReachTextStyle";
import richTextRenderOptions from "../../../utiles/helpers/richTextRenderOptions";

// the documentToReactComponents helps to display the reach text from Contentful efficiently.
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const FallbackMessage = ({ fallback }) => {
  const { language } = useContext(LanguageContext);
  console.log("FALLBACK Data got as props to the page", fallback);

  // Languge selection ability:
  const languageOption = {
    swedish: {
      title: fallback.titleSv,
      message: fallback.messageSv,
    },
    english: {
      title: fallback.titleEn,
      message: fallback.messageEn,
    },
  };

  //Select the appropriate language content
  const { title, message } = languageOption[language];

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
            {fallback.fallbackImage?.file?.url && (
              <IntroImage
                src={fallback.fallbackImage.file.url}
                alt={
                  fallback.fallbackImage.title || "The thematic image of KSSS"
                }
              />
            )}
            <h2>{title}</h2>
            <ReachTextStyle>
              {/* The reach text from Contentful MUST renders inside a <div>, 
                  because text retrieves as separate <p> elements and it is prohibited to nestle <p> inside <p>. */}
              <div>
                {documentToReactComponents(message, richTextRenderOptions)}
              </div>
            </ReachTextStyle>
          </ContainerStyle>
        </motion.article>
      </AnimatePresence>
    </>
  );
};

export default FallbackMessage;
