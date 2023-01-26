import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    title: 'note1',
    id: '1',
    favorites: [
      '73. При организации разведки одновременно в нескол..',
      '73. При организации разведки одновременно в нескол..',
      `56. Решающее направление боевых действий на пожаре определяется исходя из следующих принципов (приоритет которых установлен в порядке перечисления):
сли опасные факторы пожара угрожают жизни и здоровью людей
основные силы и средства сосредотачиваются для обеспечения
спасательных работ;
если создается угроза взрыва, обрушения — основные силы и
средства сосредотачиваются и вводятся в местах, где действия
подразделений обеспечат предотвращение взрыва или обрушения;
если горением охвачена часть объекта и оно распространяется на
другие его части или на соседние строения — основные силы и средства
сосредотачиваются и вводятся на участки, где дальнейшее
распространение огня может привести к наибольшему ущербу;
если горением охвачено здание, не представляющее особой
ценности, и создалась угроза близко находящемуся объекту — основные
силы и средства сосредотачиваются и вводятся со стороны негорящего
здания (сооружения);
если горением охвачено отдельно стоящее здание (сооружение) и
нет угрозы распространения огня на соседние объекты — основные силы и
средства сосредотачиваются и вводятся в местах наиболее интенсивного
горения.`,
      `58. Успех тушения пожара достигается:
качественным проведением разведки, правильной оценкой
обстановки и принятием квалифицированного решения по использованию
сил и средств, имеющихся в распоряжении руководителя тушения пожара,
с учетом обоснованного профессионального риска;
правильным определением решающего направления;
своевременным сосредоточением и введением сил и средств на
решающем направлении, умелым их управлением;
быстрым выходом стволыциков на позиции и умелыми их
действиями;
введением в зону горения эффективных огнетушащих веществ и
средств их подачи;
бесперебойной подачей требуемого количества огнетушащих
веществ;
созданием противопожарных разрывов;
высокой тактической выучкой, активными и слаженными
действиями, исполнительской дисциплиной работников МЧС;
высокой боевой готовностью технических средств и умением
спасателей грамотно их эксплуатировать.`,
    ],
  },
];

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action) => [...state, action.payload],
      prepare: (note) => {
        const id = nanoid();
        const favorites = [];
        return {
          payload: {
            title: note,
            id,
            favorites,
          },
        };
      },
    },
    addFavorit: (state, action) => {
      return state.map((note) =>
        action.payload.id === note.id
          ? { ...note, favorites: [...note.favorites, action.payload.favorit] }
          : note,
      );
    },
    deleteFavorit: (state, action) => {
      return state.map((note) =>
        action.payload.id === note.id
          ? {
              ...note,
              favorites: [
                ...note.favorites.filter((_, i) => {
                  return i !== action.payload.index;
                }),
              ],
            }
          : note,
      );
    },

    deleteNote: (state, action) =>
      state.filter((note) => note.id !== action.payload),
  },
});

export default notesSlice.reducer;

export const { addNote, deleteNote, addFavorit, deleteFavorit } =
  notesSlice.actions;
