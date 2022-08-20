import { createApi } from "@reduxjs/toolkit/query/react";
import apiBaseQuery from "@api/calmstring/rtkQuery";

export const userApi = createApi({
  reducerPath: "calmstring/api/user/",
  baseQuery: apiBaseQuery({ baseUrl: "auth/" }),
  tagTypes: ["myUser"],
  endpoints: (builder) => ({
    getMyUser: builder.query({
      query: () => ({
        url: "user/",
        method: "get",
      }),
      providesTags: [{ type: "myUser" }],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "logout/",
        method: "post",
        data: {},
      }),
    }),
    completeSignUp: builder.mutation({
      query: ({ username, full_name }) => ({
        url: "register/complete/",
        method: "post",
        data: { username, full_name },
      }),
      invalidatesTags: (result, error) => (!error ? [{ type: "myUser" }] : []),
    }),
  }),
});

export const {
  useGetMyUserQuery,
  useLogoutMutation,
  useCompleteSignUpMutation,
} = userApi;
