import { createDate } from './createDate'

export const getWeekDaysNames = () => {
	const weekDaysNames = Array.from({ length: 7 })
	const d = new Date()
	weekDaysNames.forEach((_, i) => {
		const { day, dayNumberInWeek, dayShort } = createDate(
			new Date(d.getFullYear(), d.getMonth(), i)
		)
		dayNumberInWeek > 0
			? (weekDaysNames[dayNumberInWeek - 1] = { day, dayShort })
			: (weekDaysNames[6] = { day, dayShort })
	})
	return weekDaysNames
}
