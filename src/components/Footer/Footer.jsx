import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="section_padding">
        <div className="sb_footer">
          <div className="sb_footer-links">
            <h2>PIZZERIJA TOPLAR</h2>
            <p>Zagradec 5</p>
            <p>1303 Zagradec, Slovenija</p>
          </div>
          <div className="line-div"></div>
          <div className="sb_footer-links">
            <h2>KAKO DO NAS</h2>
            <Link to="https://www.google.com/maps/place/Pizzeria+Toplar/@45.8604216,14.8310709,17z/data=!3m1!4b1!4m6!3m5!1s0x47651fd0d682e749:0x1da4a28a57ec2b4b!8m2!3d45.8604179!4d14.8336512!16s%2Fg%2F11bcf15lmw?entry=ttu">
              <p>
                <i class="fa-solid fa-location-dot"></i> Zemljevid
              </p>
            </Link>
          </div>
          <div className="line-div"></div>
          <div className="sb_footer-links ">
            <h2>Spremljajte nas na</h2>
            <div className="social-media">
              <Link to="https://www.facebook.com/picerija.toplar">
                <button>
                  <i class="fa-brands fa-facebook"></i>
                </button>
              </Link>
              <Link to="https://en.tripadvisor.com.hk/Restaurant_Review-g4581334-d8491442-Reviews-Pizzeria_Toplar-Zagradec_Lower_Carniola_Region.html?m=19905">
                <button>
                  <i class="fa fa-tripadvisor"></i>
                </button>
              </Link>
              <Link to="https://www.instagram.com/picerija.toplar/">
                <button>
                  <i class="fa-brands fa-instagram"></i>
                </button>
              </Link>
            </div>
          </div>
          <div className="line-div"></div>
          <div className="sb_footer-links">
            <h2>Odpiralni čas</h2>
            <p>
              <span className="links-color">Pon - Čet: </span>
              <span>09:00 - 24:00 </span>
            </p>
            <p>
              <span className="links-color">Pet - Sob: </span>
              <span>09:00 - 01:00 </span>
            </p>
            <p>
              <span className="links-color">Ned: </span>
              <span>09:00 - 24:00 </span>
            </p>
          </div>
          <div className="line-div"></div>
          <div className="sb_footer-links">
            <h2>KONTAKT</h2>
            <Link href="tel:017886833">
              <p>
                <i class="fa-solid fa-phone"></i> 01 788 68 33
              </p>
            </Link>
            <Link href="mailto:picerija.toplar@gmail.com">
              <p>
                <i class="fa-regular fa-envelope"></i> picerija.toplar@gmail.com
              </p>
            </Link>
          </div>
        </div>
        <hr />
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} Toplar d.o.o. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
