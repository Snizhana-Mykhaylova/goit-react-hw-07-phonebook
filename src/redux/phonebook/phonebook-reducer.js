import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  // addContactRequest,
  addContactSuccess,
  // addContactError,
  filterChange,
  deleteContact,
} from './phonebook-actions.js';

const contactsReducer = createReducer([], {
  [addContactSuccess]: (state, { payload }) => {
    // const normalizedName = payload.name.toLowerCase();
    // if (state.find(contact => contact.name.toLowerCase() === normalizedName)) {
    //   alert(`${payload.name} is already in contacts`);
    //   return;
    // }
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
