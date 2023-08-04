import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./slices/auth/registrationSlice";
import authReducer from "./slices/auth/authSlice";

import { authApi } from "./services/authApi";
import { userApi } from "@services/userApi";
import { roomApi } from "@services/roomApi";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [roomApi.reducerPath]: roomApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      userApi.middleware,
      roomApi.middleware,
    ]),
});
