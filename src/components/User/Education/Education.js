import React, { useEffect } from "react";
import educationImage from "../../../assets/images/education.png";
import { useSelector, useDispatch } from "react-redux";
import { getEducations } from "../../../actions/educationAction";
import { convertDate } from "../../../shared/convertDate";

const Education = ({ reff }) => {
  const dispatch = useDispatch();
  const educations = useSelector((state) => state.educations);

  useEffect(() => {
    dispatch(getEducations());
  }, [dispatch]);

  const education = educations.map((edu) => {
    return (
      <div key={edu._id} className="w-100 mx-auto text-center">
        <h4 className="mb-1 ">
          {edu.title}
        </h4>
        <p className="mb-1" >
          {edu.school}, {edu.city}
        </p>
        <p className="grey-text ">
          {convertDate(edu.startDate)} - {" "}
          {convertDate(edu.endDate)}
        </p>
        <hr className="mb-4" />
      </div>
    );
  });

  return (
    <section
      ref={reff}
      id="education"
      className="w-50s py-2 mx-auto"
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          Education
        </h2>

        <div className="row">
          <div className="col-12 text-center text-lg-left">
            <img
              className="img-fluid mb-3 d-inline"
              src={educationImage}
              alt="education"
              style={{width: "200px", height: "200px"}}
            />
          </div>

          <div className="col-12">
            <div className="row mb-3">{education}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
