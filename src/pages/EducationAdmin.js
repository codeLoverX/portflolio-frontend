import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateEducation } from "../actions/educationAction";
import ExcelClient from "../components/Admin/ExcelClient/ExcelClient";
import Table from "../components/Admin/Table/Table";

function EducationAdmin() {
  const educations = useSelector((state) => state.educations);

  const dispatch = useDispatch();
  const [post, setPost] = useState(null);

  const onSubmitEvent = async (event) => {
    event.preventDefault();
    if (post) {
      const formData = new FormData()
      // create an artificial form for multer 
      formData.append('excelFile', post[0])
      for (var [key, value] of formData.entries()) { 
        console.log(key, value);
      }
      // let form = event.target;
      // // using form.elements which allows you to query each field by it's name,
      // console.log(form.elements['excelFile'].value);
      await dispatch(updateEducation(formData));
    }
  };

  const onChangeEvent = (event) => {
    var files = event.target.files
    console.log({ files })
    setPost(files)
  }

  return (
    <div className="container w-50s mx-auto" style={{ height: "100vh" }}>
      <Table
        // ondelteClick={ondelteClick}
        // onEditClick={onEditClick}
        idModalAdd="addEducation"
        idModalEdit="editEducation"
        title="Education"
        headerText={["Title", "School", "City", "Start Date", "End Date"]}
        headerProprities={["title", "school", "city", "startDate", "endDate"]}
        tableData={educations}
      />
      <br />
      <ExcelClient onChangeEvent={onChangeEvent} onSubmitEvent={onSubmitEvent} fileDir="educations/updateEducations"/>
    </div>
  );
}

export default EducationAdmin;
