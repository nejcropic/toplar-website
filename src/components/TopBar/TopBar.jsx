import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";
import { useTranslation } from "react-i18next";

function TopBar() {
  const { t, i18n } = useTranslation("global");
  const [showEN, setshowEN] = useState(false);
  const [showSI, setshowSI] = useState(true);
  const [showDE, setshowDE] = useState(false);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    if (lang === "en") {
      setshowEN(true);
      setshowSI(false);
      setshowDE(false);
    } else if (lang === "si") {
      setshowEN(false);
      setshowSI(true);
      setshowDE(false);
    } else {
      setshowEN(false);
      setshowSI(false);
      setshowDE(true);
    }
  };

  const handleTab = () => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 0);
  };

  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="languages">
          <div className="languages-container">
            <button
              className={showSI ? "hideFlag " : " "}
              onClick={() => handleChangeLanguage("si")}
            >
              <span class="fi fi-si"></span>
            </button>
            <button
              className={showEN ? "hideFlag " : " "}
              onClick={() => handleChangeLanguage("en")}
            >
              <span class="fi fi-gb"></span>
            </button>

            <button
              className={showDE ? "hideFlag " : " "}
              onClick={() => handleChangeLanguage("de")}
            >
              <span class="fi fi-de"></span>
            </button>
          </div>
        </div>
        <Link className="topbar-item odpiralni" onClick={handleTab}>
          <div className="icon">
            <i className="fas fa-clock"></i>
          </div>
          <span className="span">{t("topbar.opentime")}</span>
        </Link>
        <Link to="tel:017886833" className="topbar-item">
          <div className="icon">
            <i className="fas fa-phone"></i>
          </div>
          <span className="span">01-7886-833</span>
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
<a href="tel:017886833">
  <p>01 788 68 33</p>
</a>;
