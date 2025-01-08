import { useContext } from "react";
import { LanguageContext } from "../../utiles/contexts/LanguageProvider";
import styles from "./LanguageToggle.module.css";

const LanguageToggle = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className={styles.LanguageToggle}>
      <button
        value="swedish"
        onClick={changeLanguage}
        className={language === "swedish" ? styles.active : styles.inactive}
      >
        SE
      </button>

      <button
        value="english"
        onClick={changeLanguage}
        className={language === "english" ? styles.active : styles.inactive}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
