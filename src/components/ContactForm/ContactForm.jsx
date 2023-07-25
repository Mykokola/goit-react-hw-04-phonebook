import React from "react"
import { FormTitle,FormContact,FormButton} from "./ContactForm.Styled"
import { useState } from "react";
export const ContactForm = ({addContacts}) => {
  // ({number,name,addContacts,addFormNameTel}) =>
  // state = {
  //   name: '',
  //   number: '',
  // }
  const [name,setName] = useState('')
  const [number,setNumber] = useState('')
 const addFormNameTel = e => {
    if(e.target.name==='name') setName(e.target.value)
    else if(e.target.name==='number') setNumber(e.target.value)
    //this.setState({ [e.target.name]: e.target.value });
  };

const  submitForm = e => {
    e.preventDefault()
    addContacts({ name: name, number:number });
    reset();
  }
 const reset = () => {
    setName('')
    setNumber('')
  };
  // render(){ 
  //   const {name,number} = this.state
  return ( 
        <>
        <FormTitle>Phone Book</FormTitle>
        <FormContact onSubmit={submitForm} >
          <label>
            Name
            <input
              onChange={addFormNameTel}
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
              onChange={addFormNameTel}
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
}