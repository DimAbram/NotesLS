import React from 'react';

import cn from 'classnames'
import st from './Modal.module.scss'
import {ButtonClose, Button} from '../index'



export const Modal = ({type='default',visible, isVisible, title, children, action, cancel}) => {
	return (
		<div
			onClick={() => isVisible(false)}
			className={cn(st.modal, visible && st.active)}
		>
			<div
				className={cn(st.modal__dialog, visible && st.active)}
				onClick={e => e.stopPropagation()}
			>
				<ButtonClose action={() => isVisible(false)} />
				<div className={st.modal__header}>{title}</div>
				{
					(type === 'default' && (
						<div className={st.modal__content}>{children}</div>
					))
				}
				<div className={st.modal__footter}>
					<Button type='middle' action={cancel}>
						Отмена
					</Button>
					<Button type='middle' action={action}>
						OK
					</Button>
				</div>
			</div>
		</div>
	)
}