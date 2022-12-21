import React from 'react'

import st from './note.module.scss'

export const NoteItem = ({title, favorites}) => {
	return (
	<div className={st.container}>
		<h3>{title}</h3>
		<ul>{favorites.map(l=><li key={l}>{l}</li>)}</ul>
	</div>
	)
}

