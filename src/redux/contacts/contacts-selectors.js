import { createSelector } from "@reduxjs/toolkit";

export const getFilter = state => state.contacts.filter;
export const getContactsList = state => state.contacts.contacts;
export const getStatus = state => state.contacts.status;
export const getError = state => state.contacts.error;

export const getFilterContacts = createSelector(
  [getContactsList, getFilter],
  (contacts, filter) => {
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase),
    );
  },
);
