import React from 'react';

import st from './Button.module.scss'
import cn from 'classnames'
// type=big, middle, small
export const Button = ({action, type, children}) => {
	return (
		<button
			onClick={action}
			className={cn(
				st.default,
				type === 'small' && st.small,
				type === 'big' && st.big,
				type === 'middle' && st.middle
			)}
		>
			{children}
		</button>
	)
}
