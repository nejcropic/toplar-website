import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SliderLoka.css";
import { motion } from "framer-motion";

/* import { sliderData, sliderDataPhone } from "./BackgroundSliderData"; */

const SliderLoka = ({ sliderData }) => {
  const [index, setIndex] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(1);
  const [dotPage, setDotPage] = useState(0);

  const dotsPerPage = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = sliderData[index].image;
    img.onload = () => {
      setAspectRatio(img.width / img.height);
    };
  }, [index, sliderData]);

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

  const goToDotPage = (page) => {
    setDotPage(page);
  };

  const totalPages = Math.ceil(sliderData.length / dotsPerPage);

  return (
    <div
      className="loka-slider-show"
      style={{ height: `${50 / aspectRatio}vw` }}
    >
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
        {dotPage > 0 && (
          <span
            className="loka-dot-control"
            onClick={() => goToDotPage(dotPage - 1)}
          >
            &lt;
          </span>
        )}
        {sliderData
          .slice(dotPage * dotsPerPage, (dotPage + 1) * dotsPerPage)
          .map((_, i) => (
            <span
              key={i + dotPage * dotsPerPage}
              className={`loka-dot ${
                i + dotPage * dotsPerPage === index ? "active" : ""
              }`}
              onClick={() => goToSlide(i + dotPage * dotsPerPage)}
            ></span>
          ))}
        {dotPage < totalPages - 1 && (
          <span
            className="loka-slider-controls"
            onClick={() => goToDotPage(dotPage + 1)}
          >
            &gt;
          </span>
        )}
      </div>
    </div>
  );
};

export default SliderLoka;
