import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  postRegister,
  postLogin,
  LogOut,
  getCurrentUser,
  setToken,
  unsetToken,
} from "../../servises/api-servise";

export const userRegisterOperation = createAsyncThunk(
  "user/registerOperation",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await postRegister(userData);
      setToken(data.token);
      return data;
    } catch (error) {
      // console.log('error', error.response);
      if (error.response.status === 400) {
        return rejectWithValue("Ошибка создания пользователя");
      }

      if (error.response.status === 500) {
        return rejectWithValue("Ошибка сервера");
      }

      return rejectWithValue(error.message);
    }
  },
);

export const userLoginOperation = createAsyncThunk(
  "user/loginOperation",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await postLogin(userData);
      setToken(data.token);
      return data;
    } catch (error) {
      //   console.log('error', error);
      return rejectWithValue(error.message);
    }
  },
);

export const userLogoutOperation = createAsyncThunk(
  "user/logoutOperation",
  async (_, { rejectWithValue }) => {
    try {
      await LogOut();
      unsetToken();
    } catch (error) {
      //   console.log('error', error);
      return rejectWithValue(error.message);
    }
  },
);

export const getCurrentUserOperation = createAsyncThunk(
  "user/currentUserOperation",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    setToken(persistedToken);

    try {
      const data = await getCurrentUser();
      return data;
    } catch (error) {
      //   console.log('error', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
