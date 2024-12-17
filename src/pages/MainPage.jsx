import SearchBar from "../container/main/search_bar/SearchBar";
import DecadeNavigation from "../container/main/decade_navigation/DecadeNavigation";
import EventsProvider from "../container/main/events_provider/EventsProvider";
import styles from "./MainPage.module.css";
const MainPage = () => {
  return (
    <>
      <main className={styles.MainPage}>
        <h1>KSSS Historia</h1>
        {/* <h1>KSSS History</h1> */}
        <p>
          KSSS är Sveriges största båtklubb och även en av världens största
          båtklubbar med cirka 6000 medlemmar, varav 2500 juniorer.
        </p>
        {/* <p>
          KSSS is Sweden's largest and one of the world's largest yacht clubs.
          With about 6000 members, including 2500 juniors.
        </p> */}
        <SearchBar />
        <DecadeNavigation />
        <EventsProvider />
      </main>
    </>
  );
};

export default MainPage;
