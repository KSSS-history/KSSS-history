import { useContext } from "react";
import { EventContext } from "../../utiles/contexts/DataProvider";
import { LanguageContext } from "../../utiles/contexts/LanguageProvider";

const FilteredEventsMessage = () => {
  const { filteredEvents } = useContext(EventContext);
  const { language } = useContext(LanguageContext);

  // Languge selection ability:
  const languageOption = {
    swedish: {
      messageGeneral: `Det finns ${filteredEvents.length} händelser under den här perioden.`,
      messageCase0: "Tyvärr finns det inga händelser under den här perioden.",
      messageCase1: "Det finns bara 1 händelse under den här perioden.",
    },
    english: {
      messageGeneral: `There are ${filteredEvents.length} events for this period.`,
      messageCase0: "Unfortunately, there are no events for this period.",
      messageCase1: "There is only 1 event for this period.",
    },
  };

  //Select the appropriate language content
  const { messageGeneral, messageCase0, messageCase1 } =
    languageOption[language];

  let message = messageGeneral;
  switch (filteredEvents.length) {
    case 0:
      message = messageCase0;
      break;
    case 1:
      message = messageCase1;
      break;
    default:
      break;
  }

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default FilteredEventsMessage;
