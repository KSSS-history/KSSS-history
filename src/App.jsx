import "./App.css";

import { Routes, Route } from "react-router-dom";
import DataProvider from "./utiles/contexts/DataProvider";
import LanguageProvider from "./utiles/contexts/LanguageProvider";
import Header from "./container/header/Header";
import MainPage from "./pages/MainPage";
import DecadeNavigation from "./container/main/decade_navigation/DecadeNavigation";
import SearchResults from "./container/main/search_results/SearchResults";
import EventPage from "./pages/EventPage";

import MemberPage from "./pages/MemberPage";

import NoPage from "./pages/NoPage";
import Footer from "./container/footer/Footer";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <LanguageProvider>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route path="/decade/:decade" element={<DecadeNavigation />} />
            </Route>
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="event/:id" element={<EventPage />} />
            <Route path="/aboutksss" element={<MemberPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </LanguageProvider>
      </DataProvider>
    </div>
  );
}

export default App;
