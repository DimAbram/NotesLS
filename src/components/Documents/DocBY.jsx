import React from 'react';
import { nanoid } from 'nanoid'
import { boevoyUstav } from '../../static'
import st from './DocAll.module.scss'

export const DocBY = () => {
	return (
		<div>
			<div className={st.header}>
				<h4>{boevoyUstav.title}</h4>
				<span>{boevoyUstav.header}</span>
			</div>
			{boevoyUstav.capters.map(el => {
				return (
					<>
						<h4 key={nanoid()}>{el.title}</h4>
						{el.sections.map(section => {
							return (
								<>
									<h4 key={nanoid()}>{section.title}</h4>
									{section.content.map(item => {
										if(/:/.test(item)){
											item=item.split(':')
											item[1]=item[1].split(';')
											item=[item[0], ...item[1]]
											return <ul>{item.map((el, i)=>{
												if(i===0) return (
													<div className={st.content__ul} key={nanoid()}>
														<span>{el}:</span>
													</div>
												)
												if (i === el.lenght-1)return (
													<li className={st.content} key={nanoid()}>
														<span>{el}</span>
													</li>
												)
												return (
													<li className={st.content} key={nanoid()}>
														<span>{el};</span>
													</li>
												)
											})}</ul>
										}
										return (
											<>
												<div className={st.content} key={nanoid()}>
													<span>{item}</span>
												</div>
											</>
										)
									})}
								</>
							)
						})}
					</>
				)
			})}
		</div>
	)
}

