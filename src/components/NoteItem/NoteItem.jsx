import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteNote } from '../Notes/slice'
import st from './note.module.scss'

export const NoteItem = ({title, favorites, id}) => {
	const disp=useDispatch()
	const del=()=>disp(deleteNote(id))
	return (
		<div className={st.container}>
			<div className={st.close} onClick={del}>✖</div>
			<h3>{title}</h3>
			<ul>
				{favorites.map(l => (
					<li key={l}>{l}</li>
				))}
			</ul>
		</div>
	)
}

