import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function unsetToken() {
  axios.defaults.headers.common.Authorization = "";
}

export async function postRegister(userData) {
  const { data } = await axios.post("/users/signup", userData);
  return data;
}

export async function postLogin(userData) {
  const { data } = await axios.post("/users/login", userData);
  return data;
}

export async function LogOut() {
  await axios.post("/users/logout");
}

export async function getContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function postContact(newContact) {
  const { data } = await axios.post("/contacts", newContact);
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
}

export async function getCurrentUser() {
  const { data } = await axios.get("/users/current");
  return data;
}
