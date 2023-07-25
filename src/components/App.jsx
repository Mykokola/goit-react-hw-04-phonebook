import React from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactListFilter } from './ContactListFilter/ContactListFilter';
import { ContactList } from './ContactList/ContactList';
const App = () => {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };
  const [contacts,setContacts] = useState([])
  const [filter,setFilter] = useState('')
  useEffect(() => {
    const localData = localStorage.getItem('contacts');
    if (localData !== '[]') {
      let q = [...JSON.parse(localData)]
      setContacts(q);
    }
  }, [])
  // componentDidMount() {
  //   const localData = localStorage.getItem('contacts');
  //   if (localData) this.setState({ contacts: JSON.parse(localData) });
  // }
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts])
  // componentDidUpdate(prevProps, prevState) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  // }

  const addContacts = contact => {
    // const { contacts } = this.state;
    contacts.some(({ name }) => name === contact.name)
      ? alert(` is already in contacts`)
      : setContacts((prevState) => [{ id: nanoid(), ...contact} , ...prevState]
        );
  };
  const deleteContact = e => {
    e.preventDefault();
    const deleteElemName = e.target.parentNode.firstChild.data;
    // const { contacts } = this.state;
    contacts.forEach((e, i) => {
      if (e.name === deleteElemName)  {
        let contactCopy = [...contacts]
         contactCopy.splice(i,1)
        setContacts(contactCopy)
    // setContacts(contacts.splice(i,1));
      }
    });
  };

  const seterFilter = e => {
    setFilter(e.target.value );
  };
 const  filterContancts = e => {
  //  const { contacts, filter } = this.state;
    return contacts.filter(e =>
      e.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    return contacts
  };
  // render() {
  //   const { filter } = this.state;
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
  }
// }
export default App;
