import SearchBar from "../container/main/search_bar/SearchBar";
import YearNavigation from "../container/main/year_navigation/YearNavigation";
import EventSection from "../container/main/event_section/EventSection";

const MainPage = () => {
  return (
    <>
      <main>
        <h1>KSSS History</h1>
        <p>Here comes a short intro for this page</p>
        <SearchBar />
        <YearNavigation />
        <EventSection />
      </main>
    </>
  );
};

export default MainPage;
