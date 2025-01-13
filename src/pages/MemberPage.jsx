import { useContext } from "react";
import { LanguageContext } from "../utiles/contexts/LanguageProvider";
import image from "../assets/images/become_a_member.webp";
import IntroImage from "../components/ui/IntroImage";
import styles from "./MemberPage.module.css";

const MemberPage = () => {
  const { language } = useContext(LanguageContext);
  // Languge selection ability:
  const languageOption = {
    swedish: {
      title: "Bli medlem",
      description:
        "Basen i KSSS verksamhet är kappsegling, träning, läger och hamnverksamhet. Vi bedriver träning i Saltsjöbaden och i Djursholm. \n Under sommaren arrangerar vi seglarläger på Lökholmen vid Sandhamn och konfirmationsläger på Långholmen vid Ljusterö. Vi ordnar även ledarskaps- och praktikantutbildning, samt seglarskolor i Saltsjöbaden och i Djursholm.\n För vuxna erbjuder vi seglingar i Saltsjöbaden och för familjer har vi eskaderseglingar under sommaren. KSSS bedriver även hamnverksamhet på Sandhamn, Lökholmen, Telegrafholmen och i Saltsjöbaden. ",
      linkText: "Läs mer om KSSS medlemskap på",
      link: " vår officiella hemsida.",
    },
    english: {
      title: "Become a member",
      description:
        "The basis of KSSS's activities is racing, training, camps and port activities. We conduct training in Saltsjöbaden and in Djursholm. \n During the summer we arrange sailing camps at Lökholmen at Sandhamn and confirmation camps at Långholmen at Ljusterö. We also arrange leadership and trainee training, as well as sailing schools in Saltsjöbaden and in Djursholm.\n For adults we offer sailing in Saltsjöbaden and for families we have squadron sailings during the summer. KSSS also conducts port activities at Sandhamn, Lökholmen, Telegrafholmen and in Saltsjöbaden.",
      linkText: "Read more about KSSS membership on ",
      link: "our official website.",
    },
  };

  //Select the appropriate language content
  const { title, description, linkText, link } = languageOption[language];

  return (
    <article className={styles.MemberPage}>
      <IntroImage src={image} alt="the image of the KSSS flag" />

      <h2>{title}</h2>
      {description.split("\n").map((line, index) => (
        <h3 key={index}>{line.trim()}</h3>
      ))}

      <h3>
        {linkText}
        <a
          className={styles.MemberPage_link}
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

export default MemberPage;
