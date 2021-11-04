import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getprojects } from "../../../actions/projectAction";
import { baseURL } from "../../../apis/serverApi";
import DevImage from '../../../assets/images/dev.png';

const Projects = ({ reff }) => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getprojects());
  }, [dispatch]);

  const project = projects.map((proj) => {
    return (
      <div key={proj._id} className="col-lg-12">
        <div className="view overlay rounded z-depth-1">
          <img
            href={baseURL + '/uploads/' + proj.projectImage}
            alt={proj.title}
          />
        </div>
        <div className="row">
          <div className="text-left">
            <p className="normal-font fw-bold mb-2">
              {proj.title}
            </p>
            <p className="normal-font grey-text" >
              {proj.description}
            </p>
            <p
              className="normal-font mb-1 fw-bold"
              style={{
                fontSize: "14px",
                display: "inline",
              }}
            >
              Technologies:
            </p>
            <p className="d-inline" style={{ fontSize: "13px" }}>
              {" "}
              {proj.technologies}
            </p>
            <hr className="mb-4" />
          </div>
        </div>
      </div>

    );
  });

  return (
    <section
      id="projects"
      ref={reff}
      className="text-center py-2 w-50 mx-auto"
    >

      <div className="container">
        <h2 className="h1-responsive font-weight-bold mb-3">Projects</h2>
        <div className="row">
          <div className="col-12 text-center text-lg-left">

            <img
              className="img-fluid rounded-full mb-5 d-none d-lg-inline"
              style={{ width: "200px", height: "200px", background: "white", borderRadius: "50%" }}
              src={DevImage}
              alt="experience"
            />
          </div>
          <div className="row text-center d-inline-flex">{project}</div>
        </div>
      </div>

  
    </section>
  );
};

export default Projects;
