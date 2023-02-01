import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import notesReducer from './notesSlice';
import calendarNotes from './calendarNotesSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    notes: notesReducer,
    calendarNotes: calendarNotes,
  },
});
