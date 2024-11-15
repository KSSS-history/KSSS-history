// createPortal allows child component to be rendered ouside the body

import { createPortal } from "react-dom";
import styles from "./MenuList.module.css";

const MenuList = () => {
  return (
    <>
      {createPortal(
        <ul className={styles.MenuList}>
          <li>About us</li>
          <li>Be a member</li>
          <li>Contact us</li>
        </ul>,
        document.body
      )}
    </>
  );
};

export default MenuList;
