import React from "react";
import "../components/Onas/Onas.css";
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

import { ParkLoka1, Toplar15, Toplar_galerija10, Toplar_temna } from "../index";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

function Onas() {
  return (
    <>
      <TopBar />
      <NavBar />
      <ScrollToTopButton />
      <Hero
        cName="hero"
        heroImg={Toplar15}
        title="O nas"
        subtitle="Kratek opis .."
        url="/onas"
        btnClass="showBtn"
        buttonText="Preberi več"
      />
      <div className="onas-wrapper">
        <div className="onas-container">
          <div className="onas-flex reverse">
            <p>
              Pozna nas vsa Dolenjska, gostje pa v našo picerijo prihajajo še od
              marsikje, saj dober glas o slastni ponudbi seže v deveto vas.
              <br />
              <br />
              Smo znana <b>picerija v okolici Zagradca in po celi Dolenjski</b>.
              Naše pice so pripravljene iz svežih sestavin, in so vedno dobro
              obložene. Pri nas se vedno najde prava pica za vsakogar.
            </p>
            <img src={Toplar_temna} alt="" />
          </div>
          <div className="onas-flex">
            <p>
              <br />
              <br />
              <br />
              <br />
              TUKEJ PESMCO DEJ.
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="onas-flex ">
            <p>
              Naši prostori so veliki, zato pogosto gostimo tudi zaključene
              družbe, različna praznovanja in rojstne dneve. Vedno ste pa pri
              nas dobrodošli s prijatelji, družino, v dvoje, ali pa kar sami!{" "}
              <br />
              <br />
              Naša picerija v Zagradcu na Dolenjskem se nahaja v objemu čudovite
              narave, ki jo lahko opazujete z naše letne terase, v hladnejših
              dneh pa poskrbimo tudi za dober ambient v notranjosti picerije.
              Kjerkoli boste že sedeli, se boste nedvomno dobro počutili!
              Ponosni smo na naše osebje, ki je prijetno in prijazno, izkušeno
              in profesionalno. Naši zaposleni so ustrežljivi posamezniki, ki
              svoje delo opravljajo hitro in učinkovito, vedno pa vas pričakajo
              s toplim nasmehom.
              <br />
            </p>
            <img src={Toplar_galerija10} alt="" />
          </div>
          <div className="onas-flex reverse">
            <p>
              Kljub kakovostni hrani in dobri postrežbi pa so cene v naši
              piceriji v Zagradcu na Dolenjskem denarnicam prijazne. <br />
              <br />
              Naša ponudba je bogata, poleg hrane pa vam bom oz veseljem
              postregli z osvežilno pijačo, kofeinskim napitkom ali čajem, ali
              pa vam ponudili žlahtno kapljico. <br />
              <br />
              500 metrov stran od naše picerije pa najdete tudi PARK LOKA,
              Zagradec. Lokacija tik ob reki Krki ponuja priložnosti za športne
              aktivnosti in je ena najbolj priljubljenih na Dolenjskem, če
              iščete piknik prostor, prostor za praznovanje rojstnega dne,
              poroko ... <br />
              <br />
              Za rezervacijo v piceriji ali več informacij glede prireditvenega
              prostora v Parku Loka nas pokličite ali nam pišite.
              <b> Veselimo se vas v Zagradcu na Dolenjskem!</b>
            </p>
            <img src={ParkLoka1} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Onas;
