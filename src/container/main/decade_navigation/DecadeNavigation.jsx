import DecadeNavigationBtn from "../../../components/buttons/DecadeNavigationBtn";
import styles from "./DecadeNavigation.module.css";

const DecadeNavigation = () => {
  return (
    <div className={styles.DecadeNavigation}>
      <DecadeNavigationBtn title="now" />
      <DecadeNavigationBtn title="2020" />
      <DecadeNavigationBtn title="2000" />
      <DecadeNavigationBtn title="1980" />
      <DecadeNavigationBtn title="1960" />
      <DecadeNavigationBtn title="1940" />
      <DecadeNavigationBtn title="1920" />
      <DecadeNavigationBtn title="1900" />
      <DecadeNavigationBtn title="1880" />
      <DecadeNavigationBtn title="1860" />
      <DecadeNavigationBtn title="1840" />
      <DecadeNavigationBtn title="1830" />
    </div>
  );
};

export default DecadeNavigation;
