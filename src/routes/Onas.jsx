import React from "react";
import "../components/Onas/Onas.css";
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { useTranslation } from "react-i18next";

import {
  ParkLoka7,
  Toplar26,
  Toplar22,
  Toplar24,
  Toplar17,
  Toplar29,
} from "../index";
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
        <div className="onas-flex first-image">
          <div className="onas-shadow">
            <p>
              {t("about.text1")}
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className="onas-flex  second-image">
          <div className="onas-shadow">
            <p>{t("about.text2")}</p>
          </div>
        </div>
        <div className="onas-flex  third-image">
          <div className="onas-shadow">
            <pre>{t("about.text3")}</pre>
          </div>
        </div>
        <div className="onas-flex forth-image">
          <div className="onas-shadow">
            <p>{t("about.text4")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Onas;
