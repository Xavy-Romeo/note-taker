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
        JSON.stringify({ notes: notesArray}, null, 2)
    );

    return body;
};

const validateNote = note => {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }

    return true;
};

const deleteNote = (id, notesArray) => {
    for (let i = 0; i < notesArray.length; i++) {
        if (id === notesArray[i].id) {
            notesArray.splice(i, 1);

            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify({ notes: notesArray}, null, 2)
            );
            
            let response = `Deleted note with id: ${id}!`;
            return response;
        }
        if (id !== notesArray[i].id && i === (notesArray.length - 1)) {
            let error = 'Error: Note not found!';
            return error;
        }
    }
};

module.exports = {findById, createNewNote, validateNote, deleteNote};