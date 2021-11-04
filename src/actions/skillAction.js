import {
  getSkillsApi,
  updateSkillApi,
} from "../apis/skillApi";
import { toastSuccess, toastError } from "../shared/toast";

export const getSkills = () => async (dispatch) => {
  try {
    const { data } = await getSkillsApi();
    dispatch({ type: "GET_SKILLS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateSkill = (skill) => async (dispatch) => {
  try {
    for (var [key, value] of skill.entries()) {
      console.log(key, value);
    }
    const { data } = await updateSkillApi(skill);
    if (data) {
      await dispatch({
        type: "UPDATE_SKILL",
        payload: data,
      });
      toastSuccess("Skill updated successfully");
    }
  } catch (error) {
    console.log(error);
    toastError("Error while updating Skill");
  }
};
