import React, { useEffect } from "react";
import experienceImage from "../../../assets/images/experience.png";
import { useSelector, useDispatch } from "react-redux";
import { getExperiences } from "../../../actions/experienceAction";
import { convertDate } from "../../../shared/convertDate";

const Experience = ({ reff }) => {
  const experiences = useSelector((state) => state.experiences);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExperiences());
  }, [dispatch]);

  const experience = experiences.map((exp) => {
    let startDate= convertDate(exp.startDate);
    let endDate= convertDate(exp.endDate);
    console.log({startDate, endDate})
    return (
      <div key={exp._id} className="col-lg-12">
        <div className="row">
          <div className="col-xl-10 col-md-11 col-10 ms-5 ">
            <p className="normal-font fw-bold mb-2">
              {exp.title}
            </p>
            <p className="normal-font mb-1 text-primary">
              {exp.company}, {exp.city}
            </p>
            <p className="normal-font grey-text" >
              {startDate} -{" "}
              {endDate}
            </p>
            <p className="normal-font grey-text" >
              {exp.description}
            </p>
            
            
            <hr className="mb-4" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <section
      ref={reff}
      id="experience"
      className="w-50s mx-auto"
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-1">
          Experience
        </h2>

        <div className="row">
          <div className="col-12 text-center text-lg-left">
            <img
              className="img-fluid rounded-full mb-5 d-none d-lg-inline"
              style={{width: "200px", height: "200px"}}
              src={experienceImage}
              alt="experience"
            />
          </div>

          <div className="col-12">
            <div className="row mb-1">{experience}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
