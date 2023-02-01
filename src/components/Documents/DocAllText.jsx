import React from 'react';
import { nanoid } from 'nanoid';
import { documents } from '../../static';
import { useParams } from 'react-router-dom';
import st from './DocAll.module.scss';
import { ContentItem } from '../../pages/ContentPage/ContentItem';
export const DocAllText = () => {
  const { id } = useParams();
  const docIndex = documents.findIndex((doc) => id === doc.id);
  return (
    <>
      <div className={st.header}>
        <h4>{documents[docIndex].title}</h4>
        <span>{documents[docIndex].header}</span>
      </div>
      {documents[docIndex].chapters.map((el) => {
        return (
          <div key={nanoid()}>
            <h4 key={nanoid()}>{el.title}</h4>
            {el.sections.map((section) => {
              return (
                <div key={nanoid()}>
                  <h4 key={nanoid()}>{section.title}</h4>
                  {section.content.map((item) => (
                    <ContentItem key={nanoid()} text={item} />
                  ))}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
