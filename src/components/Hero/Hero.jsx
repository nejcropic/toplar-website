import "./Hero.css";
import { motion } from "framer-motion";
import { backgroundAnimation, mainAnimation } from "../animations";

function Hero(props) {
  const targetPosition = window.innerHeight + 40;
  const handleScrollDown = () => {
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };
  return (
    <>
      <motion.div
        variants={backgroundAnimation}
        initial="hidden"
        animate="show"
        className={props.cName}
      >
        <img alt="HeroImg" src={props.heroImg} />
      </motion.div>

      <motion.div
        variants={mainAnimation}
        initial="hidden"
        animate="show"
        className="hero-text"
      >
        <h1>{props.title}</h1>
        <p>{props.text}</p>

        <button className={props.btnClass} onClick={handleScrollDown}>
          {props.buttonText}
        </button>
      </motion.div>
    </>
  );
}

export default Hero;
