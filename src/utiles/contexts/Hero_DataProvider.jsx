//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//This is the data provider to fethc data for HeroProvider -> and send to Hero Section.
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

import { createContext, useState, useEffect } from "react";
import useContentful_hero from "../datalayer/useContentful_hero";

//Create the context for the context object
export const HeroContext = createContext();

const Hero_DataProvider = ({ children }) => {
  const { getHero } = useContentful_hero();
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await getHero();
        console.log("Fetched Hero Data:", response); // Check what is fetched
        setHeroData(response);
      } catch (err) {
        console.error("Error fetching Hero Data:", err);
        setHeroData([]);
      }
    };
    fetchHeroData();
  }, []);

  return (
    <>
      <HeroContext.Provider value={{ heroData }}>
        {children}
      </HeroContext.Provider>
    </>
  );
};

export default Hero_DataProvider;

{
  /* {heroData.map((hero) => (
  <Hero key={hero.id} hero={hero} />
))} */
}
