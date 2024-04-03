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
            <a href="tel:017886833">
              <p>
                <i class="fa-solid fa-phone"></i> 01 788 68 33
              </p>
            </a>
            <a href="mailto:picerija.toplar@gmail.com">
              <p>
                <i class="fa-regular fa-envelope"></i> picerija.toplar@gmail.com
              </p>
            </a>
          </div>
          <div className="sb_footer-links">
            <h2>Odpiralni čas</h2>
            <p>
              <span className="links-color">Pon - Čet: </span>
              <span>08:00 - 24:00 </span>
            </p>
            <p>
              <span className="links-color">Pet - Sob: </span>
              <span>09:00 - 01:00 </span>
            </p>
            <p>
              <span className="links-color">Ned: </span>
              <span>08:00 - 24:00 </span>
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
