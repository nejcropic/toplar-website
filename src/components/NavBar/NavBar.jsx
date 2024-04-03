import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { NavBarItems } from "./NavBarItems.jsx";
/* import { Toplar_logo } from "../../index.js"; */
import { navAnimation, navAnimationPhone } from "../animations.jsx";
import { motion } from "framer-motion";

function NavBar() {
  const [navState, setNavState] = useState(false);
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

  window.addEventListener("scroll", changeNavState);

  const [navMenu, setNavMenu] = useState(false);
  const showNavBar = () => setNavMenu(!navMenu);

  const [showBorder, setShowBorder] = useState(false);

  return (
    <>
      <motion.div
        variants={navAnimationPhone}
        initial="hidden"
        animate="show"
        className="menu-title"
      >
        {/* <img src={Toplar_logo} alt="" /> */}
        <Link to="/">
          <h2 className={navMenu ? "menu-titles show " : "menu-titles "}>
            PIZZERIJA TOPLAR
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

        <div className={navMenu ? "nav-menu active" : "nav-menu "}>
          {NavBarItems.map((item, index) => {
            return (
              <div key={index}>
                {/*<hr></hr>
                 */}
                <Link
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
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      </motion.nav>
      <div className="lokaNav-container">
        <Link className="nav-links" to="/loka">
          Park Loka
        </Link>
      </div>
    </>
  );
}

export default NavBar;
