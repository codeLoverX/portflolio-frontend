import {
  getEducationsApi,
  updateEducationApi,
} from "../apis/educationApi";
import { toastSuccess, toastError } from "../shared/toast";

export const getEducations = () => async (dispatch) => {
  try {
    const { data } = await getEducationsApi();
    dispatch({ type: "GET_EDUCATIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateEducation = (education) => async (dispatch) => {
  try {
    for (var [key, value] of education.entries()) {
      console.log(key, value);
    }
    let { data } = await updateEducationApi(education);
    if (data){
    await dispatch({
      type: "UPDATE_EDUCATION",
      payload: data
    });
  }
    toastSuccess("Education Updated Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error while Updated education");
  }
};
