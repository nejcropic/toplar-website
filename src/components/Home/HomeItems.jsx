import Zabave from "../../images/slikazabave.jpg";
import ParkLoka from "../../images/parkLoka3.jpg";
import Biljard from "../../images/slikabiljard.jpg";

export const HomeItems = [
  {
    image: Zabave,
    titleKey: "home.events.title",
    title2Key: "home.events.subtitle",
    bodyKey: "home.events.description",
    buttonKey: "home.events.button",
    url: "/meni",
    divclass: "home-flex",
  },
  {
    image: ParkLoka,
    titleKey: "home.park.title",
    title2Key: "home.park.subtitle",
    bodyKey: "home.park.description",
    buttonKey: "home.park.button",
    url: "/loka",
    divclass: "home-flex-reverse",
  },
  {
    image: Biljard,
    titleKey: "home.biljard.title",
    title2Key: "home.biljard.subtitle",
    bodyKey: "home.biljard.description",
    buttonKey: "home.biljard.button",
    url: "/galerija",
    divclass: "home-flex",
  },
];
