import {useState} from 'react';
import ModeEditSharpIcon from '@mui/icons-material/ModeEditSharp';
import { ReactComponent as Arrow } from '../../static/img/arrow.svg';
import { checkDateIsEqual, checkIsToday, formateDate } from '../../utils/date';
import { useCalendar } from '../../components/Calendar/hooks/useCalendar';

import cn from 'classnames'
import st from './calendarPicker.module.scss';


export const CalendarPicker = ({date, setDate}) => {
    const [visible, setVisible]=useState(false)
    const { state, functions } = useCalendar({ date });
    return (
      <>
        <div className={st.input}>
          <input
            className={st.input__input}
            type="text"
            value={formateDate(date, 'DD.MM.YYYY')}
            onChange={(e) => setDate(e.target.value)}
          />
          <ModeEditSharpIcon
            className={st.input__icon}
            onClick={() => setVisible(!visible)}
          />
        </div>
        {visible&&<div className={st.calendar}>
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
                      setDate(day.date);
                    }}
                    className={cn(
                      st.calendar__day,
                      isToday && st.calendar__today__item,
                      isSelectedDay && st.calendar__selected__item,
                      isAdditionalDay && st.calendar__additional__day,
                    )}
                  >
                    {day.dayNumber}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
}
      </>
    );
};
