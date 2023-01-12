import React from 'react';
import { nanoid } from 'nanoid'
import { boevoyUstav } from '../../static'
import st from './DocAll.module.scss'
import { ContentItem } from '../../pages/ContentBYPage/ContentItem';
export const DocBY = () => {
	return (
		<>
			<div className={st.header}>
				<h4>{boevoyUstav.title}</h4>
				<span>{boevoyUstav.header}</span>
			</div>
			{boevoyUstav.capters.map(el => {
				return (
					<div key={nanoid()}>
						<h4 key={nanoid()}>{el.title}</h4>
						{el.sections.map(section => {
							return (
								<div key={nanoid()}>
									<h4 key={nanoid()}>{section.title}</h4>
									{section.content.map(item => (
										<ContentItem key={nanoid()} text={item} />
									))}
								</div>
							)
						})}
					</div>
				)
			})}
		</>
	)
}

