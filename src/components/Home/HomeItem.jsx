import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./Home.css";
import { useTranslation } from "react-i18next";
import { Srce } from "../..";

const HomeItem = ({ item, index }) => {
  const { t } = useTranslation("global");
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const translatedText = t(item.bodyKey);
  const text = translatedText.split(" ");

  return (
    <div className="home-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0.5, scale: 0.9, x: index % 2 === 0 ? 50 : -50 }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 0.5, // Animation duration
          },
        }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        className={item.divclass}
      >
        <div className="home-text">
          <h3>{t(item.titleKey)}</h3>
          <h2>{t(item.title2Key)}</h2>
          <div className="text-container">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{
                  duration: 0.25,
                  delay: inView ? i / 30 : 0,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </div>
          <div className="menuBtn">
            <Link to={item.url}>
              <button>{t(item.buttonKey)}</button>
            </Link>
          </div>
        </div>
        <motion.div
          className="home-image"
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: 1,
            repeatDelay: 1,
          }}
        >
          <img src={item.image} alt={t(item.titleKey)} />
        </motion.div>
      </motion.div>
      <div className="flex-container-home">
        <div className="home-lines">
          <hr className="home-line-wide" />
        </div>
        <img src={Srce} alt="" className="home-heart-image-meni" />
        <div className="home-lines">
          <hr className="home-line-wide" />
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
