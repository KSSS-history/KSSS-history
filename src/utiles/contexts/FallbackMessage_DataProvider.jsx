//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
//This is the data provider to fethc data for Fallback Message -> and send to FallbackMessage.jsx.
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
import { createContext, useState, useEffect } from "react";
import useContentful_fallbackMessage from "../datalayer/useContentful_fallbackMessage";

//Create the context for the context object
export const FallbackContext = createContext();

const FallbackMessage_DataProvider = ({ children }) => {
  const { getFallback } = useContentful_fallbackMessage();
  const [fallbackData, setFallbackData] = useState([]);

  useEffect(() => {
    const fetcFallbackData = async () => {
      try {
        const response = await getFallback();
        setFallbackData(response);
      } catch (err) {
        console.error("Error fetching fallback message:", err);
        setFallbackData([]);
      }
    };
    fetcFallbackData();
  }, []);

  return (
    <>
      <FallbackContext.Provider value={{ fallbackData }}>
        {children}
      </FallbackContext.Provider>
    </>
  );
};

export default FallbackMessage_DataProvider;
