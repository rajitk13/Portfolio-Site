import * as React from "react";
import "./header.css";

const Header = () => {
  return (
    <nav
      className="navbar is-dark is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a class="navbar-item" href="/#">
            Rajit Kuthiala
          </a>
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
  );
};

export default Header;
