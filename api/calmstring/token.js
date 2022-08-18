import { secureStore } from "@lib";
import axios from "axios";

const CALMSTRING_ACCESS_TOKEN_KEY = "CALMSTRING_ACCESS_TOKEN_KEY";
const CALMSTRING_REFRESH_TOKEN_KEY = "CALMSTRING_REFRESH_TOKEN_KEY";

const token = {
  get: {
    access: () => {
      return secureStore.get(CALMSTRING_ACCESS_TOKEN_KEY);
    },
    refresh: () => {
      return secureStore.get(CALMSTRING_REFRESH_TOKEN_KEY);
    },
  },
  set: {
    access: (token) => {
      return secureStore.save(CALMSTRING_ACCESS_TOKEN_KEY, token);
    },
    refresh: (token) => {
      return secureStore.save(CALMSTRING_REFRESH_TOKEN_KEY, token);
    },
  },
  refreshToken: async () => {
    const refreshToken = token.get.refresh();
    if (!refreshToken) {
      throw new Error("No refresh token found");
    }
    try {
      const response = await axios.post(CALMSTRING_REFRESH_TOKEN_URL, {
        refresh: refreshToken,
      });
      const data = await response.data;

      token.set.access(response.access);

      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default token;
