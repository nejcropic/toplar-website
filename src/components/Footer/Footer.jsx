import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("global");
  return (
    <div className="footer">
      <div className="section_padding">
        <div className="sb_footer">
          <div className="sb_footer-links">
            <h2>{t("footer.title")} TOPLAR</h2>
            <p>Zagradec 5</p>
            <p>1303 Zagradec, {t("footer.address")}</p>
          </div>
          <div className="line-div"></div>
          <div className="sb_footer-links">
            <h2>{t("footer.howto")}</h2>
            <Link to="https://www.google.com/maps/place/Pizzeria+Toplar/@45.8604216,14.8310709,17z/data=!3m1!4b1!4m6!3m5!1s0x47651fd0d682e749:0x1da4a28a57ec2b4b!8m2!3d45.8604179!4d14.8336512!16s%2Fg%2F11bcf15lmw?entry=ttu">
              <p>
                <i class="fa-solid fa-location-dot"></i> {t("footer.map")}
              </p>
            </Link>
          </div>
          <div className="line-div"></div>
          <div className="sb_footer-links ">
            <h2>{t("footer.social")}</h2>
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
            <h2>{t("footer.workingtime")}</h2>
            <p>
              <span className="links-color">{t("footer.time1")}: </span>
              <span>09:00 - 24:00 </span>
            </p>
            <p>
              <span className="links-color">{t("footer.time2")}: </span>
              <span>09:00 - 01:00 </span>
            </p>
            <p>
              <span className="links-color">{t("footer.time3")}: </span>
              <span>09:00 - 24:00 </span>
            </p>
          </div>
          <div className="line-div"></div>
          <div className="sb_footer-links">
            <h2>{t("footer.contact")}</h2>
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
            <p>@{new Date().getFullYear()} Nejc Ropič. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
