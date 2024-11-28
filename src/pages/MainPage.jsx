import SearchBar from "../container/main/search_bar/SearchBar";

import EventsProvider from "../container/main/events_provider/EventsProvider";
import styles from "./MainPage.module.css";
const MainPage = () => {
  return (
    <>
      <main className={styles.MainPage}>
        <h1>KSSS History</h1>
        <p>
          KSSS is Sweden's largest and the world's second largest sailing club.
          With over 5,000 members, including over 2,000 juniors.
        </p>
        <SearchBar />

        <EventsProvider />
      </main>
    </>
  );
};

export default MainPage;
