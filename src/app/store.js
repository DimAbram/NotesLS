import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../components/Theme/slice.js';
import notesReducer from '../components/Notes/slice.js';
import calendarNotes from '../components/Calendar/slice.js';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    notes: notesReducer,
    calendarNotes: calendarNotes,
  },
});
