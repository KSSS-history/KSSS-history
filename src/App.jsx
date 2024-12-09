import "./App.css";

import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

import EventPage from "./pages/EventPage";
import NoPage from "./pages/NoPage";
import Header from "./container/header/Header";
import Footer from "./container/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}>
          {/* <Route path="/decade/:decadeId" element={<EventsProvider />} /> */}
        </Route>
        <Route path="event/:id" element={<EventPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
