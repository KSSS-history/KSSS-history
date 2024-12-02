import { useState } from "react";
import DecadeNavigationBtn from "../../../components/buttons/DecadeNavigationBtn";
import styles from "./DecadeNavigation.module.css";

const DecadeNavigation = ({ onSelectDecade }) => {
  const decades = [
    "nutid",
    "2020",
    "2010",
    "2000",
    "1990",
    "1980",
    "1970",
    "1960",
    "1950",
    "1940",
    "1930",
    "1920",
    "1910",
    "1900",
    "1890",
    "1880",
    "1870",
    "1860",
    "1850",
    "1840",
    "1830",
  ];

  const [activeDecade, setActiveDecade] = useState("nutid");

  function handleDacadeClick(decade) {
    setActiveDecade(decade);
    onSelectDecade(decade);
  }

  return (
    <div className={styles.DecadeNavigation}>
      {decades.map((decade) => (
        <DecadeNavigationBtn
          key={decade}
          title={decade}
          onClick={() => handleDacadeClick(decade)}
          isActive={activeDecade === decade}
        />
      ))}
    </div>
  );
};

export default DecadeNavigation;
