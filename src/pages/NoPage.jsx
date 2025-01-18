import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../utiles/contexts/LanguageProvider";
import ContainerStyle from "../components/ui/ContainerStyle";
import styles from "./NoPage.module.css";

const NoPage = () => {
  const { language } = useContext(LanguageContext);

  // Languge selection ability:
  const languageOption = {
    swedish: {
      message: "Sidan kan inte hittas",
      error: "FEL",
      link: "Till startsidan ->",
    },
    english: {
      message: "Can not find this page",
      error: "ERROR",
      link: "To the home page ->",
    },
  };

  //Select the appropriate language content
  const { message, error, link } = languageOption[language];

  return (
    <div className={styles.ContainerStyle}>
      <ContainerStyle>
        {message}
        <div className={styles.ContainerStyle_num}>404</div>
        <div className={styles.ContainerStyle_error}>{error}</div>
        <Link to="/" className={styles.ContainerStyle_link}>
          {link}
        </Link>
      </ContainerStyle>
    </div>
  );
};

export default NoPage;
