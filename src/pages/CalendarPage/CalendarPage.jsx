import React, { useState } from 'react'
import { Calendar } from '../../components'



import st from './CalendarPage.module.scss'


export const CalendarPage = () => {
	const [selectedDate, selectDate]=useState(new Date())

	
	return (
		<>
			<Calendar selectedDate={selectedDate} selectDate={selectDate} />
		</>
	)
}
