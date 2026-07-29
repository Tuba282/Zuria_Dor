import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Home Page',
  loading: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { setTitle, setLoading } = homeSlice.actions;
export default homeSlice.reducer;
