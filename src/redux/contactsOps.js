import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://675ecd501f7ad2426996ae70.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // Використовуємо символ підкреслення як ім'я першого параметра
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
  try {
    const response = await axios.post('contacts', body);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
