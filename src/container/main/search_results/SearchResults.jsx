import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../../../utiles/contexts/DataProvider";
import Hero from "../hero/Hero";
import SearchBar from "../search_bar/SearchBar";
import EventCard from "../event_card/EventCard";

const SearchResults = () => {
  const { query } = useParams(); // Get query text from URL
  const { events, loading, error } = useContext(EventContext);

  const findEvents = events.filter((event) => {
    const searchText = `${event.headingSv || ""}
      ${event.introTextSv || ""}
      ${event.descriptionSv || ""}`.toLowerCase();
    return searchText.includes(query.toLowerCase());
  });

  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error accured in Search Results: {error.message}</div>;

  return (
    <>
      <Hero />
      <SearchBar />
      <div>
        Sökresultat för:
        <h2>{query}</h2>
      </div>
      {findEvents.length === 0 ? (
        " "
      ) : (
        <div>
          Vi hittade <strong>{findEvents.length}</strong> överensstämmelse.
        </div>
      )}

      <article>
        {/*Here go the results of the query */}
        {findEvents.length > 0 ? (
          findEvents.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <div>Vi hittade inga resultat. Försök igen med ett annat ord.</div>
        )}
      </article>
    </>
  );
};

export default SearchResults;
