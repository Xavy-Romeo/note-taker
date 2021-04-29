const router = require('express').Router();


// get all notes route
router.get('/notes', (req, res) => {
    res.json({
        message: 'Get notes api route',
    });
});

// get note by id route
router.get('/note/:id', (req, res) => {
    res.json({
        message: 'Get note by id route',
    });
});

// post route
router.post('/notes', (req, res) => {
    res.json({
        message: 'Note created.'
    })
});

// Defaut response for requests (Not Found)
router.use((req, res) => {
    res.status(404).end();
});





















module.exports = router;