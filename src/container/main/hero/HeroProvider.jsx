//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//This is the data provider for the Hero Section fetched from Contentful.
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

import { useState, useEffect } from "react";
import useContentful_hero from "../../../utiles/datalayer/useContentful_hero";
import Hero from "./Hero.jsx";

const HeroProvider = () => {
  const { getHero } = useContentful_hero();
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    const fetctHeroData = async () => {
      try {
        const response = await getHero();
        console.log("Fetched Hero Data:", response); // Check what is fetched
        setHeroData(response);
      } catch (err) {
        console.error("Error fetching Hero Data:", err);
        setHeroData([]);
      }
    };
    fetctHeroData();
  }, []);

  return (
    <>
      {heroData.map((hero) => (
        <Hero key={hero.id} hero={hero} />
      ))}
    </>
  );
};

export default HeroProvider;
