import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addNote, deleteNote } from './slice'
import NoteItem from '../NoteItem'

import st from './notes.module.scss'

export const Notes = () => {
	const notes=useSelector(state=>state.notes)
	const dispatch=useDispatch()
	return (
		<div className={st.container}>
			{notes.map(note => (
				<NoteItem
					title={note.title}
					favorites={note.favorites}
					id={note.id}
					key={note.id}
				/>
			))}
			<div className={st.add}>
				Добавить новую заметку +
			</div>
		</div>
	)
}
