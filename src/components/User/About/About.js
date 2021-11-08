import React from "react";
import profil from "../../../assets/images/profil.jpg";

const About = ({ reff }) => {
  return (
    <section
      ref={reff}
      id="about"
      className="py-3 w-50s mx-auto"
    >
      <h2 className="font-weight-bold my-3 text-center">
        About Me
      </h2>
      <div>
        <img className="d-block mx-auto" src={profil} style={{ borderRadius: "50%", width: "250px" }} alt="profil" />
      </div>
      <div className="my-3 text-justify largeFont">
        <ul>

          <li> Robust, mobile-friendly and attractive solutions
          </li>
          <li>
            Adapts quickly and learns new technologies and databases
          </li>
          <li> Dedicated to meeting clients' (all types) requirements and deadlines
          </li>
          <li> A passionate developer enjoying software development and relishing the journey
          </li>

        </ul>

      </div>
      <TechStack />

    </section>
  );
};


function TechStack() {
  return (
    <div className="border border-light normalFont mt-5">
      <h5 className="text-center my-2 text-decoration-underline">Tech Stack</h5>
      <ul className="list-unstyled">
        <li className=" font-italic">
          Languages - HTML/CSS, JavaScript, PHP, Dart, C++
        </li>
        <li className=" font-italic">
          Frameworks/libraries - JQuery, ES6, MERN (ReactJs), Laravel, Flutter, Express, NodeJs
        </li>
        <li className=" font-italic">
          Web Servers/Services/Tools - Firebase, REST API, GIT, NPM, GULP, JSON AJAX
        </li>
        <li className=" font-italic">
          Databases - MySQL, MongoDB, PostgreSQL
        </li>
      </ul>
    </div>
  )
}

export default About;
