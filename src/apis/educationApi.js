import api from "./serverApi";

export const getEducationsApi = () => {
  return api.get("/educations/");
};

export const updateEducationApi = async (education) => {
  try {
    let { data } = await api.post('/educations/updateEducations/', education);
    if (data.length < 1){
      throw "Data is empty!"
    }
    return data;
  }
  catch (err) {
    return { err };
  }
};
