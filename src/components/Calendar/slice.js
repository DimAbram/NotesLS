import { createSlice, nanoid } from '@reduxjs/toolkit';

const getNotes = () => {
  const notes = window?.localStorage?.getItem('calendarNotes');
  return notes ? JSON.parse(notes):[];
};

const initialState = getNotes();

export const calendarNotesSlice = createSlice({
  name: 'calendarNotes',
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action) => [...state, action.payload],
      prepare: (note) => {
        const id = nanoid();
        let days = Array.from({ length: note.count });
        days = days.map((_, i) => {
          let day = new Date(
            note.date1.year,
            note.date1.month - 1,
            +note.date1.date + i,
          );
          return {
            date: '' + day.getDate(),
            month: '' + day.getMonth(),
            year: '' + day.getFullYear(),
          };
        });
        return {
          payload: {
            id,
            title: note.title,
            color: note.color,
            count: note.count,
            days,
          },
        };
      },
    },
    deleteNote: (state, action) =>
      state.filter((note) => note.id !== action.payload),
  },
});

export default calendarNotesSlice.reducer;

export const { addNote, deleteNote } = calendarNotesSlice.actions;
