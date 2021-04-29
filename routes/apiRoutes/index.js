const router = require('express').Router();

const { notes } = require('../../db/db.json');

// get all notes route
router.get('/notes', (req, res) => {
    res.json(notes);   
});

// get note by id route
router.get('/note/:id', (req, res) => {
    // if id exists, find by id
    // else res.send(404);

});

// post route
router.post('/notes', (req, res) => {
    // set random id to each new note
    req.body.id = Math.floor((Math.random()*1000000000000000));
    
    console.log(req.body);
    res.json({
        message: 'Note created.',
        id: req.body.id
    })
});

// // delete route
// router.delete('/notes/:id')

module.exports = router;