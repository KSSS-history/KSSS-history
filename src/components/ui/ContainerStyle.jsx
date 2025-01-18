//This component send props to represent the default styling with @media for a wrap-container.

import styles from "./ContainerStyle.module.css";

const ContainerStyle = (props) => {
  return <div className={styles.ContainerStyle}>{props.children}</div>;
};

export default ContainerStyle;
