import React, { useState } from 'react'

import NoteItem from '../NoteItem'

import st from './notes.module.scss'

export const Notes = () => {
	const [notes, setNotes] = useState([
		{
			id: '1',
			title: 'number 1',
			dateCreate: new Date(),
			dateUpdate: new Date(),
			favorites: ['id1', 'id2', 'id3'],
		},
		{
			id: '2',
			title: 'number 2',
			dateCreate: new Date(),
			dateUpdate: new Date(),
			favorites: ['id6', 'id5', 'id7'],
		},
	])
	return (
		<div className={st.container}>
			{notes.map(note => (
				<NoteItem title={note.title} favorites={note.favorites} key={note.id} />
			))}
			<div className={st.add}>
				Добавить новую заметку
				<div className={st.circle}>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	)
}
