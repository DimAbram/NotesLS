import { useMemo, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/notesSlice';

import { Link } from 'react-router-dom';
import { ReactComponent as Star } from '../../static/img/star.svg';
import { DropDawn } from '../../UI';

import { nanoid } from 'nanoid';

import cn from 'classnames';
import st from './ContentBYPage.module.scss';

export const ContentItem = ({ text }) => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [dropDawn, setDropDawn] = useState(false);
  const withDoublePoint = /:/.test(text);
  const [cords, setCords] = useState({ top: 0, left: 0 });
  const starRef = useRef();

  const elem = useMemo(() => {
    if (withDoublePoint) {
      let index = text.indexOf(':', 0);
      let result = [text.slice(0, index + 1), text.slice(index + 2)];
      result[1] = result[1].split(/;\n/).filter((el) => el !== '');
      return result;
    } else return text;
  }, [text, withDoublePoint]);


  return (
    <>
      {withDoublePoint && (
        <ul key={nanoid()} style={{ paddingRight: '30px' }}>
          <Star
            ref={starRef}
            className={st.star}
            onClick={() => {
              setCords({
                top:
                  starRef.current.getBoundingClientRect().top +
                  starRef.current.getBoundingClientRect().height,
                left:
                  starRef.current.getBoundingClientRect().left +
                  starRef.current.getBoundingClientRect().width,
              });
              setDropDawn(true);
            }}
          />
          {elem[0]}
          {elem[1].map((el) => {
            return (
              <li key={nanoid()} style={{ paddingRight: '40px' }}>
                {el}
              </li>
            );
          })}
        </ul>
      )}
      {withDoublePoint || (
        <div key={nanoid()} className={st.content__elem}>
          <Star
            ref={starRef}
            className={st.star}
            onClick={() => {
              setCords({
                top:
                  starRef.current.getBoundingClientRect().top +
                  starRef.current.getBoundingClientRect().height,
                left:
                  starRef.current.getBoundingClientRect().left +
                  starRef.current.getBoundingClientRect().width,
              });
              setDropDawn(true);
            }}
          />
          {elem}
        </div>
      )}

      <DropDawn visible={dropDawn} isVisible={setDropDawn} cords={cords}>
        {notes.length === 0 && (
          <Link to="/notes" className={st.link}>
            У вас пока нет заметок, перейти в заметки?
          </Link>
        )}
        <div className={st.dropDawn}>
          {notes.map((el, i) => {
            return (
              <div
                className={cn(st.dropDawn__slice)}
                onClick={() => {
                  dispatch(
                    addFavorite({
                      id: notes[i].id,
                      favorite: text,
                    }),
                  );
                  setDropDawn(false);
                }}
                key={nanoid()}
              >
                {el.title}
              </div>
            );
          })}
        </div>
      </DropDawn>
    </>
  );
};
