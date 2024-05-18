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
import Toplar17 from "./images/toplar17.jpg";
import Toplar18 from "./images/toplar18.jpg";
import Toplar19 from "./images/toplar19.jpg";
import Toplar20 from "./images/toplar20.jpg";
import Toplar21 from "./images/toplar21.jpg";
import Toplar22 from "./images/toplar22.jpg";
import Toplar23 from "./images/toplar23.jpg";
import Toplar24 from "./images/toplar24.jpg";
import Toplar25 from "./images/toplar25.jpg";
import Toplar26 from "./images/toplar26.jpg";
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
import ParkLoka11 from "./images/parkloka11.jpeg";
import ParkLoka12 from "./images/parkloka12.jpeg";
import ParkLoka13 from "./images/parkloka13.jpeg";
import ParkLoka14 from "./images/parkloka14.jpeg";
import Hrana1 from "./images/hrana1.jpg";
import Hrana2 from "./images/hrana2.jpg";
import Hrana3 from "./images/hrana3.jpg";
import Hrana4 from "./images/hrana4.jpg";
import Hrana5 from "./images/hrana5.jpg";

import translate_si from "./components/translations/si/translations.json";
import translate_en from "./components/translations/en/translations.json";
import translate_de from "./components/translations/de/translations.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "si",
  resources: {
    si: {
      global: translate_si,
    },
    en: {
      global: translate_en,
    },
    de: {
      global: translate_de,
    },
  },
});

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
      Toplar17,
      Toplar18,
      Toplar19,
      Toplar20,
      Toplar21,
      Toplar22,
      Toplar23,
      Toplar24,
      Toplar25,
      Toplar26,
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
      ParkLoka11,
      ParkLoka12,
      ParkLoka13,
      ParkLoka14,
      Hrana1,
      Hrana2,
      Hrana3,
      Hrana4,
      Hrana5,
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
  Toplar17,
  Toplar18,
  Toplar19,
  Toplar20,
  Toplar21,
  Toplar22,
  Toplar23,
  Toplar24,
  Toplar25,
  Toplar26,
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
  ParkLoka11,
  ParkLoka12,
  ParkLoka13,
  ParkLoka14,
  Hrana1,
  Hrana2,
  Hrana3,
  Hrana4,
  Hrana5,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <PreloadImages />
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </HashRouter>
  </React.StrictMode>
);
