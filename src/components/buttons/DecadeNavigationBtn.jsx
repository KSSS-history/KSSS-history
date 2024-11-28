import styles from "./DecadeNavigationBtn.module.css";

const DecadeNavigationBtn = ({ title, onClick, isActive }) => {
  return (
    <button
      className={`${styles.DecadeNavigationBtn} ${
        isActive ? styles.Active : ""
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default DecadeNavigationBtn;
