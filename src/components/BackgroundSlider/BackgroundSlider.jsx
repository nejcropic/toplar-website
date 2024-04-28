import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BackgroundSlider.css";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

/* import { sliderData, sliderDataPhone } from "./BackgroundSliderData"; */

const BackgroundSlider = ({ sliderData, sliderDataPhone }) => {
  const { t } = useTranslation("global");

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % getData().length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const getData = () =>
    window.innerWidth <= 1000 ? sliderDataPhone : sliderData;

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  const goToNext = () => {
    setIndex((currentIndex) => (currentIndex + 1) % getData().length);
  };

  const goToPrevious = () => {
    setIndex(
      (currentIndex) => (currentIndex - 1 + getData().length) % getData().length
    );
  };

  return (
    <div className="slider-show">
      {getData().map((slide, i) => (
        <motion.img
          key={i}
          src={slide.image}
          alt={`Slide ${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === i ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="image"
        />
      ))}
      <div className="slider-controls">
        <button onClick={goToPrevious}>&lt;</button>
        <button onClick={goToNext}>&gt;</button>
      </div>
      <div className="slider-dots">
        {getData().map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
      <div className="slider-text-container">
        <p>{t("backgroundslider.sliderp")}</p>
        <h2>{t("backgroundslider.sliderh")}</h2>
      </div>
      <div className="menuBtnSlider">
        <Link to="/meni">
          <button>{t("backgroundslider.menu")}</button>
        </Link>
      </div>
    </div>
  );
};

export default BackgroundSlider;
