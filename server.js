// require express 
const express = require('express');
// create a port for our server
const PORT = process.env.PORT || 3001;

const app = express();

// Express middleware
// parse incoming string or array data
app.use(express.urlencoded({ extended: true}));
// parse incoming JSON data
app.use(express.json());



app.get('/', (req, res) => {
    res.json({
        message: 'Testing testing hello testing',
    });
});

// Defaut response for requests (Not Found)
app.use((req, res) => {
    res.status(404).end();
});



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});