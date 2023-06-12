import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addBook: (state) => state,
    removeBook: (state) => state,
  },
});

export default booksSlice.reducer;
