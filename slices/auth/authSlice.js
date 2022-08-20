import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request, { baseRequest } from "@api/calmstring/request";
import token from "@api/calmstring/token";

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
};

export const isUserLogedIn = createAsyncThunk(
  "auth/isUserLogedIn",
  async () => {
    const accessToken = token.get.access();
    if (!accessToken) {
      return false;
    }
    try {
      const resposne = await baseRequest.post("auth/token/verify/", {
        access: accessToken,
      });
      await resposne.data;
      return true;
    } catch (error) {
      // if this fails, the user is not logged in
      await token.refreshToken();
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(isUserLogedIn.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(isUserLogedIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
    });
    builder.addCase(isUserLogedIn.rejected, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
    });
  },
});

export const { setSignIn, setUser } = authSlice.actions;

export default authSlice.reducer;
