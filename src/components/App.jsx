import { Component } from "react";
import Form from "./Form/Form";
import { nanoid } from 'nanoid';

class App extends Component{
  state = {
    contacts: [],
   
  }

  addContact = data => {
    const contact = {
      id: nanoid(),
      ...data,
    }

    this.setState(({ contacts })=>({
      contacts: [contact, ...contacts],
    }));
  };
 

  render() {
    return (
      <>
        <h2>PhoneBook</h2>


        <Form onSubmit={ this.addContact } />
      
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ id, name, number }) => (
            <li key={id}>{ name}</li>
          ))}
        </ul>
      </>
    )
  }
}

export default App;