import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      {/* <hr /> */}
      <div className="section_padding">
        <div className="sb_footer">
          <div className="sb_footer-links">
            <h2>Kontakt</h2>
            <p>
              <i class="fa-solid fa-location-dot"></i> Zagradec 5, 1303 Zagradec
            </p>
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
          <div className="sb_footer-links social">
            <h2>Spremljajte nas na</h2>
            <div className="social-media">
              <Link href="https://www.facebook.com/picerija.toplar">
                <button>
                  <i class="fa-brands fa-facebook"></i>
                </button>
              </Link>
              <Link href="https://en.tripadvisor.com.hk/Restaurant_Review-g4581334-d8491442-Reviews-Pizzeria_Toplar-Zagradec_Lower_Carniola_Region.html?m=19905">
                <button>
                  <i class="fa fa-tripadvisor"></i>
                </button>
              </Link>
              <Link href="https://www.instagram.com/picerija.toplar/">
                <button>
                  <i class="fa-brands fa-instagram"></i>
                </button>
              </Link>
            </div>
          </div>
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
