import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <article className={styles.Hero}>
      <h1>KSSS Historia</h1>
      {/* <h1>KSSS History</h1> */}
      <p>
        KSSS är Sveriges största båtklubb och även en av världens största
        båtklubbar med cirka 6000 medlemmar, varav 2500 juniorer.
      </p>
      {/* <p>
          KSSS is Sweden's largest and one of the world's largest yacht clubs.
          With about 6000 members, including 2500 juniors.
        </p> */}
    </article>
  );
};

export default Hero;
