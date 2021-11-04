import api from "./serverApi";

export const getProjectsApi = () => {
  return api.get("/projects/");
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
