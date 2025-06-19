import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import { motion } from "framer-motion";
import { MeniButtonAnimation } from "../animations.jsx";

function ScrollToTopButton() {
  const [showButton, setButton] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollProgress = Math.round((scrollTop * 100) / scrollHeight);

      setScrollValue(scrollProgress);

      if (scrollTop > window.innerHeight - window.innerHeight / 3) {
        setButton(true);
      } else {
        setButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check to set the correct state on page load
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      variants={MeniButtonAnimation}
      initial="hidden"
      animate={showButton ? "show" : "hidden"}
      className={showButton ? "scrollBtnSlider show" : "scrollBtnSlider hide"}
      style={{
        background: `conic-gradient(var(--mainColor) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`,
      }}
    >
      <button onClick={handleScrollToTop} className="scrollButton">
        <i class="fa-solid fa-chevron-up"></i>
      </button>
    </motion.div>
  );
}

export default ScrollToTopButton;
