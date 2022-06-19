import './ContactList.css';

const ContactList = ({ contacts }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
      </li>
    ))}
  </ul>
);

export default ContactList;
