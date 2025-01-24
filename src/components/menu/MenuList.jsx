import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useContext } from "react";
import { LanguageContext } from "../../utiles/contexts/LanguageProvider";
import { Link } from "react-router-dom";

// createPortal allows child component to be rendered ouside the body
import { createPortal } from "react-dom";
import styles from "./MenuList.module.css";

const MenuList = ({ isVisible, toggleMenuButton }) => {
  // Languge selection ability:
  const { language } = useContext(LanguageContext);

  const languageOption = {
    swedish: {
      home: "KSSS Historia",
      about: "Om oss",
      race: "Kappsegling",
      clubhouse: "Klubbhus",
      celebrations: "Fester",
      camp: "Läger",
    },
    english: {
      home: "KSSS History",
      about: "About us",
      race: "Sailing race",
      clubhouse: "Clubhouse",
      celebrations: "Celebrations",
      camp: "The Camp",
    },
  };

  //Select the appropriate language content
  const { home, about, race, clubhouse, celebrations, camp } =
    languageOption[language];

  // Close the menu when the menu item is chosen
  function handleItemClick() {
    toggleMenuButton();
  }

  return (
    <>
      {createPortal(
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.ul
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={styles.MenuList}
            >
              <Link to="/" onClick={handleItemClick}>
                <li>{home}</li>
              </Link>
              <Link to="/" onClick={handleItemClick}>
                <li>{race}</li>
              </Link>
              <Link to="/" onClick={handleItemClick}>
                <li>{clubhouse}</li>
              </Link>
              <Link to="/" onClick={handleItemClick}>
                <li>{celebrations}</li>
              </Link>
              <Link to="/" onClick={handleItemClick}>
                <li>{camp}</li>
              </Link>
              <Link to="/aboutksss" onClick={handleItemClick}>
                <li>{about}</li>
              </Link>
            </motion.ul>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default MenuList;
