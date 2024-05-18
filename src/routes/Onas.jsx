import React from "react";
import "../components/Onas/Onas.css";
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { useTranslation } from "react-i18next";

import { ParkLoka7, Toplar26, Toplar22, Toplar24, Toplar17 } from "../index";
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
        heroImg={Toplar26}
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
            <img src={Toplar22} alt="" />
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
            <img src={Toplar24} alt="" />
          </div>
          <div className="onas-flex reverse">
            <pre>{t("about.text3")}</pre>
            <img src={Toplar17} alt="" />
          </div>
          <div className="onas-flex">
            <p>{t("about.text4")}</p>
            <img src={ParkLoka7} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Onas;
