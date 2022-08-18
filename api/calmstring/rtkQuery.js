import request, { baseRequest } from "./request";

const apiBaseQuery =
  ({ baseUrl }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await request({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const apiBaseQueryNoAuth =
  ({ baseUrl }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await baseRequest({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default apiBaseQuery;
