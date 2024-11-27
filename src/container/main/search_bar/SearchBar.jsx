import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [query, setQuaery] = useState("");
  return (
    <div className={styles.SearchBar}>
      <label>
        <input type="text" placeholder="Search for events..."></input>
        <button>
          <IoMdSearch size="2rem" color="var(--clr-primary)" />
        </button>
      </label>
    </div>
  );
};

export default SearchBar;
