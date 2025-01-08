import { useContext } from "react";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiEnvelope,
  PiPhone,
} from "react-icons/pi";
import { LanguageContext } from "../../utiles/contexts/LanguageProvider";
import styles from "./Footer.module.css";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  // Languge selection ability:
  const languageOption = {
    swedish: {
      address: "Adress:",
    },
    english: {
      address: "Address:",
    },
  };

  //Select the appropriate language content
  const { address } = languageOption[language];

  return (
    <footer className={styles.Footer}>
      <strong>{address}</strong>
      <a
        href="https://www.google.com/maps/@59.2782943,18.3157499,3a,75y,359.9h,90t/data=!3m7!1e1!3m5!1sXERvND-nzQ9I5NZ9T6VbpQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DXERvND-nzQ9I5NZ9T6VbpQ%26yaw%3D359.8953!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Hotellvägen 9, 133 35 Saltsjöbaden</p>
      </a>
      <nav>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/KSSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiFacebookLogo size="1.75em" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ksss_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiInstagramLogo size="1.75em" />
            </a>
          </li>
          <li>
            <a
              href="mailto:ksss@ksss.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiEnvelope size="1.75em" />
            </a>
          </li>
          <li>
            <a
              href="tel:+46855616680"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiPhone size="1.75em" />
            </a>
          </li>
        </ul>
      </nav>
      <small>copyright@2024</small>
    </footer>
  );
};

export default Footer;
