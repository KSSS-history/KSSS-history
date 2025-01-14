import { useContext } from "react";
import { LanguageContext } from "../../utiles/contexts/LanguageProvider";
import { Link } from "react-router-dom";

// createPortal allows child component to be rendered ouside the body
import { createPortal } from "react-dom";
import styles from "./MenuList.module.css";

const MenuList = ({ toggleMenuButton }) => {
  // Languge selection ability:
  const { language } = useContext(LanguageContext);

  const languageOption = {
    swedish: {
      home: "KSSS Historia",
      about: "Om oss",
    },
    english: {
      home: "KSSS History",
      about: "About us",
    },
  };

  //Select the appropriate language content
  const { home, about } = languageOption[language];

  // Close the menu when the menu item is chosen
  function handleItemClick() {
    toggleMenuButton();
  }

  return (
    <>
      {createPortal(
        <ul className={styles.MenuList}>
          <Link to="/" onClick={handleItemClick}>
            <li>{home}</li>
          </Link>
          <Link to="/aboutksss" onClick={handleItemClick}>
            <li>{about}</li>
          </Link>
        </ul>,
        document.body
      )}
    </>
  );
};

export default MenuList;
