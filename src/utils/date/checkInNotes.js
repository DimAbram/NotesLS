export const checkInNotes = (date, notes) => {
  for (let i = 0; i < notes.length; i++) {
    for (let j = 0; j < notes[i].count; j++) {
      if (
        date.getFullYear() === +notes[i].days[j].year &&
        date.getMonth() === +notes[i].days[j].month &&
        date.getDate() === +notes[i].days[j].date
      )
        return [true, notes[i].color];
    }
  }
  return [false];
};
