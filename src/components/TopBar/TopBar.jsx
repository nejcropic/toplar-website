import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <a href="tel:017886833" className="topbar-item">
          <div className="icon">
            <i className="fas fa-phone"></i>
          </div>
          <span className="span">01-7886-833</span>
        </a>
        <Link className="topbar-item">
          <div className="icon">
            <i className="fas fa-clock"></i>
          </div>
          <span className="span">Odprto vsak dan</span>
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
<a href="tel:017886833">
  <p>01 788 68 33</p>
</a>;
