import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "../components/Admin/Table/Table";
import { updateProject } from "../actions/projectAction";
import { baseURL } from "../apis/serverApi";
import Multifile from "../components/Admin/MultiFile/MultiFile";

function ProjectAdmin() {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const [post, setPost] = useState({ excelFile: '', imageFile: '' });

  const onSubmitEvent = async (event) => {
    event.preventDefault();

    if (post) {
      const formData = new FormData()
      formData.append('excelFile', post['excelFile'][0])
      for (var x = 0; x < post['imageFile'].length; x++) {
        formData.append("imageFile[]", post['imageFile'][x]);
      }
      console.log({ excelFile: post['excelFile'], imageFile: post['imageFile'] })
      console.log({ post })
      await dispatch(updateProject(formData));
    }
  };

  const onChangeEvent = (event) => {
    let files = event.target.files
    let name = event.target.name
    setPost({ ...post, [name]: files })
    console.log({ files, post })
  }

  return (
    <div className="container w-40s mx-auto" style={{ height: "100vh" }}>
      <Table
        title="Project"
        headerText={["Title", "Technologies", "Image"]}
        headerProprities={["title", "technologies", "projectImage"]}
        tableData={projects}
      />
      <Multifile onChangeEvent={onChangeEvent} onSubmitEvent={onSubmitEvent} fileDir="projects/updateProjects" />
    </div>
  );
}

export default ProjectAdmin;
