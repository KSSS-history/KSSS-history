import { PiArrowUpRight } from "react-icons/pi";
import logo from "../../assets/logo.svg";
import LanguageToggle from "../../components/buttons/LanguageToggle";
import MenuBtn from "../../components/buttons/MenuBtn";
import MenuList from "../../components/menu/MenuList";
import useToggle from "../../components/hooks/useToggle";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuButton, toggleMenuButton] = useToggle(false);

  return (
    <header className={styles.Header}>
      <nav className={styles.Header_nav}>
        <img className={styles.ksssLogo} src={logo} alt="KSSS Logotype" />
        <div className={styles.Header_nav_links}>
          <span>Historia</span>
          {/* <span>History</span> */}
          <a
            href="https://www.ksss.se/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.Header_nav_title}
          >
            <span className={styles.Header_nav_link}>KSSS</span>
            <PiArrowUpRight size="1em" color="black" />
          </a>
          <LanguageToggle />
        </div>
        <MenuBtn
          isMenuButton={isMenuButton}
          toggleMenuButton={toggleMenuButton}
        />
        {isMenuButton && <MenuList />}
      </nav>
    </header>
  );
};

export default Header;
