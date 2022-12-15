import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components';




const Root = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{/* <Route path='calendar/' element={<CalendarPage />} /> */}
				{/* <Route path='doc' element={<DocumentPage />} /> */}
				{/* <Route path='*' element={<NotFound />} /> */}
			</Route>
		</Routes>
	)
}

export default Root