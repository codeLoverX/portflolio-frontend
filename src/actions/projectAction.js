import {
  getProjectsApi,
  updateProjectApi,
} from "../apis/projectApi";
import { toastSuccess, toastError } from "../shared/toast";

export const getprojects = () => async (dispatch) => {
  try {
    const { data } = await getProjectsApi();
    dispatch({ type: "GET_PROJECTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const updateProject = (project) => async (dispatch) => {
  try {
    console.log(project.entries()['excelFile']);
    const { data } = await updateProjectApi(project);
    if (data) {
      await dispatch({
        type: "UPDATE_PROJECT",
        payload: data,
        //payload:{...project,_id: data.project._id},
      });
    }
    toastSuccess("Project Updated Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error while updating project");
  }
};
