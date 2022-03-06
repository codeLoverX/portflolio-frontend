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
      <div key={proj._id} className="">
        <img
          src={`${baseURL}/uploads/projects/${proj.projectImage}`}
          alt={proj.title}
          className = "image-responsive"
        />
        <div className="row">
          <div className="text-left">
            <h4 className="mt-3 mb-1">
              {proj.title}
            </h4>
            <p className="mb-2 largeFont" >
              {proj.description}
            </p>
            <p
              className="mb-2 largeFont"
            >
              Technologies:   {proj.technologies}
            </p>
            <p
              className="mb-2 largeFont"
            >
              <a href={ `${proj.link}`} target="_blank" className="btn btn-light text-dark">View project</a>
            </p>
            <hr className="mb-4" />
          </div>
        </div>
      </div>

    );
  });

  // const project =

  //   <div key={1} className="">
  //     <img
  //       src={DevImage}
  //       alt="dev"
  //       className="image-responsive"
  //     />
  //     <div className="row">
  //       <div className="text-left">
  //         <h4 className="mt-3 mb-1">
  //           Hi          
  //         </h4>
  //         <p className="mb-2 largeFont" >
  //           Bye          
  //           </p>
  //         <p
  //           className="mb-2 largeFont"
  //         >
  //           Technologies:   Tech
  //         </p>
  //         <p
  //           className="mb-2 largeFont"
  //         >
  //           <a href={`port`} target="_blank" className="btn btn-light text-dark">View project</a>
  //         </p>
  //         <hr className="mb-4" />
  //       </div>
  //     </div>
  //   </div>



  return (
    <section
      id="projects"
      ref={reff}
      className="text-center py-2  mx-auto"
    >

      <div className="">

        <h2 className="h1-responsive font-weight-bold mb-3">Projects</h2>
        <div className="">
          <div className="col-12 text-center text-lg-left">

            <img
              className="img-fluid rounded-full mb-5 d-lg-inline"
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
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
