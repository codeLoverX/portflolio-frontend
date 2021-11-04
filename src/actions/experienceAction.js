import {
  getExperiencesApi,
  updateExperienceApi,
} from "../apis/experienceApi";
import { toastSuccess, toastError } from "../shared/toast";

export const getExperiences = () => async (dispatch) => {
  try {
    const { data } = await getExperiencesApi();
    dispatch({ type: "GET_EXPERIENCES", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateExperience = (experience) => async (dispatch) => {
  try {
    const { data } = await updateExperienceApi( experience);
    if (data){
    dispatch({
      type: "UPDATE_EXEPERIENCE",
      payload: data,
    });
  }
    toastSuccess("Experience Updated Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error while updating experience");
  }
  
};
