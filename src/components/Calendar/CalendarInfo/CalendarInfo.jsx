import cn from 'classnames';
import st from './CalendarInfo.module.scss';

export const CalendarInfo = ({ mode, setMode }) => {
  return (
    <div className={st.info}>
      <div className={st.mode}>
        <div className={st.mode__default}>
          <div
            onClick={() => setMode(0)}
            className={cn(st.mode__default__sq, mode === 0 && st.active)}
          >
            <div className={st.mode__default__sq__1}></div>
            <div className={st.mode__default__sq__2}></div>
            <div className={st.mode__default__sq__3}></div>
          </div>
          - все смены
        </div>
        <div className={st.mode__1}>
          <div
            onClick={() => setMode(1)}
            className={cn(st.mode__1__sq, mode === 1 && st.active)}
          ></div>
          - первая смена
        </div>
        <div className={st.mode__2}>
          <div
            onClick={() => setMode(2)}
            className={cn(st.mode__2__sq, mode === 2 && st.active)}
          ></div>
          - вторая смена
        </div>
        <div className={st.mode__2}>
          <div
            onClick={() => setMode(3)}
            className={cn(st.mode__3__sq, mode === 3 && st.active)}
          ></div>
          - третья смена
        </div>
      </div>
    </div>
  );
};
