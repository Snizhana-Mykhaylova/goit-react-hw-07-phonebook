import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');

export const addContactSuccess = createAction('contacts/addContactSuccess');

export const addContactError = createAction('contacts/addContactError');

export const filterChange = createAction('contacts/filterChange');

export const deleteContact = createAction('contacts/deleteContact');
