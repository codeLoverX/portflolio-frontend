import { sendMessagesApi } from "../apis/messageApi";

export const sendMessage = (message) => async (dispatch) => {
  try {
    const { success } = await sendMessagesApi(message);
    console.log(success)
  } catch (error) {
    console.log(error);
  }
};
