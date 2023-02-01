import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { documents } from '../../static';
import { ContentItem } from './ContentItem';

import st from './ContentBYPage.module.scss';
import { nanoid } from 'nanoid';

export const DocTextContent = () => {
  const { id, indexChapter, indexSection } = useParams();
  const docIndex = documents.findIndex((doc) => id === doc.id);
  let { title, content } =
    documents[docIndex].chapters[indexChapter].sections[indexSection];
  const num = useMemo(() => title.match(/ГЛАВА \d+/)[0], [title]);

  title = title.replace(/ГЛАВА \d+/, '');

  return (
    <div className={st.container}>
      <div className={st.header}>
        <h4>{num}</h4>
        <h4>{title}</h4>
      </div>
      <div className={st.content}>
        {content.map((elem) => (
          <ContentItem text={elem} key={nanoid()} />
        ))}
      </div>
    </div>
  );
};
