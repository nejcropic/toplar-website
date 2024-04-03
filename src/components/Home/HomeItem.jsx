// HomeItem.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./Home.css";

const HomeItem = ({ item }) => {
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
          <h3>{item.title}</h3>
          <h2>{item.title2}</h2>
          <p>{item.body}</p>
          <div className="menuBtn">
            <Link to="/meni">
              <button>{item.gumb}</button>
            </Link>
          </div>
        </div>
        <div className="home-image">
          <img src={item.image} alt="Toplar" />
        </div>
      </motion.div>
      <hr />
    </div>
  );
};

export default HomeItem;
