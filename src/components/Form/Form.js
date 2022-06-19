import { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  // contactId = nanoid();

  // handleNameChange = e => {
  //   this.setState({ name: e.currentTarget.value });
  // }

  // handleNumberChange = e => {
  //   this.setState({ number: e.currentTarget.value });
  // }

  handleChange = e => {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);

    // this.setState({
    //   [e.currentTarget.name]:e.currentTarget.value,
    // });

    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="form-field">
          <span className="form-label">Name</span>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            className="form-input"
            pattern="^[a-zA-Zа-яієїґА-ЯҐЄІЇ]+(([' -][a-zA-Zа-яієїґА-ЯҐЄІЇ ])?[a-zA-Zа-яієїґА-ЯҐЄІЇ]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        {/* <label>
            number
            <input
              type="tel"
                   value={this.state.number}
              onChange={this.handleChange}
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
          </label> */}
        <button type="submit" className="submit-btn">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
