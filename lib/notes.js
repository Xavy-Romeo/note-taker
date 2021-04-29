const fs = require('fs');
const path = require('path');

const findById = (id, notesArray) => {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

const createNewNote = (body, notesArray) => {
  const note = body;
  // push new note into notes array
  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );

  return body;
};

module.exports = {findById, createNewNote};