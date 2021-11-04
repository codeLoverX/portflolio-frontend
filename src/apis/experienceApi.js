import api from "./serverApi";

export const getExperiencesApi = () => {
  return api.get("/experiences/");
};

export const updateExperienceApi = async (experience) => {
  try {
  let {data}= await api.post('/experiences/updateExperiences/', experience);
  if (data.length < 1){
    throw "Data is empty!"
  }
  return data;
  }
  catch(err){
    return {err}
  }
};
