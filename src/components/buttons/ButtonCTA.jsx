import { useNavigate } from "react-router-dom";
import styles from "./ButtonCTA.module.css";

const ButtonCTA = ({ eventId }) => {
  const navigate = useNavigate();

  function openEventDetails() {
    navigate(`/event/${eventId}`);
  }

  function handleClick() {
    openEventDetails();
  }

  return (
    <button className={styles.ButtonCTA} onClick={handleClick}>
      Read more
    </button>
  );
};

export default ButtonCTA;
