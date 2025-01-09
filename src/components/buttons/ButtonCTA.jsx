import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../utiles/contexts/LanguageProvider";
import styles from "./ButtonCTA.module.css";

const ButtonCTA = ({ eventId }) => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  function openEventDetails() {
    navigate(`/event/${eventId}`);
  }

  function handleClick() {
    openEventDetails();
  }

  // Languge selection ability:
  const languageOption = {
    swedish: {
      text: "Läs mer",
    },
    english: {
      text: "Read more",
    },
  };

  //Select the appropriate language content
  const { text } = languageOption[language];
  return (
    <button className={styles.ButtonCTA} onClick={handleClick}>
      {text}
    </button>
  );
};

export default ButtonCTA;
