import React from "react"
import { FormTitle,FormContact,FormButton} from "./ContactForm.Styled"
export class ContactForm extends React.Component {
  // ({number,name,addContacts,addFormNameTel}) =>
  state = {
    name: '',
    number: '',
  }

  addFormNameTel = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault()
    this.props.onSubmit({ name: this.state.name, number: this.state.number });
    this.reset();
  }
  reset = () => {
    this.setState({ number: '', name: '' });
  };
  render(){ 
    const {name,number} = this.state
  return ( 
        <>
        <FormTitle>Phone Book</FormTitle>
        <FormContact onSubmit={this.submitForm} >
          <label>
            Name
            <input
              onChange={this.addFormNameTel}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
          Tel:
            <input
              onChange={this.addFormNameTel}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <FormButton type="submit">Add contact</FormButton>
        </FormContact>
        </>
    )
}}