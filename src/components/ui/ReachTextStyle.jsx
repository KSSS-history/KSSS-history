//This component send props to style the Reach Text from Contentfiul.
//Reach Text contains diff. elements as <p>, <a> etc.

import styles from "./ReachTextStyle.module.css";

const ReachTextStyle = (props) => {
  return <div className={styles.ReachTextStyle}>{props.children}</div>;
};

export default ReachTextStyle;
