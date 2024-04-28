import React from "react";
import "../components/Onas/Onas.css";
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { useTranslation } from "react-i18next";

import { ParkLoka1, Toplar15, Toplar_galerija10, Toplar_temna } from "../index";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

function Onas() {
  const { t } = useTranslation("global");

  return (
    <>
      <TopBar />
      <NavBar />
      <ScrollToTopButton />
      <Hero
        cName="hero"
        heroImg={Toplar15}
        title={t("navbar.about")}
        subtitle="Kratek opis .."
        url="/onas"
        btnClass="showBtn"
        buttonText={t("hero.about")}
      />
      <div className="onas-wrapper">
        <div className="onas-container">
          <div className="onas-flex reverse">
            <p>
              {t("about.text1")}
              <br />
              <br />
            </p>
            <img src={Toplar_temna} alt="" />
          </div>
          {/* <div className="onas-flex">
            <p>
              <br />
              <br />
              <br />
              <br />
              {t("about.text2")}
              <br />
              <br />
              <br />
            </p>
          </div> */}
          <div className="onas-flex">
            <p>{t("about.text2")}</p>
            <img src={Toplar_galerija10} alt="" />
          </div>
          <div className="onas-flex reverse">
            <p>{t("about.text3")}</p>
            <img src={ParkLoka1} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Onas;
