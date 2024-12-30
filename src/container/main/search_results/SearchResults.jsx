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
      <div>The search result for: {query} </div>
      <div>There are tottaly {events.length} events in the DB</div>
      <div>Found {findEvents.length} mathing.</div>

      <article>
        {/*Here go the results of the query */}
        {findEvents.length > 0 ? (
          findEvents.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <div>No events found matching your query.</div>
        )}
      </article>
    </>
  );
};

export default SearchResults;
