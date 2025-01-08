import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../../utiles/contexts/LanguageProvider";
import { IoMdSearch } from "react-icons/io";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleClick() {
    // e.preventDefault(); // Prevent form submission
    // //1. Do something
    // alert("Saved to DB");

    //2.Rederect somwhere else
    navigate(`/search/${query}`);
  }

  // Languge selection ability:
  const languageOption = {
    swedish: {
      placeholder: "Sök för händelser...",
    },
    english: {
      placeholder: "Search for events...",
    },
  };

  //Select the appropriate language content
  const { placeholder } = languageOption[language];
  return (
    <search className={styles.SearchBar}>
      <form>
        <input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={handleClick}>
          <IoMdSearch size="2rem" color="var(--clr-primary)" />
        </button>
      </form>
    </search>
  );
};

export default SearchBar;
