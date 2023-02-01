import React, { useEffect, useRef, useState } from 'react';
import { CalendarPicker } from '../UI';

import './test.scss';
export const TestPage = () => {
  const [visible, isVisible] = useState(false);
  const [date, setDate]=useState(new Date())
  return (
    <div>
      <CalendarPicker date={date} setDate={setDate}/>
    </div>
  );
};
