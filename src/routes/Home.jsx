import React from "react";
import "../components/Home/Home.css";
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import ScrollDownButton from "../components/ScrollDownButton/ScrollDownButton";
import BackgroundSlider from "../components/BackgroundSlider/BackgroundSlider";
import Footer from "../components/Footer/Footer";
import { HomeItems } from "../components/Home/HomeItems";
import HomeItem from "../components/Home/HomeItem";

import {
  sliderData,
  sliderDataPhone,
} from "../components/BackgroundSlider/BackgroundSliderData";

function Home() {
  return (
    <>
      <TopBar />
      <NavBar />
      <BackgroundSlider
        sliderData={sliderData}
        sliderDataPhone={sliderDataPhone}
      />
      <ScrollToTopButton />
      <ScrollDownButton />
      <div className="home-wrapper">
        {HomeItems.map((item, index) => (
          <HomeItem key={index} item={item} index={index} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
