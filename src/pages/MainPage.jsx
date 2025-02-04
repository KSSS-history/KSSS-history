import HeroProvider from "../container/main/hero/HeroProvider";
import SearchBar from "../container/main/search_bar/SearchBar";
import DecadeNavigation from "../container/main/decade_navigation/DecadeNavigation";
import EventsProvider from "../container/main/events_provider/EventsProvider";

const MainPage = () => {
  return (
    <>
      <main>
        <HeroProvider />
        <SearchBar />
        <DecadeNavigation />
        <EventsProvider />
      </main>
    </>
  );
};

export default MainPage;
