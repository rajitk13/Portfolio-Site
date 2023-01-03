import * as React from "react";
import "./header.css";

const Header = () => {
  return (
    <div class="hero-head">
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/#">
          Rajit Kuthiala
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#edu">
            Education
          </a>

          <a className="navbar-item" href="#certi">
            Certification
          </a>
          <a className="navbar-item" href="#projects">
            Projects
          </a>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;
