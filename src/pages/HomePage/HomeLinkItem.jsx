import React from 'react';

import {Link} from 'react-router-dom'

import st from './home.module.scss';

export const HomeLinkItem = ({text, link}) => {
    return (
      <div className={st.container}>
        <div className={st.text}>{text}</div>
        <button>
          <Link to={link} className={st.link}></Link>
        </button>
      </div>
    );
}