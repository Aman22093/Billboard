import React, { useState } from "react";
import "./Bar.css";

const Bar = () => {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav_brand">
        Billboard
      </a>
      <ul className={active}>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Home
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            About
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            News
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Careers
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Contact
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            About
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Bar;
