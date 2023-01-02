import React from "react";

import "./education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity } from "@fortawesome/fontawesome-free-solid";

const Education = () => {
  return (
    <section class="section hero is-light" id="edu">
   
      <h1 className="title"> <FontAwesomeIcon icon={faUniversity}/> Education</h1>
   
      <h3 className="title is-4" >
        Manipal University Jaipur, Rajasthan
        <h3 className="subtitle is-5" style={{display:"inline"}}>
        {" "}
        | 2020-24
      </h3>
      </h3>
      

      <h5 className="subtitle is-5">
        Bachelors in Technology , Computer Science
        <h6 className="subtitle is-6">CGPA: 9.18 till sem 5</h6>
      </h5>
      <h3 className="title is-4" style={{ display: "inline" }}>
        K.R Mangalam World School GKII, New Delhi
        <h3 className="subtitle is-5" style={{ display: "inline" }}>
        {" "}
        | 2005-20
      </h3>
      </h3>
      

      <h5 className="subtitle is-5">
        <h6 className="subtitle is-6">
          PCM CBSE XII: 90.8%
          <h6 className="subtitle is-6">CBSE X: 94.2%</h6>
        </h6>
      </h5>
    </section>
  );
};

export default Education;
