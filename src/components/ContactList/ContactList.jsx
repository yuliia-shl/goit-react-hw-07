import { useSelector } from 'react-redux';
import Contacts from '../Contact/Contact';
import s from './ContactList.module.css';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {loading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {contacts.length > 0 && !loading ? (
        <ul className={s.list}>
          {filteredContacts.map(contact => (
            <li key={contact.id} className={s.item}>
              <Contacts id={contact.id} name={contact.name} number={contact.number} />
            </li>
          ))}
        </ul>
      ) : (
        !loading && !error && <p>Add your first contact</p>
      )}
    </div>
  );
};

export default ContactList;
