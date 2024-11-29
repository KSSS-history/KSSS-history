//Props come from the parent - EventDetailsProvider.jsx

import GoBackBtn from "../../../components/buttons/GoBackBtn";
import styles from "./EventNavBar.module.css";

const EventNavBar = ({ event }) => {
  return (
    <nav className={styles.EventNavBar}>
      <GoBackBtn />
      <div>{event.fullYear}</div>
    </nav>
  );
};

export default EventNavBar;
