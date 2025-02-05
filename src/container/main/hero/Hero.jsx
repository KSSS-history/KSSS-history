import { useContext, useMemo } from "react";
import { LanguageContext } from "../../../utiles/contexts/LanguageProvider";
import ContainerStyle from "../../../components/ui/ContainerStyle";

// the documentToReactComponents helps to display the reach text from Contentful efficiently.
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

//- - - - - - - - - - - - - - - - - - - - - - - - - - -
//Props come from the parent - HeroProvider.jsx
//- - - - - - - - - - - - - - - - - - - - - - - - - - -
const Hero = ({ hero }) => {
  const { language } = useContext(LanguageContext);

  // Languge selection ability:
  const languageOption = {
    swedish: {
      title: hero.titleSv,
      description: hero.descriptionSv,
    },
    english: {
      title: hero.titleEn,
      description: hero.descriptionEn,
    },
  };

  //Select the appropriate language content
  const { title, description } = languageOption[language];
  return (
    <>
      <ContainerStyle>
        <article>
          <h1>{title}</h1>
          {/* The reach text from Contentful MUST renders inside a <div>, 
                because text retrieves as separate <p> elements and it is prohibited to nestle <p> inside <p>. */}
          <div>{documentToReactComponents(description)}</div>
        </article>
      </ContainerStyle>
    </>
  );
};

export default Hero;
