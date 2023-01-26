import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import {
  NotesPage,
  CalendarPage,
  DocPage,
  DocBYPage,
  DocBYContentPage,
  ContentBYPage,
  FavoritesPage,
} from './pages';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="notes" element={<NotesPage />} />
        <Route path="notes/favorite/:note" element={<FavoritesPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="doc/" element={<DocPage />} />
        <Route path="doc/BY" element={<DocBYPage />} />
        <Route path="doc/BYcontent" element={<DocBYContentPage />} />
        <Route path="doc/BYcontent/:indexCapter/:indexSection" element={<ContentBYPage />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

export default Root;
