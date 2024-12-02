// createPortal allows child component to be rendered ouside the body

import { createPortal } from "react-dom";
import styles from "./MenuList.module.css";

const MenuList = () => {
  return (
    <>
      {createPortal(
        <ul className={styles.MenuList}>
          <li>Om oss</li>
          {/* <li>About us</li> */}
          <li>Bli medlem</li>
          {/* <li>Be a member</li> */}
          <li>Kontakta oss</li>
          {/* <li>Contact us</li> */}
        </ul>,
        document.body
      )}
    </>
  );
};

export default MenuList;
