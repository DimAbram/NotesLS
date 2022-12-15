import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { set } from './slice'

import cn from 'classnames'
import styles from './theme.module.scss'

const Theme = () => {
	const theme = useSelector(state => state.theme)
	const dispatch = useDispatch()

	useEffect(() => {
		document.documentElement.dataset.theme = theme
		localStorage.setItem('theme', theme)
	}, [theme])
	const handleChange = () => {
		const next = theme === 'dark' ? 'light' : 'dark'
		dispatch(set(next))
	}
	return (
		<div
			className={cn(styles.root, theme === 'dark' ? styles.dark : styles.light)}
			onClick={handleChange}
		></div>
	)
}

export default Theme
