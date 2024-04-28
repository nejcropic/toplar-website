// NavBar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { NavBarItems } from "./NavBarItems";
import { navAnimation, navAnimationPhone } from "../animations";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t, i18n } = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [navState, setNavState] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const changeNavState = () => {
    if (window.scrollY < 150) {
      setNavState(false);
      setShowBorder(false);
    } else if (window.scrollY < lastScrollY) {
      setNavState(false);
      setShowBorder(true);
    } else {
      setNavState(true);
      setShowBorder(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    const handleScroll = () => changeNavState();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const showNavBar = () => setNavMenu(!navMenu);

  return (
    <>
      <motion.div
        variants={navAnimationPhone}
        initial="hidden"
        animate="show"
        className="menu-title"
      >
        <Link to="/">
          <h2 className={navMenu ? "menu-titles show " : "menu-titles "}>
            {t("navbar.pizzerija-naslov")} Toplar
          </h2>
        </Link>
      </motion.div>
      <motion.nav
        variants={navAnimation}
        initial="hidden"
        animate="show"
        className={`${navState ? "nav-group nav-bg" : "nav-group"} ${
          showBorder ? "" : "no-border"
        }`}
      >
        <div className="menu-icons " onClick={showNavBar}>
          <i className={navMenu ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className={navMenu ? "nav-menu active" : "nav-menu"}>
          {NavBarItems.map((item, index) => (
            <Link
              key={index}
              className={item.cName}
              to={item.url}
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                showNavBar();
              }}
            >
              {t(`navbar.${item.key}`)}
            </Link>
          ))}
        </div>
      </motion.nav>{" "}
      <div
        className={`${
          navState ? "lokaNav-container nav-bg" : "lokaNav-container"
        } ${showBorder ? "" : "no-border"}`}
      >
        <Link className="nav-links" to="/loka">
          Park Loka
        </Link>
      </div>
    </>
  );
}

export default NavBar;
