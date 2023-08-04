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
    registerUser: builder.mutation({
      query: ({ email, password, password_repeated, signature, inviter }) => ({
        url: "register/",
        method: "post",
        data: { email, password, password_repeated, signature, inviter },
      }),
    }),
    verifyToken: builder.mutation({
      query: ({ token }) => ({
        url: "token/verify/",
        method: "post",
        data: { token },
      }),
    }),
    signIn: builder.mutation({
      query: ({ email, password }) => ({
        url: "login/",
        method: "post",
        data: { email, password },
      }),
    }),
  }),
});

export const {
  useUserExistsQuery,
  useSendEmailVerificationMutation,
  useVerifyEmailMutation,
  useRegisterUserMutation,
  useVerifyTokenMutation,
  useSignInMutation,
} = authApi;
