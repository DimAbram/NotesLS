import { createSlice, nanoid } from '@reduxjs/toolkit'


const initialState = [
	{
		title: 'note1',
		id: 1,
		favorites: [1,2,2]
	},
]

export const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		addNote:{
			reducer: (state, action)=> state.push(action.payload),
			prepare: (note)=>{
				const id= nanoid()
				const favorites=[]
				return {payload:{
					title: note,
					id,
					favorites
			}}}
		},
		deleteNote: (state,action)=>state.filter((note)=>note.id!==action.payload),

	},
})

export default notesSlice.reducer

export const { addNote, deleteNote } = notesSlice.actions