import SearchBar from "../container/main/SearchBar";
import YearNavigation from "../container/main/YearNavigation";
import EventSection from "../container/main/EventSection";

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
