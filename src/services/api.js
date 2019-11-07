import axios from "axios";

import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

//Middleware para enviar o token
api.interceptors.request.use(config => {
  let token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
