import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addNote } from '../../redux/notesSlice';
import NoteItem from '../NoteItem';

import st from './notes.module.scss';
import { Modal, Input } from '../../UI';

export const Notes = () => {
  const [modalIsVisible, setIsModalVisible] = useState(false);
  const [modalInputTitle, setIsModalInputTitle] = useState('');
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handlerAddNote = () => {
    if (modalInputTitle === '') {
      setIsModalVisible(false);
      return;
    }
    dispatch(addNote(modalInputTitle));
    setIsModalInputTitle('');
    setIsModalVisible(false);
  };
  const handleChangeInputTitle = (e) => {
    setIsModalInputTitle(e.target.value);
  };
  const cancelModal = () => {
    setIsModalVisible(false);
    setIsModalInputTitle('');
  };
  return (
    <div className={st.container}>
      {notes.length === 0 && (
        <div className={st.zero__element}>
          <h3>У вас пока нет заметок</h3>
        </div>
      )}
      {notes.map((note) => (
        <NoteItem
          title={note.title}
          favorites={note.favorites}
          id={note.id}
          key={note.id}
        />
      ))}
      <div className={st.add} onClick={() => setIsModalVisible(true)}>
        Добавить новую заметку +
      </div>
      <Modal
        visible={modalIsVisible}
        isVisible={setIsModalVisible}
        title="Добавить заметку"
        action={handlerAddNote}
        cancel={cancelModal}
      >
        <Input
          value={modalInputTitle}
          onChange={handleChangeInputTitle}
          title="Введить название"
        />
      </Modal>
    </div>
  );
};
