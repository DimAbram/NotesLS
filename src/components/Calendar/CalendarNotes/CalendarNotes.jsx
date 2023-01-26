import React, { useEffect, useState } from 'react';
import { Modal, Input } from '../../../UI';
import { useSelector, useDispatch } from 'react-redux';

import { addNote } from '../slice';
import { CNI } from './CNI';

import st from './notes.module.scss';

export const CalendarNotes = ({ selectedDate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const notes = useSelector((state) => state.calendarNotes);
  const dispatch = useDispatch();

  const [modalTitle, setModalTitle] = useState('');
  const [modalYear, setModalYear] = useState('' + selectedDate.getFullYear());
  const [modalMonth, setModalMonth] = useState(
    '' + (+selectedDate.getMonth() + 1),
  );
  const [modalDate, setModalDate] = useState('' + selectedDate.getDate());
  const [modalCount, setModalCount] = useState('1');
  const [modalColor, setModalColor] = useState('#e65405');

  useEffect(() => {
    setModalYear('' + selectedDate.getFullYear());
    setModalMonth('' + (+selectedDate.getMonth() + 1));
    setModalDate('' + selectedDate.getDate());
  }, [selectedDate]);

    useEffect(() => {
      localStorage.setItem(
        'calendarNotes',
        JSON.stringify(notes),
      );
    }, [notes]);

  const handleCancelModal = () => {
    setModalYear('' + selectedDate.getFullYear());
    setModalMonth('' + (+selectedDate.getMonth() + 1));
    setModalDate('' + selectedDate.getDate());
    setModalColor('#e65405');
    setModalCount('1');
    setModalTitle('');
    setIsVisible(false);
  };
  const handlerAddNote = () => {
    dispatch(
      addNote({
        title: modalTitle,
        color: modalColor,
        count: +modalCount,
        date1: {
          year: modalYear,
          month: modalMonth,
          date: modalDate,
        },
      }),
    );
    setModalYear(selectedDate.getFullYear());
    setModalMonth(+selectedDate.getMonth() + 1);
    setModalDate(selectedDate.getDate());
    setModalCount('1');
    setModalTitle('');
    setModalColor('#e65405');
    setIsVisible(false);
  };
  return (
    <>
      <h4>Заметки</h4>
      <div className={st.notes}>
        <div className={st.container}>
          {notes.length > 0 &&
            notes.map((el) => {
              return <CNI key={el.id} note={el} />;
            })}
          <div className={st.butadd} onClick={() => setIsVisible(true)}>
            <div>+ Добавить новую заметку</div>
          </div>
        </div>
      </div>

      <Modal
        visible={isVisible}
        isVisible={setIsVisible}
        title="Добавить заметку"
        action={handlerAddNote}
        cancel={handleCancelModal}
      >
        <Input
          value={modalTitle}
          onChange={(e) => setModalTitle(e.target.value)}
          title="Введить название"
        />
        <div className={st.modal__date__label}>Выберете дату для заметки:</div>
        <div className={st.modal__date}>
          <Input
            className={st.modal__date__input}
            value={modalYear}
            onChange={(e) => setModalYear(e.target.value)}
            title="Год"
          />
          <Input
            className={st.modal__date__input}
            value={modalMonth}
            onChange={(e) => setModalMonth(e.target.value)}
            title="Месяц"
          />
          <Input
            className={st.modal__date__input}
            value={modalDate}
            onChange={(e) => setModalDate(e.target.value)}
            title="День"
          />
        </div>
        <Input
          className={st.modal__date__input}
          value={modalCount}
          onChange={(e) => setModalCount(e.target.value)}
          title="Количество дней"
        />
        <Input
          className={st.modal__date__color}
          type="color"
          value={modalColor}
          onChange={(e) => setModalColor(e.target.value)}
          title="Цвет"
        />
      </Modal>
    </>
  );
};
