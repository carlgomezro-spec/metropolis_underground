import "./Footer.css";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaGlobe
} from "react-icons/fa";

import appStoreBadge from "../../assets/appstore-badge.svg";
import googlePlayBadge from "../../assets/googleplay-badge.png";
import logo from "../../assets/logo_white_footer.png";

function Footer() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-content container">

        {/* BRAND */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="Metropolis Underground logo"
            className="footer-logo"
          />
        </div>

        {/* DOWNLOAD */}
        <div className="footer-download">
          <a href="#" className="store-link">
            <img src={appStoreBadge} alt="App Store" />
          </a>

          <a href="#" className="store-link">
            <img src={googlePlayBadge} alt="Google Play" />
          </a>
        </div>

        {/* SOCIAL + LANGUAGE */}
        <div className="footer-meta">
          <div className="footer-social">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
          </div>

          <div className="footer-language">
            <FaGlobe />
            <select
              onChange={handleLanguageChange}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        {t("rights")}
      </div>
    </footer>
  );
}

export default Footer;
