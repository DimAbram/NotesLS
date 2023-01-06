import React from 'react'
import { useCalendar } from './hooks/useCalendar'

import { ReactComponent as Arrow } from '../../static/img/arrow.svg'

import { checkDateIsEquel, checkIsToday } from '../../utils/date'

import st from './Calendar.module.scss'
import cn from 'classnames'

export const Calendar = ({selectedDate, selectDate}) => {
	const {state, functions}=useCalendar({selectedDate})
	return (
		<div className={st.calendar}>
			<div className={st.calendar__header}>
				<Arrow
					onClick={() => functions.onClickArrow('left')}
					className={st.calendar__header__arrow__left}
				/>
				<div>
					{state.monthesNames[state.selectedMonth.monthIndex].month}{' '}
					{state.selectedYear}
				</div>
				<Arrow
					onClick={() => functions.onClickArrow('right')}
					className={st.calendar__header__arrow__right}
				/>
			</div>
			<div className={st.calendar__body}>
				<div className={st.calendar__body__week__names}>
					{state.weekDaysNames.map(weekDaysName => (
						<div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
					))}
				</div>
				<div className={st.calendar__days}>
					{state.calendarDays.map(day => {
						const isToday = checkIsToday(day.date)
						const isSelectedDay = checkDateIsEquel(
							day.date,
							state.selectedDate.date
						)
						const isAdditionalDay =
							day.monthIndex !== state.selectedMonth.monthIndex
						return (
							<div
								key={`${day.dayNumber} ${day.monthIndex}`}
								onClick={() => {
									functions.setSelectedDate(day)
									selectDate(day.date)
								}}
								className={cn(
									st.calendar__day,
									isToday && st.calendar__today__item,
									isSelectedDay && st.calendar__selected__item,
									isAdditionalDay && st.calendar__additional__day
								)}
							>
								{day.dayNumber}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

