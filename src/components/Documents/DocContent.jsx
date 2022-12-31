import React, { useState } from 'react'
import { boevoyUstav } from '../../static'
import { nanoid } from 'nanoid'

import cn from 'classnames'
import st from './DocContent.module.scss'

const content = boevoyUstav.capters

export const DocContent = () => {
	let initArrowsCapters = []
	content.forEach((_, i) => (initArrowsCapters[i] = false))
	const [arrowsCapters, setArrowsCapters] = useState(initArrowsCapters)
	return (
		<>
			<h2>{boevoyUstav.title}</h2>
			<div className={st.container}>
				{content.map((capter, i) => {
					return (
						<div className={st.container__cap}>
							<div className={st.container__i}>
								<i
									className={cn(!arrowsCapters[i] ? st.right : st.down)}
									onClick={() => {
										setArrowsCapters(
											arrowsCapters.map((el, ind) => {
												return ind === i ? (el = !el) : el
											})
										)
									}}
								></i>
							</div>
							<div key={nanoid()} className={st.capter}>
								{capter.title}
								{arrowsCapters[i] && (
									<ul className={st.capter__section}>
										{capter.sections.map(section => {
											return <li key={nanoid()}>{section.title}</li>
										})}
									</ul>
								)}
							</div>
						</div>
					)
					
				}
				)}
			</div>
		</>
	)
}
