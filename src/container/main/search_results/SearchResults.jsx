import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../../../utiles/contexts/DataProvider";
import { LanguageContext } from "../../../utiles/contexts/LanguageProvider";
import Hero from "../hero/Hero";
import SearchBar from "../search_bar/SearchBar";
import EventCard from "../event_card/EventCard";
import styles from "./SearchResults.module.css";

const SearchResults = () => {
  const { query } = useParams(); // Get query text from URL
  const { events, loading, error } = useContext(EventContext);
  const { language } = useContext(LanguageContext);

  // Languge selection ability:
  const languageOptionFields = {
    swedish: ["fullYear", "headingSv", "introTextSv", "descriptionSv"],
    english: ["fullYear", "headingEn", "introTextEn", "descriptionEn"],
  };

  const languageOption = {
    swedish: {
      search: "Sökresultat för:",
      messageStart: "Vi hittade ",
      messageEnd: " sammanfallande.",
      noResult: "Vi hittade inga resultat. Försök igen med ett annat ord.",
    },
    english: {
      search: "Search result for:",
      messageStart: "We found ",
      messageEnd: " occurrences.",
      noResult: "We found no results. Try again with a different word.",
    },
  };
  //Select the appropriate language content
  const { search, messageStart, messageEnd, noResult } =
    languageOption[language];

  //Get the fields based on the selected language:
  const fields = languageOptionFields[language];
  console.log("Language:", language); // Debugging
  console.log("Query:", query); // Debugging
  console.log("Fields:", fields); // Debugging

  // Filter events based on the query and selected language:
  const findEvents = events.filter((event) => {
    const searchText = fields
      .map((field) => event[field] || "")
      .join(" ")
      .toLowerCase();
    return searchText.includes(query.toLowerCase());
  });

  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error accured in Search Results: {error.message}</div>;

  return (
    <>
      <Hero />
      <SearchBar />
      <div className={styles.SearchResults}>
        {search}
        <h2>{query}</h2>
      </div>
      {findEvents.length === 0 ? (
        " "
      ) : (
        <div className={styles.SearchResults}>
          {messageStart}
          <strong>{findEvents.length}</strong>
          {messageEnd}
        </div>
      )}

      <article>
        {/*Here go the results of the query */}
        {findEvents.length > 0 ? (
          findEvents.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <div className={styles.SearchResults}>{noResult}</div>
        )}
      </article>
    </>
  );
};

export default SearchResults;
