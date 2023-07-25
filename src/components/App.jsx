import React from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactListFilter } from './ContactListFilter/ContactListFilter';
import { ContactList } from './ContactList/ContactList';
const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const localData = localStorage.getItem('contacts');
    if (localData !== '[]') {
      setContacts([...JSON.parse(localData)]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = contact => {
    contacts.some(({ name }) => name === contact.name)
      ? alert(` is already in contacts`)
      : setContacts(prevState => [{ id: nanoid(), ...contact }, ...prevState]);
  };
  const deleteContact = e => {
    e.preventDefault();
    const deleteElemName = e.target.parentNode.firstChild.data;
    contacts.forEach((e, i) => {
      if (e.name === deleteElemName) {
        let contactCopy = [...contacts];
        contactCopy.splice(i, 1);
        setContacts(contactCopy);
      }
    });
  };

  const seterFilter = e => {
    setFilter(e.target.value);
  };
  const filterContancts = e => {
    return contacts.filter(e =>
      e.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  return (
    <>
      <ContactForm addContacts={addContacts}></ContactForm>
      <ContactListFilter
        setFilter={seterFilter}
        filter={filter}
      ></ContactListFilter>
      <ContactList
        contacts={filterContancts()}
        deleteContact={deleteContact}
      ></ContactList>
    </>
  );
};
export default App;
