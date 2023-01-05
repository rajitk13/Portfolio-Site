import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons";
const Skills = () => {
  return (
    <>
      <section class="section hero is-white" id="projects">
        <h1 className="title">
          <FontAwesomeIcon icon={faLinesLeaning} /> Skills
        </h1>
        <p>
          <h5 class="subtitle is-5" style={{display:"inline"}}>MERN Stack: </h5>
          <span class="tag is-dark">HTML5</span>{" "}
          <span class="tag is-dark">CSS 5</span>{" "}
          <span class="tag is-dark">Javascript</span>{" "}
          <span class="tag is-dark">React Js</span>{" "}
          <span class="tag is-dark">EJS/HBR</span>{" "}
          <span class="tag is-dark">MongoDB</span>{" "}
          <span class="tag is-dark">SQL</span>{" "}
          <span class="tag is-dark">Node JS</span>{" "}
          <span class="tag is-dark">Express JS</span>{" "}
          <span class="tag is-dark">Jquery</span>{" "}
        </p>
        <p>
          <h5 class="subtitle is-5" style={{display:"inline"}}>IDE I LIKE XD!: </h5>
          <span class="tag is-dark">VS CODE</span>{" "}
          <span class="tag is-dark">ATOM</span>{" "}
 
        </p>
      </section>
    </>
  );
};

export default Skills;
