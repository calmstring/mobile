import { createApi } from "@reduxjs/toolkit/query/react";
import { apiBaseQueryNoAuth } from "@api/calmstring/rtkQuery";

export const authApi = createApi({
  reducerPath: "calmstring/api/auth/",
  baseQuery: apiBaseQueryNoAuth({ baseUrl: "auth/" }),
  endpoints: (builder) => ({
    userExists: builder.query({
      query: (username) => ({
        url: `user/exists/?username=${username}`,
        method: "get",
      }),
    }),
  }),
});

export const { useUserExistsQuery } = authApi;
