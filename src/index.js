import React, { useEffect } from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import Logo from "./images/logo1.jpg";
import Toplar1 from "./images/toplar1.jpg";
import Toplar2 from "./images/toplar2.jpg";
import Toplar3 from "./images/toplar3.jpg";
import Toplar4 from "./images/toplar4.jpg";
import Toplar5 from "./images/toplar5.jpg";
import Toplar6 from "./images/toplar6.jpg";
import Toplar7 from "./images/toplar7.jpg";
import Toplar8 from "./images/toplar8.jpg";
import Toplar9 from "./images/toplar9.jpg";
import Toplar10 from "./images/toplar10.jpg";
import Toplar11 from "./images/toplar11.jpg";
import Toplar12 from "./images/toplar12.jpg";
import Toplar13 from "./images/toplar13.jpg";
import Toplar14 from "./images/toplar14.jpg";
import Toplar15 from "./images/toplar15.jpg";
import Toplar16 from "./images/toplar16.jpg";
import Toplar_brezalkoholne from "./images/toplar_galerija2.jpg";
import Toplar_alkoholne from "./images/toplar_galerija3.jpg";
import Toplar_burger from "./images/toplar_burger.jpg";
import Toplar_burger2 from "./images/toplar_burger2.jpg";
import Toplar_pizze from "./images/toplar_pizze.jpg";
import Toplar_galerija1 from "./images/toplar_galerija1.jpg";
import Toplar_galerija2 from "./images/toplar_galerija2.jpg";
import Toplar_galerija3 from "./images/toplar_galerija3.jpg";
import Toplar_galerija4 from "./images/toplar_galerija4.jpg";
import Toplar_galerija5 from "./images/toplar_galerija5.jpg";
import Toplar_galerija6 from "./images/toplar_galerija6.jpg";
import Toplar_galerija7 from "./images/toplar_galerija7.jpg";
import Toplar_galerija8 from "./images/toplar_galerija8.jpg";
import Toplar_galerija9 from "./images/toplar_galerija9.jpg";
import Toplar_galerija10 from "./images/toplar_galerija10.jpg";
import ParkLoka1 from "./images/parkLoka1.jpeg";
import ParkLoka2 from "./images/parkLoka2.jpeg";
import ParkLoka3 from "./images/parkLoka3.jpg";
import ParkLoka4 from "./images/parkloka4.jpg";
import ParkLoka5 from "./images/parkloka5.jpg";
import ParkLoka6 from "./images/parkloka6.jpg";
import ParkLoka7 from "./images/parkloka7.jpg";
import ParkLoka8 from "./images/parkloka8.jpg";
import ParkLoka9 from "./images/parkloka9.jpg";
import ParkLoka10 from "./images/parkloka10.jpg";
import Toplar_logo from "./images/toplar_logo.jpg";
import Toplar_temna from "./images/toplar_temna.jpg";

const PreloadImages = () => {
  useEffect(() => {
    const imagesToPreload = [
      Logo,
      Toplar1,
      Toplar2,
      Toplar3,
      Toplar4,
      Toplar5,
      Toplar6,
      Toplar7,
      Toplar8,
      Toplar9,
      Toplar10,
      Toplar11,
      Toplar12,
      Toplar13,
      Toplar14,
      Toplar15,
      Toplar16,
      Toplar_brezalkoholne,
      Toplar_alkoholne,
      Toplar_burger,
      Toplar_burger2,
      Toplar_pizze,
      Toplar_galerija1,
      Toplar_galerija2,
      Toplar_galerija3,
      Toplar_galerija4,
      Toplar_galerija5,
      Toplar_galerija6,
      Toplar_galerija7,
      Toplar_galerija8,
      Toplar_galerija9,
      Toplar_galerija10,
      Toplar_logo,
      Toplar_temna,
      ParkLoka1,
      ParkLoka2,
      ParkLoka3,
      ParkLoka4,
      ParkLoka5,
      ParkLoka6,
      ParkLoka7,
      ParkLoka8,
      ParkLoka9,
      ParkLoka10,
    ];

    imagesToPreload.forEach((imageSrc) => (new Image().src = imageSrc));
  }, []);
};

export {
  Logo,
  Toplar1,
  Toplar2,
  Toplar3,
  Toplar4,
  Toplar5,
  Toplar6,
  Toplar7,
  Toplar8,
  Toplar9,
  Toplar10,
  Toplar11,
  Toplar12,
  Toplar13,
  Toplar14,
  Toplar15,
  Toplar16,
  Toplar_brezalkoholne,
  Toplar_alkoholne,
  Toplar_burger,
  Toplar_burger2,
  Toplar_pizze,
  Toplar_galerija1,
  Toplar_galerija2,
  Toplar_galerija3,
  Toplar_galerija4,
  Toplar_galerija5,
  Toplar_galerija6,
  Toplar_galerija7,
  Toplar_galerija8,
  Toplar_galerija9,
  Toplar_galerija10,
  Toplar_logo,
  Toplar_temna,
  ParkLoka1,
  ParkLoka2,
  ParkLoka3,
  ParkLoka4,
  ParkLoka5,
  ParkLoka6,
  ParkLoka7,
  ParkLoka8,
  ParkLoka9,
  ParkLoka10,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <PreloadImages />
      <App />
    </HashRouter>
  </React.StrictMode>
);
