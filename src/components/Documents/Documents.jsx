import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../UI';
import {documents} from '../../static'

import st from './Documents.module.scss';

export const Documents = () => {
  return (
    <div className={st.container}>
      {documents.map((el) => {
        return (
          <div key={el.title} className={st.container__el}>
            <div className={st.container__title}>
              {el.title} № {el.number}
            </div>
              <div className={st.info}>От {el.date}</div>
            <div className={st.container__buttons}>
              <Button type="middle" className={st.button}>
                <Link to={`/doc/docAll/${el.id}`} className={st.link}>
                  Документ
                </Link>
              </Button>
              <Button type="middle" className={st.button}>
                <Link to={`/doc/docChapter/${el.id}`} className={st.link}>
                  Оглавления
                </Link>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
