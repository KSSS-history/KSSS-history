import styles from "./DecadeNavigationBtn.module.css";

const DecadeNavigationBtn = (props) => {
  return <button className={styles.DecadeNavigationBtn}>{props.title}</button>;
};

export default DecadeNavigationBtn;
