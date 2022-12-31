import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import { ButtonClose } from '../../UI'
import { Modal } from '../../UI'

import { deleteNote } from '../Notes/slice'
import st from './note.module.scss'

export const NoteItem = ({title, favorites, id}) => {
	const [modalQuestionIsVisible, setModalQuestionlVisible] = useState(false)
	const disp=useDispatch()
	const del=()=>{
		disp(deleteNote(id))
		setModalQuestionlVisible(false)
	}
	return (
		<div className={st.container}>
			<ButtonClose action={() => setModalQuestionlVisible(true)} />
			<h3>{title}</h3>
			<ul>
				{favorites.map((l, i) => (
					<li key={i + l}>{l}</li>
				))}
			</ul>
			<Modal
				visible={modalQuestionIsVisible}
				isVisible={setModalQuestionlVisible}
				title='Удалить заметку?'
				type='question'
				action={del}
				cancel={() => setModalQuestionlVisible(false)}
			/>
		</div>
	)
}

