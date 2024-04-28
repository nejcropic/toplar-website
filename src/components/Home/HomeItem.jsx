// HomeItem.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./Home.css";
import { useTranslation } from "react-i18next";

const HomeItem = ({ item }) => {
  const { t } = useTranslation("global");
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
          <h3>{t(item.titleKey)}</h3>
          <h2>{t(item.title2Key)}</h2>
          <p>{t(item.bodyKey)}</p>
          <div className="menuBtn">
            <Link to={item.url}>
              <button>{t(item.buttonKey)}</button>
            </Link>
          </div>
        </div>
        <div className="home-image">
          <img src={item.image} alt={t(item.titleKey)} />
        </div>
      </motion.div>
      <hr />
    </div>
  );
};

export default HomeItem;
