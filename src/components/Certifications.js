import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/fontawesome-free-solid";

const Certification = () => (
  <>
    <section class="hero is-dark section" id="certi">
      <h1 className="title"> <FontAwesomeIcon icon={faCertificate}/> Certification</h1>

      <h3 className="title is-4" style={{ display: "inline" }}>
        Oracle DFO
      </h3>
      <h3 className="subtitle is-5" style={{ display: "inline" }}>
        {" "}
        | 4th Sem -RDBMS
      </h3>

      
      <h3 className="title is-4" style={{ display: "inline" }}>
       CISCO CCNA V7 
      </h3>
      <h3 className="subtitle is-5" style={{ display: "inline" }}>
        {" "}
        | 5th Sem - Computer Networks
      </h3>

      <h3 className="title is-4" style={{ display: "inline" }}>
      Complete Web Development Bootcamp
      </h3>
      <h3 className="subtitle is-5" style={{ display: "inline" }}>
        {" "}
        | Udemy - Angela Yu
      </h3>
      
    </section>
  </>
);

export default Certification;
