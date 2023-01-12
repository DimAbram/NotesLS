import { Outlet, NavLink } from 'react-router-dom'
import Theme from '../Theme/Theme'

import cn from 'classnames'
import styles from './Layout.module.scss'

export const Layout = () => {
	return (
		<div className={styles.container}>
			<div className={styles.container__header}>
				<div className={styles.container__links}>
					<NavLink
						to='/notes'
						className={cn(styles.menu)}
						style={({ isActive }) => ({
							background: isActive ? 'var(--color-additional)' : '',
						})}
					>
						Заметки
					</NavLink>
					<NavLink
						to='/calendar'
						className={cn(styles.menu)}
						style={({ isActive }) => ({
							background: isActive ? 'var(--color-additional)' : '',
						})}
					>
						Календарь
					</NavLink>
					<NavLink
						to='/doc'
						className={cn(styles.menu)}
						style={({ isActive }) => ({
							background: isActive ? 'var(--color-additional)' : '',
						})}
					>
						Документы
					</NavLink>
				</div>
				<div className={styles.theme}>
					<Theme />
				</div>
			</div>
			<div className={styles.content}>
				<Outlet />
			</div>
		</div>
	)
}
