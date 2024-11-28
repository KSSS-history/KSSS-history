import { useState } from "react";
import DecadeNavigationBtn from "../../../components/buttons/DecadeNavigationBtn";
import styles from "./DecadeNavigation.module.css";

const DecadeNavigation = ({ onSelectDecade }) => {
  const decades = [
    "now",
    "2020",
    "2000",
    "1980",
    "1960",
    "1940",
    "1920",
    "1900",
    "1880",
    "1860",
    "1840",
    "1830",
  ];

  const [activeDecade, setActiveDecade] = useState("now");

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
