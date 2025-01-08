import { useContext } from "react";
import { LanguageContext } from "../../utiles/contexts/LanguageProvider";

// createPortal allows child component to be rendered ouside the body
import { createPortal } from "react-dom";
import styles from "./MenuList.module.css";

const MenuList = () => {
  // Languge selection ability:
  const { language } = useContext(LanguageContext);

  const languageOption = {
    swedish: {
      about: "Om oss",
      membership: "Bli medlem",
      contact: "Kontakta oss",
    },
    english: {
      about: "About us",
      membership: "Become a member",
      contact: "Contact us",
    },
  };

  //Select the appropriate language content
  const { about, membership, contact } = languageOption[language];
  return (
    <>
      {createPortal(
        <ul className={styles.MenuList}>
          <li>{about}</li>
          <li>{membership}</li>
          <li>{contact}</li>
        </ul>,
        document.body
      )}
    </>
  );
};

export default MenuList;
