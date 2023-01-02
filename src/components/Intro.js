import React from "react";
// import classes from "./Intro.module.css";
import "./intro.css";


const Intro = () => (
  <>
    <section className="hero is-warning is-medium">
      <div className="hero-body">
        <div className="container">
          <p className="title">Rajit Kuthiala</p>
          <p className="subtitle">Computer Science Student</p>
          <i class="fab fa-github"></i>
          <i className="fab fa-linkedin-in icon"></i>
          <i className="fab fa-twitter icon"></i>
          <i class="far fa-envelope icon"></i>
          <p><i class="fas fa-map-pin location"></i> Delhi , India</p>
        </div>
      </div>
    </section>
  </>
);

export default Intro;
