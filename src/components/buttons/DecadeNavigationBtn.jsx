import { forwardRef } from "react";
import * as motion from "motion/react-client";
import styles from "./DecadeNavigationBtn.module.css";

const DecadeNavigationBtn = forwardRef(
  ({ title, onClick, isActive }, activeButtonRef) => {
    return (
      <motion.button
        ref={activeButtonRef}
        className={`${styles.DecadeNavigationBtn} ${
          isActive ? styles.Active : ""
        }`}
        onClick={onClick}
        animate={isActive ? { scale: 1.1 } : { scale: 1 }}
        transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
        whileTap={{ scale: 0.9 }}
      >
        {title}
      </motion.button>
    );
  }
);

export default DecadeNavigationBtn;
