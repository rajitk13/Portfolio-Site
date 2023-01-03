import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/fontawesome-free-solid";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Certification = () => (
  <>
    <section class="hero is-dark section" id="certi">
      <h1 className="title"> <FontAwesomeIcon icon={faCertificate}/> Certification</h1>

      <h3 className="title is-4" style={{ display: "inline" }}>
        Oracle DFO
        {" "}
        <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ display: "inline",fontSize:"1rem" }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/178J9NBidcamJWNkbcu1sNCDXx7pYqqsY/view",
                "_blank"
              )
            }/>
      </h3>
      <h3 className="subtitle is-5" style={{ display: "inline" }}>
        {" "}
        | 4th Sem -RDBMS
     
        
      </h3>

      
      <h3 className="title is-4" style={{ display: "inline" }}>
       CISCO CCNA V7 
       {" "}
        <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ display: "inline",fontSize:"1rem" }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1tuYsxu3cYKjb3iPuv9MjpcncMKIBu4Sq/view",
                "_blank"
              )
            }/>
      </h3>
      <h3 className="subtitle is-5" style={{ display: "inline" }}>
        {" "}
        | 5th Sem - Computer Networks
      </h3>

      <h3 className="title is-4" style={{ display: "inline" }}>
      Complete Web Development Bootcamp
      {" "}
        <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ display: "inline",fontSize:"1rem" }}
            onClick={() =>
              window.open(
                "https://www.udemy.com/certificate/UC-8464479b-a70d-4fba-abcb-19d1cc1fc92f/",
                "_blank"
              )
            }/>
      </h3>
      <h3 className="subtitle is-5" style={{ display: "inline" }}>
        {" "}
        | Udemy - Angela Yu
      </h3>
      
    </section>
  </>
);

export default Certification;
