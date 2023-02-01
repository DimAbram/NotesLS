import { createSlice, nanoid } from '@reduxjs/toolkit';

const getNotes = () => {
  const notes = window?.localStorage?.getItem('notes');
  return notes ? JSON.parse(notes) : [];
};

const initialState = getNotes();

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action) => [...state, action.payload],
      prepare: (note) => {
        const id = nanoid();
        const favorites = [];
        return {
          payload: {
            title: note,
            id,
            favorites,
          },
        };
      },
    },
    addFavorite: (state, action) => {
      return state.map((note) =>
        action.payload.id === note.id
          ? { ...note, favorites: [...note.favorites, action.payload.favorite] }
          : note,
      );
    },
    deleteFavorite: (state, action) => {
      return state.map((note) =>
        action.payload.id === note.id
          ? {
              ...note,
              favorites: [
                ...note.favorites.filter((_, i) => {
                  return i !== action.payload.index;
                }),
              ],
            }
          : note,
      );
    },

    deleteNote: (state, action) =>
      state.filter((note) => note.id !== action.payload),
  },
});

export default notesSlice.reducer;

export const { addNote, deleteNote, addFavorite, deleteFavorite } =
  notesSlice.actions;
