import { PiArrowUpRight } from "react-icons/pi";
import logo from "../../assets/logo.svg";
import Language_Toggle from "../../components/buttons/Language_Toggle";
import Menu_Button from "../../components/buttons/Menu_Button";
import Menu_List from "../../components/menu/Menu_List";
import useToggle from "../../components/hooks/useToggle";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenu, toggleMenu] = useToggle(false);

  return (
    <header className={styles.Header}>
      <img className={styles.ksssLogo} src={logo} alt="KSSS Logotype" />
      <nav className={styles.Header_nav}>
        <div className={styles.Header_nav_links}>
          <span>History</span>
          <a
            href="https://www.ksss.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>KSSS</span>
            <PiArrowUpRight size="2em" />
          </a>
          <Language_Toggle />
        </div>

        <Menu_Button isMenu={isMenu} toggleMenu={toggleMenu} />
        {isMenu && <Menu_List />}
      </nav>
    </header>
  );
};

export default Header;
