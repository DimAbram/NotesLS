import React from 'react'
import { useDispatch } from 'react-redux'

import { ButtonClose } from '../../UI'

import { deleteNote } from '../Notes/slice'
import st from './note.module.scss'

export const NoteItem = ({title, favorites, id}) => {
	const disp=useDispatch()
	const del=()=>disp(deleteNote(id))
	return (
		<div className={st.container}>
			<ButtonClose action={del}/>
			<h3>{title}</h3>
			<ul>
				{favorites.map((l,i)=> (
					<li key={i+l}>{l}</li>
				))}
			</ul>
		</div>
	)
}

