// import React, { Component } from 'react';
// import Container from './components/Container';
// import ContactForm from './components/FormContacts';
// import ContactList from './components/ListContacts';
// import Filter from './components/Filter';
// import { v4 as uuidv4 } from 'uuid';
// import './App.css';

import Container from './components/Container';
import ContactForm from './components/FormContacts';
import Filter from './components/Filter';
import ContactList from './components/ListContacts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3700} />
    </Container>
  );
}

export default App;
