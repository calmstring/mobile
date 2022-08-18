import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./screens/Auth/registrationSlice";

import { authApi } from "./services/calmstring/authApi";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
