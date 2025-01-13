import { createContext, useState, useEffect } from "react";

//Create the context for the context object
export const LanguageContext = createContext();

//Initialise the language choice with a follow saving to the Local Storage
const initialLanguage =
  JSON.parse(window.localStorage.getItem("language")) || "swedish";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);

  function changeLanguage(e) {
    setLanguage(e.target.value);
  }
  //Safe the language in the Local Storage
  useEffect(() => {
    window.localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
