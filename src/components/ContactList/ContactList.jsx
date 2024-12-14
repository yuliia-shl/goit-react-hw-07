import { useSelector } from 'react-redux';
import Contacts from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filterName.toLowerCase())
  );
  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={s.item}>
            <Contacts
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
