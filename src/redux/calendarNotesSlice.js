import { createSlice, nanoid } from '@reduxjs/toolkit';



export const calendarNotesSlice = createSlice({
  name: 'calendarNotes',
  initialState: {
  status: 'loading',
  items: [],
},
  reducers: {
    getNotes: () => {
      const notes = window?.localStorage?.getItem('calendarNotes');
      return {
        status: 'loaded',
        items: notes ? JSON.parse(notes) : [],
      };
    },
    addNote: {
      reducer: (state, action) => {
        localStorage.setItem(
          'calendarNotes',
          JSON.stringify([...state.items, action.payload]),
        );
        return { status: 'loaded', items: [...state.items, action.payload] };
      },
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
      {
        const notes = state.items.filter((note) => note.id !== action.payload);
        localStorage.setItem('calendarNotes', JSON.stringify(notes));
        return {
          status: 'loaded',
          items: notes
        }
      }
  },
});

export default calendarNotesSlice.reducer;

export const { addNote, deleteNote, getNotes } = calendarNotesSlice.actions;
