import { Component } from "react";
import Form from "./Form/Form";
import { nanoid } from 'nanoid';
import ContactList from "./ContactList";
import Container from "./Container";

class App extends Component{
  state = {
    contacts: [],
     filter: '',
   
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
      <Container>
        <h2>PhoneBook</h2>


        <Form onSubmit={ this.addContact } />
      
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
        {/* <ul>
          {this.state.contacts.map(({ id, name, number }) => (
            <li key={id}>{ name}</li>
          ))}
        </ul> */}
      </Container>
    )
  }
}

export default App;