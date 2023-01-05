import React from "react";
// import classes from "./Intro.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./intro.css";

const Intro = () => (
  <>
    <div className="hero-body is-medium">
      <div className="container">
        <p className="title" style={{ display: "inline" }}>
          Rajit Kuthiala{" "}
        </p>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          style={{ display: "inline" }}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1mmiIcBF7FNnikulqdpthUcUfSHio3BR2/view?usp=share_link",
              "_blank"
            )
          }
        />

        <p className="subtitle">Computer Science Student</p>
        <i
          class="fab fa-github"
          onClick={() => window.open("https://github.com/rajitk13", "_blank")}
        ></i>
        <i
          className="fab fa-linkedin-in icon"
          onClick={() =>
            window.open("https://www.linkedin.com/in/rajitkuthiala/", "_blank")
          }
        ></i>
        {/* <i className="fab fa-twitter icon"></i> */}
        <i
          class="far fa-envelope icon"
          onClick={() =>
            window.open("mailto:rajitkuthiala@gmail.com", "_blank")
          }
        ></i>
        <i
          class="fab fa-instagram icon"
          onClick={() =>
            window.open("https://www.instagram.com/rajitk13/", "_blank")
          }
        ></i>

        <p>
          <i class="fas fa-map-pin location"></i> Delhi , India
        </p>
      </div>
    </div>
  </>
);

export default Intro;
