import SearchBar from "../container/main/search_bar/SearchBar";
import YearNavigation from "../container/main/year_navigation/YearNavigation";
import EventsProvider from "../container/main/events_provider/EventsProvider";

const MainPage = () => {
  return (
    <>
      <main>
        <h1>KSSS History</h1>
        <p>
          KSSS is Sweden's largest and the world's second largest sailing club.
          With over 5,000 members, including over 2,000 juniors.
        </p>
        <SearchBar />
        <YearNavigation />
        <EventsProvider />
      </main>
    </>
  );
};

export default MainPage;
