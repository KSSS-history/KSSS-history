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
      about: "Om oss",
      membership: "Bli medlem",
      contact: "Kontakta oss",
    },
    english: {
      home: "Home",
      about: "About us",
      membership: "Become a member",
      contact: "Contact us",
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
          <Link to="/about">
            <li>{about}</li>
          </Link>
          <Link to="/membership">
            <li>{membership}</li>
          </Link>
          <Link to="/contact">
            <li>{contact}</li>
          </Link>
        </ul>,
        document.body
      )}
    </>
  );
};

export default MenuList;
