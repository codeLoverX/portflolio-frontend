import React from "react";
import profil from "../../../assets/images/profil.jpg";

const About = ({ reff }) => {
  return (
    <section
      ref={reff}
      id="about"
      className="py-2 w-50s mx-auto"
    >
      <h2 className="font-weight-bold my-2 text-center">
          About Me
        </h2>
          <div>
            <img className="d-block mx-auto" src={profil} style={{borderRadius: "50%", width: "250px"}} alt="profil" />
          </div>
          <div className="my-3 text-justify normalFont">
            <ul>
              <li>Passionate developer prioritizing clients' and businesses' needs</li>
              <li>Hardworking and higly adaptable to the situations</li>
              <li>Prolific and dedicated</li>
            </ul>
          </div>
    </section>
  );
};

export default About;
