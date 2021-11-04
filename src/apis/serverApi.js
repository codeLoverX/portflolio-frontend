import axios from "axios";

export const baseURL= "http://localhost:5000"
const api = axios.create({
  baseURL
});


export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default api;

export const domainName= "https://basryback.herokuapp.com/";
