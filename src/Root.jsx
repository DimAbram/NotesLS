import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import {
  NotesPage,
  CalendarPage,
  DocPage,
  DocAllTextPage,
  DocContentPage,
  DocTextContent,
  FavoritesPage,
  NotFoundPage,
  TestPage,
} from './pages';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<NotesPage />} />
        <Route path="notes" element={<NotesPage />} />
        <Route path="notes/favorite/:note" element={<FavoritesPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="doc/" element={<DocPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/doc/docAll/:id" element={<DocAllTextPage />} />
        <Route path="/doc/docChapter/:id" element={<DocContentPage />} />
        <Route
          path="/doc/docChapter/:id/:indexChapter/:indexSection"
          element={<DocTextContent />}
        />
        <Route path={'*'} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default Root;
