import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { ButtonClose, Button } from '../../UI';
import { Modal } from '../../UI';

import { deleteNote } from '../../redux/notesSlice';
import st from './note.module.scss';

export const NoteItem = ({ title, favorites, id }) => {
  const refLink = useRef();
  const [showAll, setShowAll] = useState(true);
  const [modalQuestionIsVisible, setModalQuestionsVisible] = useState(false);
  const dispatch = useDispatch();
  const del = () => {
    dispatch(deleteNote(id));
    setModalQuestionsVisible(false);
  };
  return (
    <div
      className={st.container}
      onClick={() => {
        refLink.current.click();
      }}
    >
      <Link to={`/notes/favorite/${id}`} ref={refLink} hidden />
      <ButtonClose
        action={(e) => {
          e.stopPropagation();
          setModalQuestionsVisible(true);
        }}
      />
      <h3>{title}</h3>
      {!favorites.length && (
        <div className={st.zero__favorite}>
          <h5>У вас пока нет добавленых в избранное</h5>
          <Link to={'/doc'} className={st.zero__favorite__link} onClick={(e)=>e.stopPropagation()}>
            Перейти в документы?
          </Link>
        </div>
      )}
      <ul>
        {showAll && favorites.length > 0 && (
          <>
            <li>{favorites[0]}</li>
          </>
        )}
        {!showAll &&
          favorites.map((l, i) => {
            let text = l;
            return <li key={i + l}>{text}</li>;
          })}
      </ul>
      {favorites.length > 1 && (
        <div className={st.button}>
          <Button
            action={(e) => {
              e.stopPropagation();
              setShowAll(!showAll);
            }}
            type="middle"
          >
            {showAll ? 'показать все' : 'скрыть'}
          </Button>
        </div>
      )}
      <Modal
        visible={modalQuestionIsVisible}
        isVisible={setModalQuestionsVisible}
        title="Удалить заметку?"
        type="question"
        action={del}
        cancel={() => setModalQuestionsVisible(false)}
      />
    </div>
  );
};
