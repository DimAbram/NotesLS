import React from 'react';
import {Link} from 'react-router-dom'

import st from './notFound.module.scss'

export const NotFoundPage = () => {
  return (
    <div className={st.container}>
      <h3>Страница не найдена</h3>
      <Link to={'/notes'} className={st.link}>
        перейти в заметки?
      </Link>
    </div>
  );
};
