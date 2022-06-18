import { Component } from "react";
import Form from "./Form/Form";

class App extends Component{
  state = {
    contacts: [],
   
  }

 

  render() {
    return (
      <>
        <h2>PhoneBook</h2>

<Form/>
      
        <h2>Contacts</h2>
        <ul></ul>
      </>
    )
  }
}

export default App;