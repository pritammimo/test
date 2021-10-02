import axios from "axios";
import { getStorage } from "../helpers/apiHelper";
export const baseURL = "http://127.0.0.1:5000"; //development
let axiosInstance = axios.create({
  baseURL,
});
axiosInstance.interceptors.request.use(
  function (config) {
    const token = getStorage("token");
    if (token !== null) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axiosInstance;
