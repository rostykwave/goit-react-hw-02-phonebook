// import { Component } from 'react';
// import s from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Input } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(actions);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label>
          <span>Name</span>
          <Input
            type="text"
            // value={this.state.name}
            // onChange={this.handleChange}
            name="name"
            // pattern="^[a-zA-Zа-яієїґА-ЯҐЄІЇ]+(([' -][a-zA-Zа-яієїґА-ЯҐЄІЇ ])?[a-zA-Zа-яієїґА-ЯҐЄІЇ]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <span>Number</span>
          <Input
            type="tel"
            // value={this.state.number}
            // onChange={this.handleChange}
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={s.form}>
//         <label className={s.formField}>
//           <span className={s.formLabel}>Name</span>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleChange}
//             name="name"
//             className={s.formInput}
//             pattern="^[a-zA-Zа-яієїґА-ЯҐЄІЇ]+(([' -][a-zA-Zа-яієїґА-ЯҐЄІЇ ])?[a-zA-Zа-яієїґА-ЯҐЄІЇ]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>

//         <label className={s.formField}>
//           <span className={s.formLabel}>Number</span>
//           <input
//             type="tel"
//             value={this.state.number}
//             onChange={this.handleChange}
//             name="number"
//             className={s.formInput}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <button type="submit" className={s.submitBtn}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
