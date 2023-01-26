import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { ButtonClose } from '../../UI';
import { Modal } from '../../UI';

import { deleteNote } from '../Notes/slice';
import st from './note.module.scss';

export const NoteItem = ({ title, favorites, id }) => {
  const [showAll, setShowAll] = useState(false);
  const [modalQuestionIsVisible, setModalQuestionlVisible] = useState(false);
  const disp = useDispatch();
  const del = () => {
    disp(deleteNote(id));
    setModalQuestionlVisible(false);
  };
  return (
    <div className={st.container}>
      <ButtonClose action={() => setModalQuestionlVisible(true)} />
      <h3>
        <Link to={`/notes/favorite/${id}`} className={st.link}>
          {title}
        </Link>
      </h3>
      {favorites.length === 0 && (
        <div className={st.zero__favorit}>
          <h5>У вас пока нет добавленых в избранное</h5>
          <Link to={'/doc'} className={st.zero__favorit__link}>
            Перейти в документы?
          </Link>
        </div>
      )}
      {favorites.length <= 2 && (
        <ul>
          {favorites.map((l, i) => {
            let text = l.substr(0, 50);
            return <li key={i + l}>{text}...</li>;
          })}
        </ul>
      )}
      {favorites.length > 2 && showAll && (
        <ul>
          {favorites.map((l, i) => {
            let text = l.substr(0, 50);
            return <li key={i + l}>{text}...</li>;
          })}
          <div className={st.show} onClick={() => setShowAll(!showAll)}>
            ...скрыть
          </div>
        </ul>
      )}
      {favorites.length > 2 && showAll === false && (
        <ul>
          <li>{favorites[0].substr(0, 50)}...</li>
          <li>{favorites[1].substr(0, 50)}...</li>
          <div className={st.show} onClick={() => setShowAll(!showAll)}>
            ...показать все
          </div>
        </ul>
      )}
      <Modal
        visible={modalQuestionIsVisible}
        isVisible={setModalQuestionlVisible}
        title="Удалить заметку?"
        type="question"
        action={del}
        cancel={() => setModalQuestionlVisible(false)}
      />
    </div>
  );
};
