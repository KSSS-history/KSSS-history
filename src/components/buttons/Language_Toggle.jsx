import useToggle from "../hooks/useToggle";
import styles from "./Language_Toggle.module.css";

const Language_Toggle = () => {
  const [isActive, toggleActive] = useToggle(true);

  return (
    <div className={styles.Language_Toggle}>
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

export default Language_Toggle;
