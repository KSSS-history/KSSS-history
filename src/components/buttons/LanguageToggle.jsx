import useToggle from "../hooks/useToggle";
import styles from "./LanguageToggle.module.css";

const LanguageToggle = () => {
  const [isActive, toggleActive] = useToggle(true);

  return (
    <div className={styles.LanguageToggle}>
      <button
        onClick={toggleActive}
        className={`${isActive ? styles.active : styles.inactive}`}
      >
        EN
      </button>

      <button
        onClick={toggleActive}
        className={`${isActive ? styles.inactive : styles.active}`}
      >
        SE
      </button>
    </div>
  );
};

export default LanguageToggle;
