//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//This is the functional component that takes data from AboutUs_DataProvider,
// and send it to AboutUs dump-component as the props.
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

import { useContext } from "react";
import { AboutUsContext } from "../../../utiles/contexts/AboutUs_DataProvider";
import AboutUs from "../AboutUs";

const AboutProvider = () => {
  const { aboutUsData } = useContext(AboutUsContext);
  console.log("ABOUT US DATA SENT FROM PROVIDER", aboutUsData);

  return (
    <>
      {aboutUsData.map((about) => (
        <AboutUs key={about.id} about={about} />
      ))}
    </>
  );
};

export default AboutProvider;
