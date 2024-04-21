import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../components/Meni/Meni.css";
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

import { motion } from "framer-motion";
import { mainAnimation, navAnimationPhone } from "../components/animations";

import {
  Pizze,
  Burgerji,
  TopliNapitki,
  Dodatki,
  Alergeni,
  BrezalkoholnePijace,
  Pivo,
  Vino,
  Zgane,
  Viskiji,
} from "../components/Meni/MeniItems.jsx";
import {
  Toplar6,
  Toplar_pizze,
  Toplar_burger,
  Toplar_burger2,
  Toplar_brezalkoholne,
  Toplar_alkoholne,
  Toplar_galerija7,
} from "../index";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton.jsx";

function Meni() {
  const [showTab, setShowTab] = useState(1);
  const elementRef = useRef(null);
  const targetPosition = window.innerHeight;

  const handleTab = (e) => {
    setShowTab(e);

    setTimeout(() => {
      if (elementRef.current) {
        window.scrollTo({
          top: targetPosition + 40,
          behavior: "smooth", // Smooth scroll
        });
      }
    }, 0);
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
        cName="hero-mid"
        heroImg={Toplar6}
        title="Meni"
        url="/meni"
        btnClass="hideBtn"
        buttonText="__"
      />
      <motion.div
        variants={mainAnimation}
        initial="hidden"
        animate="show"
        className="buttons-container"
      >
        <nav>
          <ul>
            <li>
              <button
                className={
                  showTab === 1 ? "buttons-choose active" : "buttons-choose"
                }
                onClick={() => handleTab(1)}
              >
                <i class="fa-solid fa-pizza-slice"></i>
                Pizze
              </button>
            </li>
            <li>
              <button
                className={
                  showTab === 2 ? "buttons-choose active" : "buttons-choose"
                }
                onClick={() => handleTab(2)}
              >
                <i class="fa-solid fa-burger"></i>
                Burgerji
              </button>
            </li>
            <li>
              <button
                className={
                  showTab === 3 ? "buttons-choose active" : "buttons-choose"
                }
                onClick={() => handleTab(3)}
              >
                <i class="fa-solid fa-martini-glass"></i>
                Pijače
              </button>
            </li>
            <li>
              <button
                className={
                  showTab === 4 ? "buttons-choose active" : "buttons-choose"
                }
                onClick={() => handleTab(4)}
              >
                <i class="fa-solid fa-cubes-stacked"></i>
                Dodatki
              </button>
            </li>
          </ul>
        </nav>
      </motion.div>
      <div className="meni-wrapper">
        {/* pizze */}
        <motion.div
          variants={navAnimationPhone}
          initial="hidden"
          animate="show"
          className={showTab === 1 ? "meni-item show" : "meni-item"}
        >
          <div className="image-meni">
            <img src={Toplar_pizze} alt="" className="image-meni-sub" />
          </div>

          <div className="meni-flex">
            <h1>Pizze</h1>
            <div className="meni-divide">
              <div className="meni-pizza">
                <div className="meni-velikosti-left">
                  <hr />
                </div>
                <div className="meni-velikosti">
                  <h2>Mala</h2>
                  <h2>Velika</h2>
                </div>
              </div>
              <div className="meni-pizza show-pizza">
                <div className="meni-velikosti-left">
                  <hr />
                </div>
                <div className="meni-velikosti">
                  <h2>Mala</h2>
                  <h2>Velika</h2>
                </div>
              </div>
            </div>
            <div className="meni-divide">
              {Pizze.map((item, index) => {
                return (
                  <div className="meni-content" key={index}>
                    <div className="meni-content-burger">
                      <div className="meni-title">
                        <h3>{item.title}</h3>
                        {/* <h4>{item.alergeni}</h4> */}
                      </div>
                      <div className=" pizza-line">
                        <hr />
                      </div>
                      <div className="meni-cena pizza-cena">
                        <h3>{item.cenaMala}€</h3>
                      </div>
                      <div className="meni-cena pizza-cena">
                        <h3>{item.cenaVelika}€</h3>
                      </div>
                    </div>
                    <p>{item.sestavine}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <hr
          className={showTab === 1 ? "meni-breakline show" : "meni-breakline"}
        />
        {/* burgerji */}
        <div
          ref={elementRef}
          className={showTab === 2 ? "meni-item show" : "meni-item"}
        >
          <div className="image-meni">
            <img src={Toplar_burger} alt="" className="image-meni-sub" />
          </div>
          <div className="meni-flex">
            <h1>Burgerji</h1>
            <div className="meni-divide">
              {Burgerji.map((item, index) => {
                return (
                  <div className="meni-content" key={index}>
                    <div className="meni-content-burger">
                      <div className="meni-title">
                        <h3>{item.title}</h3>
                        {/* 
                        <h4>{item.alergeni}</h4> */}
                      </div>
                      <div className="meni-line">
                        <hr />
                      </div>
                      <div className="meni-cena">
                        <h3>{item.cena}€</h3>
                      </div>
                    </div>
                    <p>{item.sestavine}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <hr
          className={showTab === 2 ? "meni-breakline show" : "meni-breakline"}
        />
        {/* brezalkoholne */}
        <div className={showTab === 3 ? "meni-item show" : "meni-item"}>
          <div className="image-meni">
            <img src={Toplar_brezalkoholne} alt="" className="image-meni-sub" />
          </div>
          <div className="meni-flex">
            <h1>Brezalkoholne pijače</h1>
            <div className="meni-divide">
              {BrezalkoholnePijace.map((item, index) => {
                return (
                  <div className="meni-content-up" key={index}>
                    <div className="meni-title">
                      <h3>
                        {item.title}
                        {/*  {item.alergeni} */}
                      </h3>
                    </div>
                    <div className="meni-line">
                      <hr />
                    </div>
                    <div className="meni-cena">
                      <h3>{item.cena}€</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <hr
          className={showTab === 3 ? "meni-breakline show" : "meni-breakline"}
        />
        {/* pivo */}
        <div className={showTab === 3 ? "meni-item show" : "meni-item"}>
          <div className="image-meni">
            <img src={Toplar_alkoholne} alt="" className="image-meni-sub" />
          </div>
          <div className="meni-flex">
            <h1>Pivo</h1>
            <div className="meni-divide">
              {Pivo.map((item, index) => {
                return (
                  <div className="meni-content-up" key={index}>
                    <div className="meni-title">
                      <h3>
                        {item.title} {/* {item.alergeni} */}
                      </h3>
                    </div>
                    <div className="meni-line">
                      <hr />
                    </div>
                    <div className="meni-cena">
                      <h4>{item.kolicina}</h4>
                      <h3>{item.cena}€</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr
          className={showTab === 3 ? "meni-breakline show" : "meni-breakline"}
        />
        {/* vino */}
        <div className={showTab === 3 ? "meni-item show" : "meni-item"}>
          <div className="image-meni">
            <img src={Toplar_galerija7} alt="" className="image-meni-sub" />
          </div>
          <div className="meni-flex">
            <h1>Vino</h1>
            <div className="meni-divide">
              {Vino.map((item, index) => {
                return (
                  <div className="meni-content-up" key={index}>
                    <div className="meni-title">
                      <h3>{item.title}</h3>
                      {/* 
                      <h4>{item.alergeni}</h4> */}
                    </div>
                    <div className="meni-line">
                      <hr />
                    </div>
                    <div className="meni-cena">
                      <h4>{item.kolicina}</h4>
                      <h3>{item.cena}€</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr
          className={showTab === 3 ? "meni-breakline show" : "meni-breakline"}
        />
        {/* zgane */}
        <div className={showTab === 3 ? "meni-item show" : "meni-item"}>
          <div className="image-meni">
            <img src={Toplar_galerija7} alt="" className="image-meni-sub" />
          </div>
          <div className="meni-flex">
            <h1>Žgane pijače in likerji</h1>
            <div className="meni-divide">
              {Zgane.map((item, index) => {
                return (
                  <div className="meni-content-up" key={index}>
                    <div className="meni-title">
                      <h3>{item.title}</h3>
                      {/* 
                      <h4>{item.alergeni}</h4> */}
                    </div>
                    <div className="meni-line">
                      <hr />
                    </div>
                    <div className="meni-cena">
                      <h4>{item.kolicina}</h4>
                      <h3>{item.cena}€</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr
          className={showTab === 3 ? "meni-breakline show" : "meni-breakline"}
        />
        {/* viskiji */}
        <div className={showTab === 3 ? "meni-item show" : "meni-item"}>
          <div className="image-meni">
            <img src={Toplar_galerija7} alt="" className="image-meni-sub" />
          </div>
          <div className="meni-flex">
            <h1>Viskiji</h1>
            <div className="meni-divide">
              {Viskiji.map((item, index) => {
                return (
                  <div className="meni-content-up" key={index}>
                    <div className="meni-title">
                      <h3>{item.title}</h3>
                      {/* 
                      <h4>{item.alergeni}</h4> */}
                    </div>
                    <div className="meni-line">
                      <hr />
                    </div>
                    <div className="meni-cena">
                      <h4>{item.kolicina}</h4>
                      <h3>{item.cena}€</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr
          className={showTab === 3 ? "meni-breakline show" : "meni-breakline"}
        />
        {/* topli napitki */}
        <div className={showTab === 3 ? "meni-item show" : "meni-item"}>
          <div className="image-meni">
            <img src={Toplar_alkoholne} alt="" className="image-meni-sub" />
          </div>
          <div className="meni-flex">
            <h1>Topli napitki</h1>
            <div className="meni-divide">
              {TopliNapitki.map((item, index) => {
                return (
                  <div className="meni-content-up" key={index}>
                    <div className="meni-title">
                      <h3>
                        {item.title} {/* {item.alergeni} */}
                      </h3>
                    </div>
                    <div className="meni-line">
                      <hr />
                    </div>
                    <div className="meni-cena">
                      <h3>{item.cena}€</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr
          className={showTab === 3 ? "meni-breakline show" : "meni-breakline"}
        />
        {/* alergeni */}
        <div className={showTab === 4 ? "meni-item show" : "meni-item"}>
          <div className="image-meni">
            <img src={Toplar_burger2} alt="" className="image-meni-sub" />
          </div>
          <div className="meni-flex">
            <h1>Dodatki</h1>
            <div className="meni-divide">
              {Dodatki.map((item, index) => {
                return (
                  <div className="meni-content-up" key={index}>
                    <div className="meni-title">
                      <h3>
                        {item.title} {/* {item.alergeni} */}
                      </h3>
                    </div>
                    <div className="meni-line">
                      <hr />
                    </div>
                    <div className="meni-cena">
                      <h3>{item.cena}€</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr
          className={showTab === 4 ? "meni-breakline show" : "meni-breakline"}
        />
      </div>
      {/* <div className="alergeni-wrapper">
        <div className="alergeni-container">
          <h3>Alergeni</h3>
          {Alergeni.map((item, index) => {
            return (
              <div className="meni-content alergeni" key={index}>
                <div className="alergeni-line">
                  <hr />
                </div>
                <div className="meni-title alergeni-title">
                  <h4>
                    {item.številka}. {item.title}
                  </h4>
                </div>
                <div className="alergeni-line">
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </div> */}

      <Footer />
    </>
  );
}

export default Meni;
