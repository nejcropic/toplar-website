import React, { useState, useEffect, useRef } from "react";
import "../components/Loka/Loka.css";
import { useLocation } from "react-router-dom";
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { useTranslation } from "react-i18next";

import {
  ParkLoka10,
  ParkLoka3,
  ParkLoka5,
  ParkLoka9,
  Toplar15,
} from "../index";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import SliderLoka from "../components/SliderLoka/SliderLoka";

import {
  Kasca,
  Kozolec,
  LokaSlike,
} from "../components/SliderLoka/SliderLokaData";
function Loka() {
  const { t } = useTranslation("global");

  const [showTab, setShowTab] = useState(1);
  const elementRef = useRef(null);
  const targetPosition = window.innerHeight;

  const handleTab = (e) => {
    setShowTab(e);

    window.scrollTo({
      top: targetPosition * 2 + 40,
      behavior: "smooth",
    });
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <TopBar />
      <NavBar />
      <ScrollToTopButton />
      <Hero
        cName="hero"
        heroImg={ParkLoka3}
        title={t("navbar.park")}
        text={t("loka.text")}
        url="/onas"
        btnClass="showBtn"
        buttonText={t("hero.park")}
      />
      <div className="loka-wrapper">
        <h2>{t("loka.title")}</h2>
        <div className="loka-background"></div>
        <div className="loka-container">
          <div className="loka-card" onClick={() => handleTab(1)}>
            <img src={ParkLoka9} alt="Park Loka" />
            <div className="loka-text">
              <h3>{t("loka.kasca.title")}</h3>
            </div>
          </div>
          <div className="loka-card" onClick={() => handleTab(2)}>
            <img src={ParkLoka3} alt="Park Loka" />
            <div className="loka-text">
              <h3>{t("loka.kozolec.title")}</h3>
            </div>
          </div>
          <div className="loka-card " onClick={() => handleTab(3)}>
            <img src={ParkLoka5} alt="Park Loka" />
            <div className="loka-text">
              <h3>{t("loka.loka.title")}</h3>
            </div>
          </div>
        </div>
        <div className={showTab === 1 ? "loka-item show-item" : "loka-item"}>
          <h2>{t("loka.kasca.title")}</h2>
          <div className="loka-flex">
            <img src={ParkLoka9} alt="Park Loka" />
            <p>{t("loka.kasca.text")}</p>
          </div>
          <div className="loka-galerija">
            <p>{t("loka.gallery")}:</p>
            <SliderLoka sliderData={Kasca} />
          </div>
        </div>
        <div className={showTab === 2 ? "loka-item show-item" : "loka-item"}>
          <h2>{t("loka.kozolec.title")}</h2>
          <div className="loka-flex">
            <img src={ParkLoka3} alt="Park Loka" />
            <p>{t("loka.kozolec.text")}</p>
          </div>
          <div className="loka-galerija">
            <p>{t("loka.gallery")}:</p>
            <SliderLoka sliderData={Kozolec} />
          </div>
        </div>
        <div className={showTab === 3 ? "loka-item show-item" : "loka-item"}>
          <h2>{t("loka.loka.title")}</h2>
          <div className="loka-flex ">
            <img src={ParkLoka5} alt="Park Loka" />
            <p>{t("loka.loka.text")}</p>
          </div>
          <div className="loka-galerija">
            <p>{t("loka.gallery")}:</p>
            <SliderLoka sliderData={LokaSlike} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Loka;
