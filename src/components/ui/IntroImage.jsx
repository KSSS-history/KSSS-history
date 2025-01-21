//This component take props to represent the main/intro image.
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./IntroImage.module.css";

const IntroImage = (props) => {
  return (
    <div className={styles.IntroImage_wrapper}>
      <LazyLoadImage
        className={styles.IntroImage}
        loading="lazy"
        effect="blur"
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
};

export default IntroImage;
