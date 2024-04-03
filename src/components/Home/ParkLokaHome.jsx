// HomeItem.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./Home.css";
import { ParkLoka1 } from "../../index";
const ParkLokaHome = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="home-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        className="home-flex"
      >
        <div className="home-text">
          <h3>Park Loka</h3>
          <h2>Najemi park loko?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="menuBtn">
            <Link to="/loka">
              <button>Razišči Več</button>
            </Link>
          </div>
        </div>
        <div className="home-image">
          <img className="image-home" src={ParkLoka1} alt="Toplar" />
        </div>
      </motion.div>
      <hr />
    </div>
  );
};
export default ParkLokaHome;
