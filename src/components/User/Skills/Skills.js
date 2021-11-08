import React, { useEffect } from "react";
import SkillBar from "react-skillbars";
import { useSelector, useDispatch } from "react-redux";
import { getSkills } from "../../../actions/skillAction";
import MindImage from '../../../assets/images/skills-brain.png';

const Skills = ({ reff }) => {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
    console.log(skills)
  }, [dispatch]);

  const colors = {
    bar: "rgb(171, 182, 194)",
    title: {
      text: "black",
      background: "rgb(171, 182, 194)",
    },
  };

  return (
    <div ref={reff} className="py-3 my-3 ">
      <div className="container w-40s mx-auto">
        <h2 className="h1-responsive font-weight-bold text-center mb-4">
          Skills
        </h2>
        <div className="mx-auto text-center">
          <img
            className="img-fluid rounded-full mb-5 d-lg-inline "
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            src={MindImage}
            alt="experience"
          />
        </div>
        <SkillBar
          height={"25px"}
          skills={skills}
          colors={colors}
          animationDuration={1000}
          style={{ fontWeight: "bold" }}
        ></SkillBar>

      </div>
    </div>
  );
};



export default Skills;
