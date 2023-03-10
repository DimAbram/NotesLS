import React from 'react';
import { useCalendar } from './hooks/useCalendar';
import { useSelector } from 'react-redux';
import { ReactComponent as Arrow } from '../../static/img/arrow.svg';

import { checkDateIsEqual, checkIsToday, checkInNotes } from '../../utils/date';

import st from './Calendar.module.scss';
import cn from 'classnames';

export const Calendar = ({ selectedDate, selectDate, mode }) => {
  const notes = useSelector((state) => state.calendarNotes.items);
  const { state, functions } = useCalendar({ selectedDate });
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
          {state.weekDaysNames.map((weekDaysName) => (
            <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
          ))}
        </div>
        <div className={st.calendar__days}>
          {state.calendarDays.map((day) => {
            const inNotes = checkInNotes(day.date, notes);
            const isToday = checkIsToday(day.date);
            const gang = 'calendar__day__gang' + day.gang;
            const isSelectedDay = checkDateIsEqual(
              day.date,
              state.selectedDate.date,
            );
            const isAdditionalDay =
              day.monthIndex !== state.selectedMonth.monthIndex;
            return (
              <div
                key={`${day.dayNumber} ${day.monthIndex}`}
                onClick={() => {
                  functions.setSelectedDate(day);
                  selectDate(day.date);
                }}
                className={cn(
                  st.calendar__day,
                  (mode === 0 || mode === day.gang) && st[gang],
                  isToday && st.calendar__today__item,
                  isSelectedDay && st.calendar__selected__item,
                  isAdditionalDay && st.calendar__additional__day,
                )}
                style={
                  inNotes[0] ? {
                    borderLeft: `3px solid ${inNotes[1]}`,
                    borderRight: `3px solid ${inNotes[1]}`,
                  }:{}
                }
              >
                {day.dayNumber}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
