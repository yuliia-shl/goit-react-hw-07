import 'modern-normalize';
import '../index.css';
import './App.css';

import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';

function App() {
  const dispatch = useDispatch();

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
        <ContactList />
      </div>
    </>
  );
}

export default App;
