//This component take props to represent the main/intro image.

import styles from "./IntroImage.module.css";

const IntroImage = (props) => {
  return (
    <div>
      <img className={styles.IntroImage} src={props.src} alt={props.alt} />
    </div>
  );
};

export default IntroImage;
