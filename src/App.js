import React from 'react';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

import './common.css';

const App = () => (
  <div className="containerApp">
    <h1>Phonebook</h1>
    <Form />
    <h2>Contacts</h2>
    <Filter />
    <Contacts />
  </div>
);

export default App;
