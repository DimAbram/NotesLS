import React, { useState } from 'react';
import { ButtonClose } from '../../../UI';
import { Modal } from '../../../UI';
import { formateDate } from '../../../utils/date/formateDate';
import { deleteNote } from '../../../redux/calendarNotesSlice';
import { useDispatch } from 'react-redux';
import st from './notes.module.scss';

export const CalendarNoteItem = ({ note }) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const handleDelete=()=> dispatch(deleteNote(note.id));
  return (
    <div className={st.note} style={{ backgroundColor: note.color }}>
      <ButtonClose action={() => setModal(true)} />
      <div className={st.note__title}>{note.title}</div>
      <div className={st.note__date}>
        {note.count === 1 && (
          <span>
            Дата:{' '}
            {formateDate(
              new Date(
                note.days[0].year,
                note.days[0].month,
                note.days[0].date,
              ),
              'DD.MM.YYYY',
            )}
          </span>
        )}
        {note.count > 1 && (
          <span>
            C{' '}
            {formateDate(
              new Date(
                note.days[0].year,
                note.days[0].month,
                note.days[0].date,
              ),
              'DD.MM.YYYY',
            )}{' '}
            по{' '}
            {formateDate(
              new Date(
                note.days[note.count - 1].year,
                note.days[note.count - 1].month,
                note.days[note.count - 1].date,
              ),
              'DD.MM.YYYY',
            )}
          </span>
        )}
        <div className={st.note__count}>Кол-во дней:{note.count}</div>
      </div>
      <Modal
        visible={modal}
        isVisible={setModal}
        title="Удалить заметку?"
        type="question"
        action={handleDelete}
        cancel={() => setModal(false)}
      />
    </div>
  );
};
