import React from 'react'
import st from './Input.module.scss'
export const Input = ({title, ...rest}) => {
	return (
		<>
			<div className={st.container}>
				{title && <span>{title}: </span>}
				<input type='text' {...rest} />
			</div>
		</>
	)
}
