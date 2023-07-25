import React from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactListFilter } from './ContactListFilter/ContactListFilter';
import { ContactList } from './ContactList/ContactList';
class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData) this.setState({ contacts: JSON.parse(localData) });
  }
  componentDidUpdate(prevProps, prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContacts = contact => {
    const { contacts } = this.state;
    contacts.some(({ name }) => name === contact.name)
      ? alert(` is already in contacts`)
      : this.setState(prevState => ({
          contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
        }));
  };
  deleteContact = e => {
    e.preventDefault();
    const deleteElemName = e.target.parentNode.firstChild.data;
    const { contacts } = this.state;
    contacts.forEach((e, i) => {
      if (e.name === deleteElemName) this.setState(contacts.splice(i, 1));
    });
  };

  setFilter = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  filterContancts = e => {
    const { contacts, filter } = this.state;
    return contacts.filter(e =>
      e.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  render() {
    const { filter } = this.state;
    return (
      <>
        <ContactForm onSubmit={this.addContacts}></ContactForm>
        <ContactListFilter
          setFilter={this.setFilter}
          filter={filter}
        ></ContactListFilter>
        <ContactList
          contacts={this.filterContancts()}
          deleteContact={this.deleteContact}
        ></ContactList>
      </>
    );
  }
}
export default App;
