import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  // filterChange,
  // deleteContact,
} from './phonebook-actions.js';

axios.defaults.baseURL = 'http://localhost:4040';

export const addContact = (name, number) => dispatch => {
  const contact = { name, number };
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(err => dispatch(addContactError(err)));
};

// eslint-disable-next-line
export default {
  addContact,
};
