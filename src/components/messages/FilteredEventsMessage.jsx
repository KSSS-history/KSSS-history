import { useContext } from "react";
import { EventContext } from "../../utiles/contexts/DataProvider";
import { LanguageContext } from "../../utiles/contexts/LanguageProvider";
import ContainerStyle from "../ui/ContainerStyle";

const FilteredEventsMessage = () => {
  const { filteredEvents } = useContext(EventContext);
  const { language } = useContext(LanguageContext);

  // Languge selection ability:
  const languageOption = {
    swedish: {
      messageEvents: `Det finns ${filteredEvents.length} händelser under den här perioden.`,
      messageOneEvent: "Det finns bara 1 händelse under den här perioden.",
    },
    english: {
      messageEvents: `There are ${filteredEvents.length} events for this period.`,
      messageOneEvent: "There is only 1 event for this period.",
    },
  };

  //Select the appropriate language content
  const { messageEvents, messageOneEvent } = languageOption[language];

  //Conditional for appearing founded events:
  let message = "";
  if (filteredEvents.length === 1) {
    message = messageOneEvent;
  } else if (filteredEvents.length > 1) {
    message = messageEvents;
  }
  if (!message) return null;

  return (
    <>
      <ContainerStyle>
        <p>{message}</p>
      </ContainerStyle>
    </>
  );
};

export default FilteredEventsMessage;
