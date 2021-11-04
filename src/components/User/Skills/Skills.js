import React, { useEffect } from "react";
import SkillBar from "react-skillbars";
import { useSelector, useDispatch } from "react-redux";
import { getSkills } from "../../../actions/skillAction";

const Skills = ({ reff }) => {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
    console.log(skills)
  }, [dispatch]);

  const colors = {
    bar: "#20374C",
    title: {
      text: "white",
      background: "#20374C",
    },
  };

  return (
    <div ref={reff} className="pt-0 ">
      <div className="container w-50s mx-auto">
        <h2 className="h1-responsive font-weight-bold text-center mb-4">
          Skills
        </h2>
        <SkillBar
          height={"30px"}
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
