import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./slices/auth/registrationSlice";
import authReducer from "./slices/auth/authSlice";

import { authApi } from "./services/authApi";
import { userApi } from "@services/userApi";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, userApi.middleware]),
});
