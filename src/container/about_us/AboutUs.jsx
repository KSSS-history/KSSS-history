import { useContext } from "react";
import { LanguageContext } from "../../utiles/contexts/LanguageProvider";
import IntroImage from "../../components/ui/IntroImage";
import ContainerStyle from "../../components/ui/ContainerStyle";
import ReachTextStyle from "../../components/ui/ReachTextStyle";
import richTextRenderOptions from "../../utiles/helpers/richTextRenderOptions";

// the documentToReactComponents helps to display the reach text from Contentful efficiently.
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const AboutUs = ({ about }) => {
  const { language } = useContext(LanguageContext);
  console.log("About Data got as props to the page", about);

  // Languge selection ability:
  const languageOption = {
    swedish: {
      title: about.titleSv,
      description: about.descriptionSv,
    },
    english: {
      title: about.titleEn,
      description: about.descriptionEn,
    },
  };

  //Select the appropriate language content
  const { title, description } = languageOption[language];

  return (
    <>
      <ContainerStyle>
        <article>
          {about.aboutUsImage?.file?.url && (
            <IntroImage
              src={about.aboutUsImage.file.url}
              alt={about.aboutUsImage.title || "The thematic image of KSSS"}
            />
          )}
          <h2>{title}</h2>
          <ReachTextStyle>
            {/* The reach text from Contentful MUST renders inside a <div>, 
                  because text retrieves as separate <p> elements and it is prohibited to nestle <p> inside <p>. */}
            <div>
              {documentToReactComponents(description, richTextRenderOptions)}
            </div>
          </ReachTextStyle>
        </article>
      </ContainerStyle>
    </>
  );
};

export default AboutUs;
