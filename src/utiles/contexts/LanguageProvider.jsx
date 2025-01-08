import { createContext, useState } from "react";

//Create the context for the context object
export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("swedish");

  function changeLanguage(e) {
    setLanguage(e.target.value);
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
