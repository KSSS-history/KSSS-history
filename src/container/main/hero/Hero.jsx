import { useContext } from "react";
import { LanguageContext } from "../../../utiles/contexts/LanguageProvider";
import ContainerStyle from "../../../components/ui/ContainerStyle";

const Hero = () => {
  const { language } = useContext(LanguageContext);

  // Languge selection ability:
  const languageOption = {
    swedish: {
      title: "KSSS Historia",
      description:
        "KSSS är Sveriges största segelsällskap och även en av världens största segelsällskap med cirka 6000 medlemmar, varav 2500 juniorer.",
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
    <>
      <ContainerStyle>
        <article>
          <h1>{title}</h1>
          <p>{description}</p>
        </article>
      </ContainerStyle>
    </>
  );
};

export default Hero;
