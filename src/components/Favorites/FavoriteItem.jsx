import {useMemo, useState} from 'react'
import { useDispatch } from 'react-redux'

import { nanoid } from 'nanoid'
import st from './Favorites.module.scss'
import { ButtonClose, Modal } from '../../UI'
import { deleteFavorit } from '../Notes/slice'

export const FavoriteItem = ({text, iFavorite, id}) => {
	const dispatch = useDispatch()
	const [visible, setVisible]=useState(false)

	const withDoublePoint = /:/.test(text)
	const elem = useMemo(() => {
		if (withDoublePoint) {
			let index = text.indexOf(':', 0)
			let result = [text.slice(0, index + 1), text.slice(index+2)]
			result[1] = result[1].split(/;\n/).filter(el => el !== '')
			return result
		} else return text
	}, [text, withDoublePoint])
	
	const removeFavorite=()=>{
		dispatch(deleteFavorit({
			id:id,
			index:iFavorite
		}))
		setVisible(false)
	}

	return (
		<>
			<div className={st.container}>
				<Modal
					visible={visible}
					isVisible={setVisible}
					title='Удалить заметку?'
					action={removeFavorite}
					type='question'
					cancel={() => setVisible(false)}
				/>
				<ButtonClose
					className={st.close}
					action={() => {
						setVisible(true)
					}}
				/>
				{withDoublePoint && (
					<ul className={st.ul} key={nanoid()}>
						{elem[0]}
						{elem[1].map(el => {
							return <li key={nanoid()}>{el}</li>
						})}
					</ul>
				)}
				{withDoublePoint || (
					<div key={nanoid()} className={st.content__elem}>
						{elem}
					</div>
				)}
			</div>
		</>
	)
}
