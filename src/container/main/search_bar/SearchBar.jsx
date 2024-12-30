import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoMdSearch } from "react-icons/io";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
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

  return (
    <search className={styles.SearchBar}>
      <form>
        <input
          type="search"
          placeholder="Sök för händelser..."
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
