import { useContext } from "react";
import { LanguageContext } from "../../utiles/contexts/LanguageProvider";
import { Link } from "react-router-dom";
// createPortal allows child component to be rendered ouside the body
import { createPortal } from "react-dom";
import styles from "./MenuList.module.css";

const MenuList = () => {
  // Languge selection ability:
  const { language } = useContext(LanguageContext);

  const languageOption = {
    swedish: {
      home: "Hem",
      about: "Om KSSS",
    },
    english: {
      home: "Home",
      about: "About KSSS",
    },
  };

  //Select the appropriate language content
  const { home, about, membership, contact } = languageOption[language];
  return (
    <>
      {createPortal(
        <ul className={styles.MenuList}>
          <Link to="/">
            <li>{home}</li>
          </Link>

          <Link to="/aboutksss">
            <li>{about}</li>
          </Link>
        </ul>,
        document.body
      )}
    </>
  );
};

export default MenuList;
