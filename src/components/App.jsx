import 'modern-normalize';
import '../index.css';
import './App.css';

import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';

function App() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.contacts);

  // Викликаємо операцію запиту для отримання контактів
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="mainWrap">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <b>Loading contacts...</b>}
        {error && <b>{error}</b>}
        {items.length > 0 && <ContactList />}
      </div>
    </>
  );
}

export default App;
