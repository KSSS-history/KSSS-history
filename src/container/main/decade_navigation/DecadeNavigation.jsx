import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../../../helpers/contexts/DataProvider";
import DecadeNavigationBtn from "../../../components/buttons/DecadeNavigationBtn";
import styles from "./DecadeNavigation.module.css";

const DecadeNavigation = () => {
  const decades = [
    "nu",
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

  const [activeDecade, setActiveDecade] = useState("nu");
  const { filterByDecade } = useContext(EventContext);
  const navigate = useNavigate();

  function handleDacadeClick(decade) {
    filterByDecade(decade);
    setActiveDecade(decade);
    if (decade === "nu") {
      navigate("/");
    } else {
      navigate(`decade/${decade}`);
    }
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
