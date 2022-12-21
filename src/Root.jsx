import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import { NotesPage, CalendarPage, DocPage } from './pages'

const Root = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='notes' element={<NotesPage />} />
				<Route path='calendar' element={<CalendarPage />} />
				<Route path='doc/' element={<DocPage />} />
				{/* <Route path='*' element={<NotFound />} /> */}
			</Route>
		</Routes>
	)
}

export default Root
