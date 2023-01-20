import { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorit } from '../../components/Notes/slice'

import {Link} from 'react-router-dom'
import { ReactComponent as Star } from '../../static/img/star.svg'
import { Modal } from '../../UI'

import { nanoid } from 'nanoid'

import cn from 'classnames'
import st from './ContentBYPage.module.scss'

export const ContentItem = ({ text }) => {
	const [indexNote, setIndexNote] = useState(0)
	const notes = useSelector(state => state.notes)
	const dispatch = useDispatch()
	const [modalStar, setModalStar] = useState(false)
	const withDoublePoint = /:/.test(text)

	const elem = useMemo(() => {
		if (withDoublePoint) {
			let index = text.indexOf(':', 0)
			let result = [text.slice(0, index + 1), text.slice(index + 2)]
			result[1] = result[1].split(/;\n/).filter(el => el !== '')
			return result
		} else return text
	}, [text, withDoublePoint])

	const handleClickStar = () => {
		dispatch(
			addFavorit({
				id: notes[indexNote].id,
				favorit: text,
			})
		)
		setModalStar(false)
	}

	return (
		<>
			{withDoublePoint && (
				<ul key={nanoid()} style={{ paddingRight: '30px' }}>
					<Star
						className={st.star}
						key={nanoid()}
						onClick={() => setModalStar(true)}
					/>
					{elem[0]}
					{elem[1].map(el => {
						return (
							<li key={nanoid()} style={{ paddingRight: '40px' }}>
								{el}
							</li>
						)
					})}
				</ul>
			)}
			{withDoublePoint || (
				<div key={nanoid()} className={st.content__elem}>
					<Star
						className={st.star}
						key={nanoid()}
						onClick={() => setModalStar(true)}
					/>
					{elem}
				</div>
			)}
			<Modal
				visible={modalStar}
				isVisible={setModalStar}
				title='Куда добавить заметку?'
				action={handleClickStar}
				cancel={() => setModalStar(false)}
			>
				{notes.length === 0 && (
					<Link to='/notes' className={st.link}>У вас пока нет заметок, перейти в заметки?</Link>
				)}
				<ul key={nanoid()}>
					{notes.map((el, i) => {
						let backlight = indexNote === i
						return (
							<li
								className={cn(backlight && st.li, st.li__default)}
								onClick={() => setIndexNote(i)}
								key={nanoid()}
							>
								{el.title}
							</li>
						)
					})}
				</ul>
			</Modal>
		</>
	)
}

