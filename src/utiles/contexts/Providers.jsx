//This is provider to wrap all providers in the app,
//and then wrap App.jsx in it.

import DataProvider from "./DataProvider";
import LanguageProvider from "./LanguageProvider";
import Hero_DataProvider from "./Hero_DataProvider";
import FallbackMessage_DataProvider from "./FallbackMessage_DataProvider";
import AboutUs_DataProvider from "./AboutUs_DataProvider";

const Providers = ({ children }) => {
  return (
    <DataProvider>
      <LanguageProvider>
        <Hero_DataProvider>
          <FallbackMessage_DataProvider>
            <AboutUs_DataProvider>{children}</AboutUs_DataProvider>
          </FallbackMessage_DataProvider>
        </Hero_DataProvider>
      </LanguageProvider>
    </DataProvider>
  );
};

export default Providers;
