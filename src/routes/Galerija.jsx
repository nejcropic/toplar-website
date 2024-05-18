import React, { useState } from "react";
import "../components/Galerija/Galerija.css";
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { useTranslation } from "react-i18next";

import { Toplar13 } from "../index";
import {
  GalerijaItemsT,
  GalerijaItemsP,
  GalerijaItemsH,
} from "../components/Galerija/GalerijaItems";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

function Galerija() {
  const { t } = useTranslation("global");

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index, offset) => {
    setSlideNumber(index + offset);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(
          GalerijaItemsT.length +
            GalerijaItemsP.length +
            GalerijaItemsH.length -
            1
        )
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 ===
    GalerijaItemsT.length + GalerijaItemsP.length + GalerijaItemsH.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const renderGalerijaItems = (items, offset) => {
    return items.map((item, index) => (
      <div
        className="single"
        key={index}
        onClick={() => handleOpenModal(index, offset)}
      >
        <img src={item.image} alt={item.title} />
      </div>
    ));
  };

  const combinedItems = [
    ...GalerijaItemsT,
    ...GalerijaItemsP,
    ...GalerijaItemsH,
  ];
  const offsetT = 0;
  const offsetP = GalerijaItemsT.length;
  const offsetH = GalerijaItemsT.length + GalerijaItemsP.length;

  return (
    <>
      <TopBar />
      <NavBar />
      <ScrollToTopButton />
      <Hero
        cName="hero"
        heroImg={Toplar13}
        title={t("navbar.gallery")}
        subtitle="Ogled prekrasne galerije!"
        url="/galerija"
        btnClass="showBtn"
        buttonText={t("hero.gallery")}
      />
      <div className="galerija-wrapper">
        {openModal && (
          <div className="slider-container" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <i
                className="fas fa-chevron-left btnPrev"
                onClick={prevSlide}
              ></i>
              <i
                className="fas fa-chevron-right btnNext"
                onClick={nextSlide}
              ></i>
              <i
                className="fas fa-times btnClose"
                onClick={handleCloseModal}
              ></i>
              <div className="fullScreenImage">
                <img
                  src={combinedItems[slideNumber].image}
                  alt={combinedItems[slideNumber].title}
                />
              </div>
            </div>
          </div>
        )}

        <h2>{t("gallery.text1")}</h2>
        <div className="galerija-container">
          {renderGalerijaItems(GalerijaItemsT, offsetT)}
        </div>

        <h2>{t("gallery.text2")}</h2>
        <div className="galerija-container">
          {renderGalerijaItems(GalerijaItemsP, offsetP)}
        </div>

        <h2>{t("gallery.text3")}</h2>
        <div className="galerija-container">
          {renderGalerijaItems(GalerijaItemsH, offsetH)}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Galerija;
