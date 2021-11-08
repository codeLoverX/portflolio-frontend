import api from "./serverApi";

export const getProjectsApi = () => {
  let data= api.get("/projects/");
  return data;
};

export const updateProjectApi = async (project) => {
  try{
  let {data}= await api.post('/projects/updateProjects/', project);
  if (data.length < 1){
    throw "Data is empty!"
  }
  return data;
  }
  catch(err){
    return {err}
  }
};
