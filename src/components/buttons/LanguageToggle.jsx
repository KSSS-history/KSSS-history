import * as motion from "motion/react-client";
import { useContext } from "react";
import { LanguageContext } from "../../utiles/contexts/LanguageProvider";
import styles from "./LanguageToggle.module.css";

const LanguageToggle = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className={styles.LanguageToggle}>
      <motion.button
        value="swedish"
        onClick={changeLanguage}
        className={language === "swedish" ? styles.active : styles.inactive}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
        }}
        whileTap={{ scale: 0.9 }}
      >
        SE
      </motion.button>

      <motion.button
        value="english"
        onClick={changeLanguage}
        className={language === "english" ? styles.active : styles.inactive}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
        }}
        whileTap={{ scale: 0.9 }}
      >
        EN
      </motion.button>
    </div>
  );
};

export default LanguageToggle;
