import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Redux Slices/userSlice';
import moviesReducer from './Redux Slices/moviesSlice';
import gptReducer from './Redux Slices/gptSlice';
import langReducer from './Redux Slices/langSlice'

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config:langReducer,
  },
});

export default appStore;
