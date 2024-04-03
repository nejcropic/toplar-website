import React, { useState, useEffect } from "react";
import "./ScrollDownButton.css";
import { motion } from "framer-motion";
import { MeniButtonAnimation } from "../animations.jsx";

function ScrollDownButton() {
  const targetPosition = window.innerHeight;
  const transitionValues = {
    duration: 0.8,
    repeat: Infinity,
    repeatType: "reverse", // Used to be 'yoyo' in some contexts, 'reverse' is more commonly understood
    ease: "easeOut",
  };
  const handleScrollDown = () => {
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  return (
    <motion.div
      variants={MeniButtonAnimation}
      initial="show"
      animate="show"
      className="scrollDownBtnSlider"
    >
      <motion.button
        transition={{ transitionValues }}
        animate={{
          y: ["0rem", "-2rem", "0rem"],
        }}
        onClick={handleScrollDown}
      >
        <i class="fa-solid fa-chevron-down"></i>
      </motion.button>
    </motion.div>
  );
}

export default ScrollDownButton;
