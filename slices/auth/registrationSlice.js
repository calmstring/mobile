import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inviter: null,
  email: null,
  email_signature: null,
  username: null,
  currentStep: "inviter",
  completed: false,
  isSSO: false,
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    reset: (state) => {
      state.inviter = null;
      state.email = null;
      state.email_signature = null;
      state.username = null;
      state.fullName = null;
      state.currentStep = "inviter";
      state.isSSO = false;
      state.completed = false;
    },
    setInviter: (state, action) => {
      state.completed = false;
      state.inviter = action.payload;
      state.currentStep = "email";
    },
    setEmail: (state, action) => {
      state.completed = false;
      state.email = action.payload;
      state.currentStep = "email_signature";
    },
    setEmailSignature: (state, action) => {
      state.completed = false;
      state.email_signature = action.payload;
      state.currentStep = "username";
    },
    setUsername: (state, action) => {
      state.username = action.payload;
      state.completed = true;
    },
    setSSO: (state, action) => {
      state.isSSO = action.payload;
      state.currentStep = "username";
    },
  },
});

export const { reset, setInviter, setEmail, setEmailSignature, setUsername } =
  registrationSlice.actions;

export default registrationSlice.reducer;
