import { Outlet, Link } from 'react-router-dom'
import Theme from '../Theme/Theme'
import styles from './Layout.module.scss'

export const Layout = () => {
	return (
		<div className={styles.container}>
			<div className={styles.container__header}>
				<div className={styles.container__links}>
					<Link to='/notes' className={styles.menu}>
						Заметки
					</Link>
					<Link to='/calendar' className={styles.menu}>
						Календарь
					</Link>
					<Link to='/doc' className={styles.menu}>
						Документы
					</Link>
					<Link to='/technique' className={styles.menu}>
						Техника
					</Link>
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
