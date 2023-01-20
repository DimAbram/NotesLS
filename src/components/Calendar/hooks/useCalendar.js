import { useMemo, useState } from 'react'
import {
	createDate,
	createMonth,
	getMonthNames,
	getWeekDaysNames,
	getMonthNumberOfDays,
} from '../../../utils/date'

export const useCalendar = ({ selectedDate: date }) => {
	const [selectedDate, setSelectedDate] = useState(createDate(date))
	const [selectedMonth, setSelectedMonth] = useState(
		createMonth(new Date(selectedDate.year, selectedDate.monthIndex))
	)
	const [selectedYear, setSelectedYear] = useState(selectedDate.year)
	const weekDaysNames = useMemo(() => getWeekDaysNames(), [])
	const monthesNames = useMemo(() => getMonthNames(), [])

	const setSelectedMonthByIndex = monthIndex => {
		setSelectedMonth(createMonth(new Date(selectedYear, monthIndex)))
	}
	const days = useMemo(
		() => selectedMonth.createMonthDays(),
		[selectedMonth]
	)
	const calendarDays = useMemo(() => {
		const monthNumberOfDays = getMonthNumberOfDays(
			selectedMonth.monthIndex,
			selectedYear
		)
		const prevMonthDays = createMonth(
			new Date(selectedYear, selectedMonth.monthIndex - 1)
		).createMonthDays()
		const nextMonthDays = createMonth(
			new Date(selectedYear, selectedMonth.monthIndex + 1)
		).createMonthDays()
		const firstDay = days[0]
		const lastDay = days[monthNumberOfDays - 1]

		const numberOfPrevDays =
			firstDay.dayNumberInWeek !== 0 ? firstDay.dayNumberInWeek - 1 : 6
		const numberOfNextDays = 42 - numberOfPrevDays - lastDay.dayNumber
		const result = []

		for (let i = 0; i < numberOfPrevDays; i++) {
			const inverted = numberOfPrevDays - i
			result[i] = prevMonthDays[prevMonthDays.length - inverted]
		}
		for (let i = numberOfPrevDays; i < 42 - numberOfNextDays; i++) {
			result[i] = days[i - numberOfPrevDays]
		}

		for (let i = 42 - numberOfNextDays; i < 42; i++) {
			result[i] = nextMonthDays[i - 42 + numberOfNextDays]
		}
		return result
	}, [selectedMonth.monthIndex, selectedYear, days])

	const onClickArrow = diraction => {
		const monthIndex =
			diraction === 'left'
				? selectedMonth.monthIndex - 1
				: selectedMonth.monthIndex + 1
		if (monthIndex === -1) {
			const year = selectedYear - 1
			setSelectedYear(year)
			return setSelectedMonth(createMonth(new Date(year, 11)))
		}
		if (monthIndex === 12) {
			const year = selectedYear + 1
			setSelectedYear(year)
			return setSelectedMonth(createMonth(new Date(year, 0)))
		}
		setSelectedMonth(createMonth(new Date(selectedYear, monthIndex)))
	}
	return {
		state: {
			calendarDays,
			weekDaysNames,
			selectedDate,
			selectedMonth,
			selectedYear,
			monthesNames,
		},
		functions: {
			onClickArrow,
			setSelectedMonthByIndex,
			setSelectedDate,
			setSelectedYear,
		},
	}
}
