import { Component } from "react";

class App extends Component{
  state = {
    contacts: [],
    name:'',
  }

  render() {
    return (
      <>
        <h2>PhoneBook</h2>
            <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
        />
        <button type="button">Add contact</button>
        <h2>Contacts</h2>
      </>
    )
  }
}

export default App;