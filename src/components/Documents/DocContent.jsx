import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { documents } from '../../static';
import { nanoid } from 'nanoid';

import cn from 'classnames';
import st from './DocContent.module.scss';
import { Link } from 'react-router-dom';

export const DocContent = () => {
  const { id } = useParams();
  const docIndex = documents.findIndex((doc) => id === doc.id);
  const content = documents[docIndex].chapters;
  let initArrowsChapters = [];
  content.forEach((_, i) => (initArrowsChapters[i] = false));
  const [arrowsChapters, setArrowsChapters] = useState(initArrowsChapters);
  return (
    <>
      <h2>{documents[docIndex].title}</h2>
      <div className={st.container}>
        {content.map((chapter, i) => {
          return (
            <div key={nanoid()} className={st.container__cap}>
              <div key={nanoid()} className={st.container__i}>
                <i
                  key={nanoid()}
                  className={cn(!arrowsChapters[i] ? st.right : st.down)}
                  onClick={() => {
                    setArrowsChapters(
                      arrowsChapters.map((el, ind) => {
                        return ind === i ? (el = !el) : el;
                      }),
                    );
                  }}
                ></i>
              </div>
              <div key={nanoid()} className={st.chapter}>
                {chapter.title}
                {arrowsChapters[i] && (
                  <ul key={nanoid()} className={st.chapter__section}>
                    {chapter.sections.map((section, j) => {
                      let link = `/doc/docChapter/${id}/${i}/${j}`;
                      return (
                        <li key={nanoid()}>
                          <Link
                            key={nanoid()}
                            to={link}
                            className={st.link}
                          >
                            {section.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
