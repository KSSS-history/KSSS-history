import { useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EventContext } from "../../../utiles/contexts/DataProvider";
import { LanguageContext } from "../../../utiles/contexts/LanguageProvider";
import DecadeNavigationBtn from "../../../components/buttons/DecadeNavigationBtn";
import styles from "./DecadeNavigation.module.css";

const DecadeNavigation = () => {
  const { language } = useContext(LanguageContext);

  // Languge selection ability:
  const languageOption = {
    swedish: {
      now: "nu",
    },
    english: {
      now: "now",
    },
  };
  //Select the appropriate language content
  const { now } = languageOption[language];

  const decades = [
    now,
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

  const { filterByDecade } = useContext(EventContext);
  const { decade } = useParams();
  const navigate = useNavigate();
  const activeButtonRef = useRef(); //useRef to track active button position

  const activeDecade = decade || now;

  //Whatever the url pathname change /activeDecade/, show the respective filtered events
  useEffect(() => {
    filterByDecade(activeDecade);

    console.log(activeDecade);
  }, [activeDecade]);

  // Scroll the active button into user view when the component mounts or activeDecade changes
  useEffect(() => {
    if (activeButtonRef.current) {
      activeButtonRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "end",
      });
    }

    //--> this is to see how the useRef behave:
    // activeButtonRef.current.style.backgroundColor = "yellow";
    // console.log(activeButtonRef);
  }, []);

  function handleDacadeClick(decade) {
    if (decade === now) {
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
          ref={activeDecade === decade ? activeButtonRef : null}
        />
      ))}
    </div>
  );
};

export default DecadeNavigation;
