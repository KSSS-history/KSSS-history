//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//This is the data provider to fethc data for About Us Page -> and send it to AboutPage.jsx /child/.
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

import { createContext, useState, useEffect } from "react";
import useContentful_aboutUs from "../datalayer/useContentful_aboutUs";

//Create the context for the context object
export const AboutUsContext = createContext();

const AboutUs_DataProvider = ({ children }) => {
  const { getAboutUs } = useContentful_aboutUs();
  const [aboutUsData, setAboutUsData] = useState([]);

  useEffect(() => {
    const fetchAboutUsData = async () => {
      try {
        const response = await getAboutUs();
        setAboutUsData(response);
      } catch (err) {
        console.error("Error fetching 'about us' data:", err);
        setAboutUsData([]);
      }
    };
    fetchAboutUsData();
    console.log("ABOUT US IN PROVIDER", aboutUsData);
  }, []);

  return (
    <>
      <AboutUsContext.Provider value={{ aboutUsData }}>
        {children}
      </AboutUsContext.Provider>
    </>
  );
};

export default AboutUs_DataProvider;
