//Props are sended from Header.jsx

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./MenuBtn.module.css";

const MenuBtn = ({ isMenuButton, toggleMenuButton }) => {
  return (
    <button className={styles.MenuBtn} onClick={toggleMenuButton}>
      {isMenuButton ? (
        <AiOutlineClose size="2rem" color="black" />
      ) : (
        <AiOutlineMenu size="2rem" color="black" />
      )}
    </button>
  );
};

export default MenuBtn;
