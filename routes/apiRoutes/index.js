const router = require('express').Router();

const {findById, createNewNote, validateNote} = require('../../lib/notes');
const { notes } = require('../../db/db.json');

// get all notes route
router.get('/notes', (req, res) => {
    res.json(notes);   
});

// get note by id route
router.get('/note/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    // if id exists, find by id
    if(result) {
        res.json(result)
    }
    else {
        res.sendStatus(404);
    }
});

// post route
router.post('/notes', (req, res) => {
    // set random id to each new note
    req.body.id = (Math.floor((Math.random()*1000000000000000))).toString();
    
    // if data in body is missing or in incorrect format send 400 err
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted');
    }
    else {
        // add note to db.json and notes array 
        const note = createNewNote(req.body, notes);

        res.json(note);
    }
});

// // delete route
// router.delete('/notes/:id')

module.exports = router;