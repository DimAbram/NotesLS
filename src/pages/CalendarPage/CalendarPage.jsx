import React, { useState } from 'react'
import { Calendar } from '../../components'

export const CalendarPage = () => {
	const [selectedDate, selectDate]=useState(new Date())

	
	return <Calendar selectedDate={selectedDate} selectDate={selectDate} />
}
