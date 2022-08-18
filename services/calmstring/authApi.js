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
    sendEmailVerification: builder.mutation({
      query: ({ email }) => ({
        url: "email/verification/create/",
        method: "post",
        data: { email },
      }),
    }),
    verifyEmail: builder.mutation({
      query: ({ email, code }) => ({
        url: "email/verification/verify/",
        method: "post",
        data: { email, code },
      }),
    }),
  }),
});

export const {
  useUserExistsQuery,
  useSendEmailVerificationMutation,
  useVerifyEmailMutation,
} = authApi;
