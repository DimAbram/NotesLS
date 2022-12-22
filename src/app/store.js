import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../components/Theme/slice.js'
import notesReducer from '../components/Notes/slice.js'


export const store = configureStore({
	reducer: {
		theme: themeReducer,
		notes: notesReducer,
	},
})
