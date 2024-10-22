import styles from "./EventSection.module.css";

const EventSection = () => {
  return (
    <section className={styles.section}>
      <div>
        <div>2020</div>
        <h2>Heading</h2>
      </div>
      <h3>Intro text</h3>
      <button>read more</button>
      <img className={styles.section_image} src="" alt="" />
    </section>
  );
};

export default EventSection;
