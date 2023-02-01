import React, { useEffect, useState } from 'react';
import { Modal, Input, CalendarPicker } from '../../../UI';
import { useSelector, useDispatch } from 'react-redux';

import { addNote, getNotes } from '../../../redux/calendarNotesSlice';
import { CalendarNoteItem } from './CalendarNoteItem';

import st from './notes.module.scss';
import { Skeleton } from '@mui/material';

export const CalendarNotes = ({ selectedDate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const status = useSelector((state) => state.calendarNotes.status);
  const notes = useSelector((state) => state.calendarNotes.items);
  const dispatch = useDispatch();

  const [modalTitle, setModalTitle] = useState('');

  const [modalDate, setModalDate] = useState( selectedDate);

  const [modalCount, setModalCount] = useState('1');
  const [modalColor, setModalColor] = useState('#e65405');

  useEffect(() => {
    setModalDate(selectedDate);
  }, [selectedDate]);

  useEffect(()=>{
    dispatch(getNotes())
  },[])

  const handleCancelModal = () => {
    setModalDate(modalDate);
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
          year: modalDate.getFullYear(),
          month: modalDate.getMonth() + 1,
          date: modalDate.getDate(),
        },
      }),
    );
    setModalDate(selectedDate);
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
          {status === 'loading' &&
            Array.from({ length: 3 }).map((__, i) => (
              <Skeleton variant="rounded" width={155} height={155} key={i} />
            ))}
          {status === 'loaded' &&
            notes.map((el) => {
              return <CalendarNoteItem key={el.id} note={el} />;
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
        <div className={st.modal__date__label}>
          Выберете дату: <CalendarPicker date={modalDate} setDate={setModalDate}/>
        </div>
        {/* <div className={st.modal__date__label}>Выберете дату для заметки:</div>
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
        </div> */}
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
