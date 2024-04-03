import React from "react";
import "../components/Loka/Loka.css";
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

import { ParkLoka1, Toplar15 } from "../index";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

function Loka() {
  return (
    <>
      <TopBar />
      <NavBar />
      <ScrollToTopButton />
      <Hero
        cName="hero"
        heroImg={ParkLoka1}
        title="Park Loka"
        text=""
        url="/onas"
        btnClass="showBtn"
        buttonText="Preberi več"
      />
      <div className="loka-wrapper">
        <div className="loka-container">
          <img src={ParkLoka1} alt="Park Loka" />
          <div className="loka-flex ">Ponudba</div>
        </div>
        <div className="loka-container">
          <img src={ParkLoka1} alt="Park Loka" />
          <div className="loka-flex ">Ponudba</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Loka;
