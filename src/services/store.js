import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './Home/homeSlice/homeSlice';
import aboutReducer from './About/aboutSlice/aboutSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    about: aboutReducer,
  },
});
