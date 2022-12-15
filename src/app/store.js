import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../components/Theme/slice.js'

export const store = configureStore({
	reducer: {
		theme: themeReducer,
	},
})
