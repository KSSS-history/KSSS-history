//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//This is the functional component that takes data from Hero_DataProvider,
// and send it to Hero section as the props.
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

import { useContext } from "react";
import { HeroContext } from "../../../utiles/contexts/Hero_DataProvider.jsx";

import Hero from "./Hero.jsx";

const HeroProvider = () => {
  const { heroData } = useContext(HeroContext);

  return (
    <>
      {heroData.map((hero) => (
        <Hero key={hero.id} hero={hero} />
      ))}
    </>
  );
};

export default HeroProvider;
