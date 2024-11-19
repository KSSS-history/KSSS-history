import styles from "./ButtonCTA.module.css";

function openEventDetails() {}

function handleClick() {
  openEventDetails();
}

const ButtonCTA = () => {
  return (
    <button className={styles.ButtonCTA} onClick={handleClick}>
      Read more
    </button>
  );
};

export default ButtonCTA;
