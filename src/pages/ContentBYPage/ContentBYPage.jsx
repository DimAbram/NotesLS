import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { boevoyUstav } from '../../static'
import {ContentItem} from './ContentItem'

import st from './ContentBYPage.module.scss'
import { nanoid } from 'nanoid'

export const ContentBYPage = () => {
	const { i, j } = useParams()
	let { title, content } = boevoyUstav.capters[i].sections[j]
	const num = useMemo(() => title.match(/ГЛАВА \d+/)[0], [title])

	title = title.replace(/ГЛАВА \d+/, '')

	return (
		<div className={st.container}>
			<div className={st.header}>
				<h4>{num}</h4>
				<h4>{title}</h4>
			</div>
			<div className={st.content}>
				{content.map(elem => 
					<ContentItem text={elem} key={nanoid()}/>
				)}
			</div>
		</div>
	)
}
