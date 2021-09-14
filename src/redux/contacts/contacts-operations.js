import {
  getContacts,
  deleteContact,
  postContact,
} from "../../servises/api-servise";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchByIdStatus",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      // console.log('error', error);
      return rejectWithValue(error.message);
    }
  },
);

export const postContacts = createAsyncThunk(
  "contacts/postByIdStatus",
  async (data, { rejectWithValue }) => {
    try {
      const newContact = await postContact({
        name: data.name,
        number: data.number,
      });
      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteByIdStatus",
  async (id, { rejectWithValue }) => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
