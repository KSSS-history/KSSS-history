import { useContext } from "react";
import { LanguageContext } from "../../utiles/contexts/LanguageProvider";
import image from "/images/ksss_flag.webp?url";
import IntroImage from "../ui/IntroImage";

const DefaultEventMessage = () => {
  const { language } = useContext(LanguageContext);

  // Languge selection ability:
  const languageOption = {
    swedish: {
      line1:
        "För närvarande finns det inga historiska händelser från detta år att visa.",
      line2:
        "Vi inbjuder er att utforska KSSS historiska tidlinje eller söka efter en specifik händelse i vår rika historia som går tillbaka till 1830.",
    },
    english: {
      line1:
        "There are currently no historical events for this year to display.",
      line2:
        "We invite you to explore the KSSS historical timeline or search for a specific event in our rich history dating back to 1830.",
    },
  };

  //Select the appropriate language content
  const { line1, line2 } = languageOption[language];

  return (
    <article>
      <IntroImage src={image} alt="the image of the KSSS flag" />
      <h2>{line1}</h2>
      <h2>{line2}</h2>
    </article>
  );
};

export default DefaultEventMessage;
