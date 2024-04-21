import React, { useState, useEffect, useRef } from "react";
import "../components/Loka/Loka.css";
import { useLocation } from "react-router-dom";
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

import {
  ParkLoka10,
  ParkLoka3,
  ParkLoka5,
  ParkLoka9,
  Toplar15,
} from "../index";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import SliderLoka from "../components/SliderLoka/SliderLoka";

import {
  Kasca,
  Kozolec,
  LokaSlike,
} from "../components/SliderLoka/SliderLokaData";
function Loka() {
  const [showTab, setShowTab] = useState(1);
  const elementRef = useRef(null);
  const targetPosition = window.innerHeight;

  const handleTab = (e) => {
    setShowTab(e);

    window.scrollTo({
      top: targetPosition * 2 + 40,
      behavior: "smooth",
    });
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <TopBar />

      <NavBar />
      <ScrollToTopButton />
      <Hero
        cName="hero"
        heroImg={ParkLoka3}
        title="Park Loka"
        text="Možen najem."
        url="/onas"
        btnClass="showBtn"
        buttonText="Poglej"
      />
      <div className="loka-wrapper">
        <h2>Oglej si park</h2>
        <div className="loka-background"></div>
        <div className="loka-container">
          <div className="loka-card" onClick={() => handleTab(1)}>
            <img src={ParkLoka9} alt="Park Loka" />
            <div className="loka-text">
              <h3>Kašča</h3>
            </div>
          </div>
          <div className="loka-card" onClick={() => handleTab(2)}>
            <img src={ParkLoka3} alt="Park Loka" />
            <div className="loka-text">
              <h3>Kozolec</h3>
            </div>
          </div>
          <div className="loka-card " onClick={() => handleTab(3)}>
            <img src={ParkLoka5} alt="Park Loka" />
            <div className="loka-text">
              <h3>Loka</h3>
            </div>
          </div>
        </div>
        <div className={showTab === 1 ? "loka-item show-item" : "loka-item"}>
          <h2>Kašča</h2>
          <div className="loka-flex">
            <img src={ParkLoka9} alt="Park Loka" />
            <p>Poletna kašča za osvežitev z odličnimi burgerji</p>
          </div>
          <div className="loka-galerija">
            <p>Galerija:</p>
            <SliderLoka sliderData={Kasca} />
          </div>
        </div>
        <div className={showTab === 2 ? "loka-item show-item" : "loka-item"}>
          <h2>Kozolec</h2>
          <div className="loka-flex">
            <img src={ParkLoka3} alt="Park Loka" />
            <p>Najem prostora za večje družbe</p>
          </div>
          <div className="loka-galerija">
            <p>Galerija:</p>
            <SliderLoka sliderData={Kozolec} />
          </div>
        </div>
        <div className={showTab === 3 ? "loka-item show-item" : "loka-item"}>
          <h2>Loka</h2>
          <div className="loka-flex ">
            <img src={ParkLoka5} alt="Park Loka" />
            <p>
              Park ima lesen pomol in klopco, poleti pa je v koči odprt bar,
              kjer se je možno osvežiti s hladno pijačo.
            </p>
          </div>
          <div className="loka-galerija">
            <p>Galerija:</p>
            <SliderLoka sliderData={LokaSlike} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Loka;
