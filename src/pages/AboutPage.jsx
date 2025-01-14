import { useContext } from "react";
import { LanguageContext } from "../utiles/contexts/LanguageProvider";
import image from "/images/ksss_flag.webp?url";
import IntroImage from "../components/ui/IntroImage";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  const { language } = useContext(LanguageContext);
  // Languge selection ability:
  const languageOption = {
    swedish: {
      title: "Om Kungliga Svenska Segel Sällskapet",
      description:
        "Kungliga Svenska Segel Sällskapet (KSSS) grundades 1830 och är Sveriges största och världens näst största segelsällskap.\n Basen i KSSS verksamhet är kappsegling, träning, läger och hamnverksamhet. Vi bedriver träning i Saltsjöbaden och i Djursholm. \n Under sommaren arrangerar vi seglarläger på Lökholmen vid Sandhamn och konfirmationsläger på Långholmen vid Ljusterö. Vi ordnar även ledarskaps- och praktikantutbildning, samt seglarskolor i Saltsjöbaden och i Djursholm.\n För vuxna erbjuder vi seglingar i Saltsjöbaden och för familjer har vi eskaderseglingar under sommaren. KSSS bedriver även hamnverksamhet på Sandhamn, Lökholmen, Telegrafholmen och i Saltsjöbaden. ",
      linkText: "Läs mer om KSSS verksamhet och medlemskap på",
      link: " vår officiella hemsida.",
    },
    english: {
      title: "About Royal Swedish Yacht Club",
      description:
        "The Royal Swedish Yacht Club (KSSS) was founded in 1830 and is Sweden's largest and the world's second largest sailing club.\n The basis of KSSS's activities is racing, training, camps and port activities. We conduct training in Saltsjöbaden and in Djursholm. \n During the summer we arrange sailing camps at Lökholmen at Sandhamn and confirmation camps at Långholmen at Ljusterö. We also arrange leadership and trainee training, as well as sailing schools in Saltsjöbaden and in Djursholm.\n For adults we offer sailing in Saltsjöbaden and for families we have squadron sailings during the summer. KSSS also conducts port activities at Sandhamn, Lökholmen, Telegrafholmen and in Saltsjöbaden.",
      linkText: "Read more about KSSS activity and membership on ",
      link: "our official website.",
    },
  };

  //Select the appropriate language content
  const { title, description, linkText, link } = languageOption[language];

  return (
    <article className={styles.AboutPage}>
      <IntroImage src={image} alt="the image of the KSSS flag" />

      <h2>{title}</h2>
      {description.split("\n").map((line, index) => (
        <h3 key={index}>{line.trim()}</h3>
      ))}

      <h3>
        {linkText}
        <a
          className={styles.AboutPage_link}
          href="https://www.ksss.se/medlem/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
      </h3>
    </article>
  );
};

export default AboutPage;
