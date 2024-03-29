import axios from "axios";
import { CALMSTRING_API_URL } from "@constants/api";
import token from "./token";

export const baseRequest = axios.create({
  baseURL: CALMSTRING_API_URL,
});

const request = axios.create({
  baseURL: CALMSTRING_API_URL,
});

request.interceptors.request.use(
  (config) => {
    const getToken = async () => {
      const accessToken = await token.get.access();
      config.headers = {
        ...config.headers,
        ...{ Authorization: `Bearer ${accessToken}` },
      };
    };
    getToken();

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      return new Promise((resolve, reject) => {
        const originalRequest = error.config;
        try {
          originalRequest._retry = true;
          resolve(
            token.refreshToken().then((response) => {
              originalRequest.headers = {
                ...originalRequest.headers,
                ...{ Authorization: `Bearer ${response.access}` },
              };
              return axios(originalRequest);
            })
          );
        } catch (e) {
          reject(e);
        }
      });
    } else {
      throw error;
    }
  }
);

export default request;
