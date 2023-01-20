import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
	{
		id: 'gggggggg',
		title: 'Отпуск',
		color: '#e65405',
		count: 1,
		days: [
			{
				date: '20',
				month: '0',
				year: '2023',
			},
		],
	},
	{
		id: 'ggggg',
		title: 'Отпуск',
		color: '#e42305',
		count: 1,
		days: [
			{
				date: '22',
				month: '0',
				year: '2023',
			},
		],
	},
	{
		id: 'ggggggggdsdfsdfg',
		title: 'Отпуск',
		color: '#e77405',
		count: 1,
		days: [
			{
				date: '24',
				month: '0',
				year: '2023',
			},
		],
	},
	{
		id: 'ggggggggdsdfsd;lmlk;mkfg',
		title: 'Отпуск',
		color: '#e65405',
		count: 1,
		days: [
			{
				date: '25',
				month: '0',
				year: '2023',
			},
		],
	},
]

export const calendarNotesSlice = createSlice({
	name: 'calendarNotes',
	initialState,
	reducers: {
		addNote: {
			reducer: (state, action) => [...state, action.payload],
			prepare: note => {
				const id = nanoid()
				let days=Array.from({length:note.count})
				days=days.map((_,i)=>{
					let day =new Date(note.date1.year, note.date1.month-1, +note.date1.date+i)
					return {
						date: '' + day.getDate(),
						month: '' + day.getMonth(),
						year: '' + day.getFullYear(),
					}
				})
				return {
					payload: {
						id,
						title: note.title,
						color: note.color,
						count: note.count,
						days,
					},
				}
			},
		},
		deleteNote: (state, action) =>
			state.filter(note => note.id !== action.payload),
	},
})

export default calendarNotesSlice.reducer

export const { addNote, deleteNote } =
	calendarNotesSlice.actions
