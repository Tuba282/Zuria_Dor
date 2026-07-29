import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  description: 'This is an e-commerce platform built with React, Redux, and Tailwind CSS.',
  loading: false,
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    setDescription: (state, action) => {
      state.description = action.payload;
    }
  },
});

export const { setDescription } = aboutSlice.actions;
export default aboutSlice.reducer;
