//Props are sended from Header.jsx

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./Menu_Button.module.css";

const Menu_Button = ({ isMenu, toggleMenu }) => {
  return (
    <button onClick={toggleMenu} className={styles.Menu_Button}>
      {isMenu ? (
        <AiOutlineClose size="2rem" color="black" />
      ) : (
        <AiOutlineMenu size="2rem" color="black" />
      )}
    </button>
  );
};

export default Menu_Button;
