import api from "./serverApi";

export const getSkillsApi = () => {
  return api.get("/skills/");
};

export const updateSkillApi = async (skill) => {
  try {
    let { data } = await api.post('/skills/updateSkills/', skill);
    if (data.length < 1){
      throw "Data is empty!"
    }
    return data;
  }
  catch(err){
    return {err}
  }
};

