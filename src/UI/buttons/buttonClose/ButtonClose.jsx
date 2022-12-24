import React from 'react';
import st from './close.module.scss'
export const ButtonClose = ({action}) => {
	return <div onClick={action} className={st.close}>✖</div>
}
