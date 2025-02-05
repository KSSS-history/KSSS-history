import "./App.css";

import { Routes, Route } from "react-router-dom";
import DataProvider from "./utiles/contexts/DataProvider";
import LanguageProvider from "./utiles/contexts/LanguageProvider";
import Header from "./container/header/Header";
import MainPage from "./pages/MainPage";
import DecadeNavigation from "./container/main/decade_navigation/DecadeNavigation";
import SearchResults from "./container/main/search_results/SearchResults";
import EventPage from "./pages/EventPage";
import AboutPage from "./pages/AboutPage";
import NoPage from "./pages/NoPage";
import Footer from "./container/footer/Footer";
import Hero_DataProvider from "./utiles/contexts/Hero_DataProvider";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <LanguageProvider>
          <Hero_DataProvider>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />}>
                <Route path="/decade/:decade" element={<DecadeNavigation />} />
              </Route>
              <Route path="/search/:query" element={<SearchResults />} />

              <Route path="event/:id" element={<EventPage />} />
              <Route path="/aboutksss" element={<AboutPage />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
          </Hero_DataProvider>
        </LanguageProvider>
      </DataProvider>
    </div>
  );
}

export default App;
