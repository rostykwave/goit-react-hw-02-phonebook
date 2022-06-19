import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <span>
          {name}: {number}
        </span>
        <button
          type="button"
          onClick={() => onDeleteContact(id)}
          className={s.deleteBtn}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
