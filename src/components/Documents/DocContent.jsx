import React, { useState } from 'react'
import { boevoyUstav } from '../../static'
import { nanoid } from 'nanoid'

import cn from 'classnames'
import st from './DocContent.module.scss'
import { Link } from 'react-router-dom'

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
						<div key={nanoid()} className={st.container__cap}>
							<div key={nanoid()} className={st.container__i}>
								<i
									key={nanoid()}
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
									<ul key={nanoid()} className={st.capter__section}>
										{capter.sections.map((section, j) => {
											let link = `/doc/BYcontent/${i}/${j}`
											return (
												<li key={nanoid()}>
													<Link key={nanoid()} to={link} className={st.link}>
														{section.title}
													</Link>
												</li>
											)
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
