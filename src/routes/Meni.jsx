import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../components/Meni/Meni.css";
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

import { motion } from "framer-motion";
import { mainAnimation, navAnimationPhone } from "../components/animations";
import { useTranslation } from "react-i18next";

import {
  Pizze,
  Burgerji,
  Dodatki,
  DrugaPonudba,
  Alergeni,
} from "../components/Meni/MeniItems.jsx";
import {
  Toplar6,
  Hrana1,
  Hrana2,
  Hrana3,
  ToplarVideo,
  Hrana6,
  Toplar5,
  Srce,
  Hrana7,
  Hrana8,
} from "../index";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton.jsx";

function Meni() {
  const { t } = useTranslation("global");

  const [showTab, setShowTab] = useState(1);
  const elementRef = useRef(null);
  const targetPosition = window.innerHeight;

  const handleTab = (e) => {
    setShowTab(e);

    setTimeout(() => {
      if (elementRef.current) {
        window.scrollTo({
          top: targetPosition + 40,
          behavior: "smooth", // Smooth scroll
        });
      }
    }, 0);
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
        cName="hero-mid"
        heroImg={Toplar5}
        title={t("navbar.menu")}
        url="/meni"
        btnClass="hideBtn"
        buttonText="__"
      />
      <motion.div
        variants={mainAnimation}
        initial="hidden"
        animate="show"
        className="buttons-container"
      >
        <nav>
          <ul>
            <li>
              <button
                className={
                  showTab === 1 ? "buttons-choose active" : "buttons-choose"
                }
                onClick={() => handleTab(1)}
              >
                <i class="fa-solid fa-pizza-slice"></i>
                {t("meni.buttons.pizze")}
              </button>
            </li>
            <li>
              <button
                className={
                  showTab === 2 ? "buttons-choose active" : "buttons-choose"
                }
                onClick={() => handleTab(2)}
              >
                <i class="fa-solid fa-burger"></i>
                {t("meni.buttons.burgers")}
              </button>
            </li>
            <li>
              <button
                className={
                  showTab === 3 ? "buttons-choose active" : "buttons-choose"
                }
                onClick={() => handleTab(3)}
              >
                <i class="fa-solid fa-martini-glass"></i>
                {t("meni.buttons.drinks")}
              </button>
            </li>
            {/* <li>
              <button
                className={
                  showTab === 4 ? "buttons-choose active" : "buttons-choose"
                }
                onClick={() => handleTab(4)}
              >
                <i class="fa-solid fa-cubes-stacked"></i>
                {t("meni.buttons.extras")}
              </button>
            </li> */}
          </ul>
        </nav>
      </motion.div>
      <div className="meni-wrapper">
        {/* pizze */}
        <motion.div
          variants={navAnimationPhone}
          initial="hidden"
          animate="show"
          className={showTab === 1 ? "meni-item show" : "meni-item"}
        >
          <div className="meni-flex">
            <h1>{t("meni.buttons.pizze")}</h1>
            <div className="meni-velikosti-left">
              <div className="lines">
                <hr className="line-left" />
                <hr className="line-right" />
              </div>
              <img src={Srce} alt="" className="heart-image-meni" />
              <div className="lines">
                <hr className="line-right" />
                <hr className="line-left" />
              </div>
            </div>
            <div className="meni-divide">
              <div className="meni-pizza">
                <div className="meni-velikosti-left">
                  <hr className="pizza-lines" />
                </div>
                <div className="meni-velikosti">
                  <h2>{t("meni.pizze.size1")}</h2>
                  <h2>{t("meni.pizze.size2")}</h2>
                </div>
              </div>
              <div className="meni-pizza show-pizza">
                <div className="meni-velikosti-left">
                  <hr className="pizza-lines" />
                </div>
                <div className="meni-velikosti">
                  <h2>{t("meni.pizze.size1")}</h2>
                  <h2>{t("meni.pizze.size2")}</h2>
                </div>
              </div>
            </div>
            <div className="meni-divide">
              {Pizze.map((item, index) => {
                return (
                  <div className="meni-content" key={index}>
                    <div className="meni-content-burger">
                      <div className="meni-title">
                        <h3>{t(item.title)}</h3>
                        {/* <h4>{item.alergeni}</h4> */}
                      </div>
                      <div className=" pizza-line">
                        <hr />
                      </div>
                      <div className="meni-cena pizza-cena">
                        <h3>{item.cenaMala}€</h3>
                      </div>
                      <div className="meni-cena pizza-cena">
                        <h3>{item.cenaVelika}€</h3>
                      </div>
                    </div>
                    <p>{t(item.sestavine)}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="image-meni">
            <video
              autoPlay
              loop
              muted
              src={ToplarVideo}
              alt=""
              className="image-meni-sub"
            />
          </div>
          <div className="image-meni">
            <img src={Hrana8} alt="" className="image-meni-sub" />
          </div>
        </motion.div>

        <hr
          className={showTab === 1 ? "meni-breakline show" : "meni-breakline"}
        />
        {/* burgerji */}
        <div
          ref={elementRef}
          className={showTab === 2 ? "meni-item show" : "meni-item"}
        >
          <div className="meni-flex">
            <h1>Burgerji</h1>
            <div className="meni-velikosti-left">
              <div className="lines">
                <hr className="line-left" />
                <hr className="line-right" />
              </div>
              <img src={Srce} alt="" className="heart-image-meni" />
              <div className="lines">
                <hr className="line-right" />
                <hr className="line-left" />
              </div>
            </div>
            <div className="meni-divide">
              {Burgerji.map((item, index) => {
                return (
                  <div className="meni-content" key={index}>
                    <div className="meni-content-burger">
                      <div className="meni-title">
                        <h3>{t(item.title)}</h3>
                        {/* 
                        <h4>{item.alergeni}</h4> */}
                      </div>
                      <div className="meni-line">
                        <hr />
                      </div>
                      <div className="meni-cena">
                        <h3>{item.cena}€</h3>
                      </div>
                    </div>
                    <p>{t(item.sestavine)}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="image-meni">
            <img src={Hrana1} alt="" className="image-meni-sub" />
          </div>
        </div>

        <hr
          className={showTab === 2 ? "meni-breakline show" : "meni-breakline"}
        />

        <div className={showTab === 3 ? "meni-item show" : "meni-item"}>
          <div className="meni-flex">
            <h1>Druga ponudba</h1>
            <div className="meni-velikosti-left">
              <div className="lines">
                <hr className="line-left" />
                <hr className="line-right" />
              </div>
              <img src={Srce} alt="" className="heart-image-meni" />
              <div className="lines">
                <hr className="line-right" />
                <hr className="line-left" />
              </div>
            </div>
            <div className="meni-divide">
              {DrugaPonudba.map((item, index) => {
                return (
                  <div className="meni-content" key={index}>
                    <div className="meni-content-burger">
                      <div className="meni-title">
                        <h3>{t(item.title)}</h3>
                        {/* 
                        <h4>{item.alergeni}</h4> */}
                      </div>
                      <div className="meni-line">
                        <hr />
                      </div>
                      <div className="meni-cena">
                        <h3>{item.cena}€</h3>
                      </div>
                    </div>
                    <p>{t(item.sestavine)}</p>
                  </div>
                );
              })}
            </div>
            <hr
              className={
                showTab === 3 ? "meni-breakline show" : "meni-breakline"
              }
            />
            <h1>Dodatki</h1>
            <div className="meni-velikosti-left">
              <hr />
              <img src={Srce} alt="" className="heart-image-meni" />
              <hr />
            </div>
            <div className="meni-divide">
              {Dodatki.map((item, index) => {
                return (
                  <div className="meni-content-up" key={index}>
                    <div className="meni-title">
                      <h3>
                        {item.title} {item.alergeni}
                      </h3>
                    </div>
                    <div className="meni-line">
                      <hr />
                    </div>
                    <div className="meni-cena">
                      <h4>{item.kolicina}</h4>
                      <h3>{item.cena}€</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="image-meni">
            <img src={Hrana6} alt="" className="image-meni-sub" />
          </div>
        </div>

        <hr
          className={showTab === 3 ? "meni-breakline show" : "meni-breakline"}
        />

        {/* alergeni */}
        <div className={showTab === 4 ? "meni-item show" : "meni-item"}>
          <div className="image-meni">
            <img src={Hrana3} alt="" className="image-meni-sub" />
          </div>
          <div className="meni-flex">
            <h1>Dodatki</h1>
            <div className="meni-divide">
              {Dodatki.map((item, index) => {
                return (
                  <div className="meni-content-up" key={index}>
                    <div className="meni-title">
                      <h3>
                        {item.title} {/* {item.alergeni} */}
                      </h3>
                    </div>
                    <div className="meni-line">
                      <hr />
                    </div>
                    <div className="meni-cena">
                      <h3>{item.cena}€</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr
          className={showTab === 4 ? "meni-breakline show" : "meni-breakline"}
        />
      </div>
      <div className="meni-wrapper alergeni-wrapper alergeni">
        <h3>Alergeni</h3>
        <div className="meni-item show">
          <div className="meni-flex">
            <div className="meni-divide">
              {Alergeni.map((item, index) => {
                return (
                  <div
                    className="meni-content alergeni alergeni-content"
                    key={index}
                  >
                    <div className="meni-title">
                      <h4>
                        {item.številka}. {item.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className="meni-breakline show" />
      </div>

      <Footer />
    </>
  );
}

export default Meni;
