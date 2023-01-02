import * as React from "react";

const Header = () => {
  return (
    <>
      <nav
        className="navbar is-warning"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <h1 class="title is-6">Rajit Kuthiala</h1>
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
    </>
  );
};

export default Header;
