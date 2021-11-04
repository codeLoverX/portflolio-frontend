import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "../components/Admin/Table/Table";
import { updateExperience } from "../actions/experienceAction";
import ExcelClient from "../components/Admin/ExcelClient/ExcelClient";

const ExperienceAdmin = () => {
  const experiences = useSelector((state) => state.experiences);
  const dispatch = useDispatch();
  const [post, setPost] = useState(null);

  const onSubmitEvent = async (event) => {
    event.preventDefault();
    if (post) {
      const formData = new FormData()
      formData.append('excelFile', post[0])
      await dispatch(updateExperience(formData));
    }
  };

  const onChangeEvent = (event) => {
    var files = event.target.files
    console.log({ files })
    setPost(files)
  }

  return (
    <div className="experience">
      <div className="container w-75 mx-auto" style={{ height: "100vh" }}>
        <Table

          title="Experience"
          headerText={[
            "Title",
            "Company",
            "City",
            "Start Date",
            "End Date",
            "Description",
            "Technologies",
          ]}
          headerProprities={[
            "title",
            "company",
            "city",
            "startDate",
            "endDate",
            "description",
            "technologies",
          ]}
          tableData={experiences}
        />
        <ExcelClient onChangeEvent={onChangeEvent} onSubmitEvent={onSubmitEvent} fileDir="experiences/updateExperiences"/>
      </div>
    </div>
  );
};

export default ExperienceAdmin;
