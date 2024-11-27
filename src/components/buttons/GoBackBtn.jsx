import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";

import styles from "./GoBackBtn.module.css";

const GoBackBtn = () => {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }
  return (
    <button className={styles.GoBackBtn}>
      <IoChevronBackSharp
        onClick={handleGoBack}
        size="1.5rem"
        color="white"
      ></IoChevronBackSharp>
    </button>
  );
};
export default GoBackBtn;
