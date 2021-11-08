import axios from "axios";

export const baseURL= "https://ridwanbinmonjur-v1.herokuapp.com"
const api = axios.create({
  baseURL
  // for auth
});


export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default api;

