import axios from "axios";

let defaultConfig = {
  baseURL: "http://127.0.0.1:8000/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
};

// defaultConfig['Authorization'] = (localStorage.getItem('token') ? "Token " + localStorage.getItem('token') : null)

export const DefaultAPIInstance = axios.create(defaultConfig);
