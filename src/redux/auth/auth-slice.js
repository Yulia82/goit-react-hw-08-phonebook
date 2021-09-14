import {
  userRegisterOperation,
  userLoginOperation,
  userLogoutOperation,
  getCurrentUserOperation,
} from "./auth-operations";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [userRegisterOperation.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [userRegisterOperation.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [userLoginOperation.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [userLoginOperation.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [userLogoutOperation.fulfilled]: (state, { payload }) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [userLogoutOperation.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [getCurrentUserOperation.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
