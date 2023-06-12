import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,

  reducers: {
    checkStatus: (state) => state,
  },
});

export default categoriesSlice.reducer;
