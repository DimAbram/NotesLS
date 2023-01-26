import React, { useState } from 'react';
import { Calendar, CalendarInfo, CalendarNotes } from '../../components';

import st from './CalendarPage.module.scss';

export const CalendarPage = () => {
  const [selectedDate, selectDate] = useState(new Date());
  const [mode, setMode] = useState(0);

  return (
    <div className={st.page}>
      <div className={st.page__calendar}>
        <Calendar
          selectedDate={selectedDate}
          selectDate={selectDate}
          mode={mode}
        />
        <CalendarInfo mode={mode} setMode={setMode} />
      </div>
      <div className={st.page__notes}>
        <CalendarNotes selectedDate={selectedDate} />
      </div>
    </div>
  );
};
