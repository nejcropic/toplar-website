import React, { useEffect, useState } from "react";
import "../components/Galerija/Galerija.css";
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "framer-motion";
import { MeniButtonAnimation } from "../components/animations";

import { Toplar13 } from "../index";
import {
  GalerijaItemsProstori,
  GalerijaItemsZabave,
  GalerijaItemsLoka,
  GalerijaItemsHrana,
  GalerijaItemsBiljard,
  GalerijaItemsOdbojka,
} from "../components/Galerija/GalerijaItems";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

// Define variants for the list items
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const containerVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 500 : -500,
    opacity: 0,
  }),
};

function Galerija() {
  const { t } = useTranslation("global");
  const [page, setPage] = useState([0, 0]);
  const [openModal, setOpenModal] = useState(false);
  const [activeGalerija, setActiveGalerija] = useState("prostori");
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setButton] = useState(false);

  useEffect(() => {
    const hideButton = () => {
      // Show button when user has scrolled down 100px (for example) from the top of the document
      if (window.scrollY > window.innerHeight - window.innerHeight / 3) {
        setButton(true);
      } else {
        setButton(false);
        setIsOpen(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", hideButton);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", hideButton);
  }, []);

  const combinedItems = [
    ...GalerijaItemsProstori,
    ...GalerijaItemsZabave,
    ...GalerijaItemsLoka,
    ...GalerijaItemsHrana,
    ...GalerijaItemsBiljard,
    ...GalerijaItemsOdbojka,
  ];
  const imageIndex = wrap(0, combinedItems.length, page[0]);

  const paginate = (newDirection) => {
    setPage([page[0] + newDirection, newDirection]);
  };

  const handleOpenModal = (index) => {
    setPage([index, 0]);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const renderGalerijaItems = (items, offset) => {
    return items.map((item, index) => (
      <motion.div
        className="single"
        key={index}
        onClick={() => handleOpenModal(index + offset)}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={childVariants}
        transition={{ duration: 0.5 }}
      >
        <img src={item.image} alt={item.title} />
      </motion.div>
    ));
  };

  const offsets = {
    prostori: 0,
    zabave: GalerijaItemsProstori.length,
    loka: GalerijaItemsProstori.length + GalerijaItemsZabave.length,
    hrana:
      GalerijaItemsProstori.length +
      GalerijaItemsZabave.length +
      GalerijaItemsLoka.length,
    biljard:
      GalerijaItemsProstori.length +
      GalerijaItemsZabave.length +
      GalerijaItemsLoka.length +
      GalerijaItemsHrana.length,
    odbojka:
      GalerijaItemsProstori.length +
      GalerijaItemsZabave.length +
      GalerijaItemsLoka.length +
      GalerijaItemsHrana.length +
      GalerijaItemsBiljard.length,
  };

  const galleryTitles = {
    prostori: "Prostori",
    zabave: "Zabave",
    loka: "Park Loka",
    hrana: "Hrana in pijača",
    biljard: "Biljard" /* 
    odbojka: "Odbojka", */,
  };

  const handleItemClick = (galerijaType) => {
    setActiveGalerija(galerijaType);
    setIsOpen(false);
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <TopBar />
      <NavBar />
      <ScrollToTopButton />
      <Hero
        cName="hero"
        heroImg={Toplar13}
        title={t("navbar.gallery")}
        subtitle="Ogled prekrasne galerije!"
        url="/galerija"
        btnClass="showBtn"
        buttonText={t("hero.gallery")}
      />
      <div className="galerija-wrapper">
        <h1>{galleryTitles[activeGalerija]}</h1>
        {openModal && (
          <div className="slider-container" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <i
                className="fas fa-chevron-left btnPrev"
                onClick={() => paginate(-1)}
              ></i>
              <i
                className="fas fa-chevron-right btnNext"
                onClick={() => paginate(1)}
              ></i>
              <i
                className="fas fa-times btnClose"
                onClick={handleCloseModal}
              ></i>
              <div className="fullScreenImage">
                <AnimatePresence initial={false} custom={page[1]}>
                  <motion.img
                    key={page[0]}
                    src={combinedItems[imageIndex].image}
                    custom={page[1]}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className={showButton ? "menu show-menu" : "menu hide"}
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            variants={MeniButtonAnimation}
            initial="hidden"
            animate={showButton ? "show" : "hidden"}
            onClick={() => setIsOpen(!isOpen)}
          >
            Izberi
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </motion.button>
          <motion.ul
            className="galerija-items"
            variants={containerVariants}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <motion.li
              variants={itemVariants}
              onClick={() => handleItemClick("prostori")}
            >
              Prostori
            </motion.li>
            <motion.li
              variants={itemVariants}
              onClick={() => handleItemClick("zabave")}
            >
              Zabave
            </motion.li>
            <motion.li
              variants={itemVariants}
              onClick={() => handleItemClick("loka")}
            >
              Park Loka
            </motion.li>
            <motion.li
              variants={itemVariants}
              onClick={() => handleItemClick("hrana")}
            >
              Hrana in pijača
            </motion.li>
            <motion.li
              variants={itemVariants}
              onClick={() => handleItemClick("biljard")}
            >
              Biljard
            </motion.li>
            {/* 
            <motion.li
              variants={itemVariants}
              onClick={() => handleItemClick("odbojka")}
            >
              Odbojka
            </motion.li> */}
          </motion.ul>
        </motion.nav>
        <div className="galerija-container">
          {activeGalerija === "prostori" &&
            renderGalerijaItems(GalerijaItemsProstori, offsets.prostori)}
          {activeGalerija === "zabave" &&
            renderGalerijaItems(GalerijaItemsZabave, offsets.zabave)}
          {activeGalerija === "loka" &&
            renderGalerijaItems(GalerijaItemsLoka, offsets.loka)}
          {activeGalerija === "hrana" &&
            renderGalerijaItems(GalerijaItemsHrana, offsets.hrana)}
          {activeGalerija === "biljard" &&
            renderGalerijaItems(GalerijaItemsBiljard, offsets.biljard)}
          {/* 
          {activeGalerija === "odbojka" &&
            renderGalerijaItems(GalerijaItemsOdbojka, offsets.odbojka)} */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Galerija;

const childVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};
