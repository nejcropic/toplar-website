import React, { useState } from "react";
import "../components/Galerija/Galerija.css";
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

import { Toplar13 } from "../index";
import { GalerijaItems } from "../components/Galerija/GalerijaItems";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

function Galerija() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(GalerijaItems.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === GalerijaItems.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      // Checks if the click is directly on the overlay, not on child elements
      handleCloseModal();
    }
  };

  return (
    <>
      <TopBar />
      <NavBar />
      <ScrollToTopButton />
      <Hero
        cName="hero"
        heroImg={Toplar13}
        title="Galerija"
        subtitle="Ogled prekrasne galerije!"
        url="/galerija"
        btnClass="showBtn"
        buttonText="Poglej več"
      />
      <div className="galerija-wrapper">
        {openModal && (
          <div className="slider-container" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {/* Close, Previous, and Next buttons here */}
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
              {/* Image Display */}
              <div className="fullScreenImage">
                <img
                  src={GalerijaItems[slideNumber].image}
                  alt={GalerijaItems[slideNumber].title}
                />
              </div>
            </div>
          </div>
        )}

        <div className="galerija-container">
          {GalerijaItems.map((item, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={item.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Galerija;
