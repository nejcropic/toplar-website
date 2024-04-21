import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SliderLoka.css";
import { motion } from "framer-motion";

/* import { sliderData, sliderDataPhone } from "./BackgroundSliderData"; */

const SliderLoka = ({ sliderData }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  const goToNext = () => {
    setIndex((currentIndex) => (currentIndex + 1) % sliderData.length);
  };

  const goToPrevious = () => {
    setIndex(
      (currentIndex) =>
        (currentIndex - 1 + sliderData.length) % sliderData.length
    );
  };

  return (
    <div className="loka-slider-show">
      {sliderData.map((slide, i) => (
        <motion.img
          key={i}
          src={slide.image}
          alt={`Slide ${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === i ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="loka-image"
        />
      ))}
      {/* <div className="loka-slider-controls">
        <button onClick={goToPrevious}>&lt;</button>
        <button onClick={goToNext}>&gt;</button>
      </div> */}
      <div className="loka-slider-dots">
        {sliderData.map((_, i) => (
          <span
            key={i}
            className={`loka-dot ${i === index ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
      {/* 
      <div className="slider-text-container">
        <p>Dobrodošli na Dolenjskem!</p>
        <h2>En kratek stavek..</h2>
      </div>
      <div className="menuBtnSlider">
        <Link to="/meni">
          <button>CENIK</button>
        </Link>
      </div> */}
    </div>
  );
};

export default SliderLoka;
