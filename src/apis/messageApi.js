import api from "./serverApi";

export const sendMessagesApi = (message) => {
  return api.post("/message/sendMessage", message);
};


