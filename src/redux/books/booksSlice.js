import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TlA8xDg8RJ8V9ECNyGY1/books';

export const fetchBook = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (error) {
    return error;
  }
});

export const creatBook = createAsyncThunk('books/createBook', async (book, thunkAPI) => {
  const elm = JSON.stringify(book);
  try {
    await axios.post(url, elm, { headers: { 'Content-Type': 'application/json' } });
    const response = thunkAPI.dispatch(fetchBook());
    return response;
  } catch (error) {
    return error;
  }
});

export const removesBook = createAsyncThunk('books/removesBook', async (id, thunkAPI) => {
  try {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TlA8xDg8RJ8V9ECNyGY1/books/${id}`);
    const response = thunkAPI.dispatch(fetchBook());
    return response;
  } catch (error) {
    return error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const filterdBook = state.books.filter((item) => item.id !== action.payload);
      state.books = filterdBook;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.books = [];
      Object.keys(action.payload).forEach((element) => {
        const book = action.payload[element][0];
        state.books.push({
          id: element, title: book.title, author: book.author, category: book.category,
        });
      });
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
