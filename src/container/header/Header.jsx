import { useContext } from "react";
import { LanguageContext } from "../../utiles/contexts/LanguageProvider";
import { Link } from "react-router-dom";
import { PiArrowUpRight } from "react-icons/pi";
import logo from "../../assets/logo.svg";
import LanguageToggle from "../../components/buttons/LanguageToggle";
import MenuBtn from "../../components/buttons/MenuBtn";
import MenuList from "../../components/menu/MenuList";
import useToggle from "../../utiles/hooks/useToggle";
import styles from "./Header.module.css";

const Header = () => {
  // Languge selection ability:
  const { language } = useContext(LanguageContext);

  const languageOption = {
    swedish: {
      heading: "Historia",
    },
    english: {
      heading: "History",
    },
  };

  //Select the appropriate language content
  const { heading } = languageOption[language];

  const [isMenuButton, toggleMenuButton] = useToggle(false);

  return (
    <header className={styles.Header}>
      <nav className={styles.Header_nav}>
        <Link to="/">
          <img className={styles.ksssLogo} src={logo} alt="KSSS Logotype" />
        </Link>
        <div className={styles.Header_nav_links}>
          <Link to="/">
            <span className={styles.Header_nav_link}>{heading}</span>
          </Link>
          <a
            href="https://www.ksss.se/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.Header_nav_title}
          >
            <span className={styles.Header_nav_link_to_KSSS}>KSSS</span>
            <PiArrowUpRight size="1em" color="black" />
          </a>
          <LanguageToggle />
        </div>
        <MenuBtn
          isMenuButton={isMenuButton}
          toggleMenuButton={toggleMenuButton}
        />

        <MenuList
          isVisible={isMenuButton}
          toggleMenuButton={toggleMenuButton}
        />
      </nav>
    </header>
  );
};

export default Header;
