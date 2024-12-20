import useToggle from "../../utiles/hooks/useToggle";
import styles from "./LanguageToggle.module.css";

const LanguageToggle = () => {
  const [isActive, toggleActive] = useToggle(true);

  return (
    <div className={styles.LanguageToggle}>
      <button
        onClick={toggleActive}
        className={`${isActive ? styles.active : styles.inactive}`}
      >
        SE
      </button>

      <button
        onClick={toggleActive}
        className={`${isActive ? styles.inactive : styles.active}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
