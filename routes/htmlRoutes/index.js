const path = require('path');
const router = require('express').Router();

// route that directs to index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// route that directs to notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// catch all that directs to index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

module.exports = router;