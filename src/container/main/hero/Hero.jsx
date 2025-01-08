import { useContext } from "react";
import { LanguageContext } from "../../../utiles/contexts/LanguageProvider";

import styles from "./Hero.module.css";

const Hero = () => {
  // Languge selection ability:
  const { language } = useContext(LanguageContext);

  const languageOption = {
    swedish: {
      title: "KSSS Historia",
      description:
        "KSSS är Sveriges största båtklubb och även en av världens största båtklubbar med cirka 6000 medlemmar, varav 2500 juniorer.",
    },
    english: {
      title: "KSSS History",
      description:
        "KSSS is Sweden's largest and one of the world's largest yacht clubs with about 6000 members, including 2500 juniors.",
    },
  };

  //Select the appropriate language content
  const { title, description } = languageOption[language];
  return (
    <article className={styles.Hero}>
      <h1>{title}</h1>
      <p>{description}</p>
    </article>
  );
};

export default Hero;
