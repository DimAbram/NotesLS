import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../../UI'

import st from './Documents.module.scss'


const docs = [
	{
		title: 'Боевой устав',
		num: '1',
		date: '04.01.2021',
		link: '/doc/BY',
		linkContent: '/doc/BYcontent',
	},
	{
		title: 'Устав службы',
		num: '2',
		date: '04.01.2021',
		link: '/doc/YS',
		linkContent: '/doc/YScontent',
	},
	{
		title: 'Приложение к боевому уставу',
		num: '1',
		date: '04.01.2021',
		link: '/doc/PBY',
		linkContent: '/doc/PBYcontent',
	},
]


export const Documents = () => {
	return <div className={st.container}>
		{docs.map((el)=>{
			return (
				<div key={el.title} className={st.container__el}>
					<div className={st.container__title}>{el.title}</div>
					<div className={st.container__buttons}>
						<Button type='middle'>
							<Link to={el.link} className={st.link}>
								Открыть документ
							</Link>
						</Button>
						<Button type='middle'>
							<Link to={el.linkContent} className={st.link}>
								Открыть оглавления
							</Link>
						</Button>
					</div>
				</div>
			)
		})}
	</div>
}
