import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSkill } from "../actions/skillAction";
import Table from "../components/Admin/Table/Table";
import ExcelClient from "../components/Admin/ExcelClient/ExcelClient";


const SkillAdmin = () => {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  const [post, setPost] = useState(null);

  const onSubmitEvent = async (event) => {
    event.preventDefault();
    if (post) {
      const formData = new FormData()
      formData.append('excelFile', post[0])
      await dispatch(updateSkill(formData));
    }
  };

  const onChangeEvent = (event) => {
    var files = event.target.files
    console.log({ files })
    setPost(files)
  }

  return (
    <div className="skill" >
      <div className="container w-50s mx-auto" style={{ height: "100vh" }}>
        <Table
          title="Skill"
          headerText={["Name", "Level"]}
          headerProprities={["type", "level"]}
          tableData={skills}
        />
        <ExcelClient onChangeEvent={onChangeEvent} onSubmitEvent={onSubmitEvent} fileDir="skills/updateSkills" />
      </div>
    </div>
  );
};

export default SkillAdmin;
